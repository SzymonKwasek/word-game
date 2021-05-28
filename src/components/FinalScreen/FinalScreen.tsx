import { useContext } from "react";
import { GameContext } from "../Game";
import "./FinalScreen.scss";

const FinalScreen = () => {
    const { PlayerName, GameScore } = useContext(GameContext);
    return (
        <div className="final-screen">
            <h2 className="final-screen__title">Congratulations, {PlayerName}!</h2>
            <p className="final-screen__text">Your score:</p>
            <p className="final-screen__text final-screen__text--blue">{`${GameScore} points`}</p>
        </div>
    );
}

export default FinalScreen;