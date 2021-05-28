import { useEffect, useState, useContext } from "react";
import Button from "../../controls/Button/Button";
import { GameContext } from "../Game";
import "./GameScreen.scss";

interface IGameData {
    Question: string;
    AllWords: string[];
    GoodWords: string[];
}

const GameScreen = () => {
    const { MoveForward, SetGameScore } = useContext(GameContext);
    const [GameData, setGameData] = useState<IGameData>();
    const [SelectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [ShowAnswers, setShowAnswers] = useState<boolean>(false);

    useEffect(() => {
        fetch('http://localhost:8000/get-questions')
            .then(res => res.json())
            .then(data => setGameData(data));
    }, []);

    const HandleAddAswer = (word: string) => {
        if (WordClicked(word)) {
            setSelectedAnswers(SelectedAnswers.filter(item => item !== word))
                ;
        } else {
            setSelectedAnswers([...SelectedAnswers, word])
        }
    }

    const OnCheckAnswers = () => {
        setShowAnswers(true);
    }

    const WordClicked = (word: string) => {
        return SelectedAnswers.indexOf(word) > -1;
    }

    const IsCorrectWord = (word: string): boolean => {
        return GameData ? GameData?.GoodWords.indexOf(word) > -1 : false;
    }

    const OnFinishGame = () => {
        const score = CalculateScore();
        SetGameScore(score);
        MoveForward();
    }

    const CalculateScore = () => {
        let badAnswers = 0;
        let goodAnswers = 0;
        SelectedAnswers.forEach(answer => {
            if (GameData?.GoodWords.includes(answer)) {
                goodAnswers++;
            } else {
                badAnswers++;
            }
        });
        return GameData ? (goodAnswers * 2) - (badAnswers + GameData?.GoodWords.length - goodAnswers) : 0;
    }

    return (
        <div className="game-screen">
            <h3 className="game-screen__title">{GameData?.Question}</h3>
            <div className={`game-screen__panel ${ShowAnswers ? "game-screen__panel--disabled" : ""}`}>
                {GameData?.AllWords.map((word, index) => {
                    return <Button
                        key={index}
                        ClassName={`word ${WordClicked(word) ? "word--checked" : ""} ${ShowAnswers ? (WordClicked(word) ? (IsCorrectWord(word) ? "word--correct" : "word--incorrect") : "") : ""}`}
                        Text={word}
                        OnClick={() => HandleAddAswer(word)} />
                })}
            </div>
            {ShowAnswers ?
                <Button Text="finish game" OnClick={OnFinishGame} />
                :
                <Button Text="check answers" OnClick={OnCheckAnswers} />
            }
        </div>
    );
}

export default GameScreen;