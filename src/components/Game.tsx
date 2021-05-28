import { createContext, useReducer } from "react";
import FinalScreen from "./FinalScreen/FinalScreen";
import GameScreen from "./GameScreen/GameScreen";
import LoginScreen from "./LoginScreen/LoginScreen";

interface IState {
    PlayerName: string;
    GameScore: number;
    Step: number;
}

interface IContext {
    PlayerName: string;
    GameScore: number;
    MoveForward: VoidFunction;
    OnNameChange: (name: string) => void;
    SetGameScore: (score: number) => void;
}

export const GameContext = createContext<IContext>(
    {
        PlayerName: "",
        GameScore: 0,
        MoveForward: () => { },
        OnNameChange: (name: string) => { },
        SetGameScore: (score: number) => { }
    }
);

const Game = () => {
    const [state, setState] = useReducer(
        (oldState: IState, newState: Partial<IState>) => ({ ...oldState, ...newState }),
        {
            PlayerName: "",
            GameScore: 0,
            Step: 0
        }
    );

    const {
        PlayerName,
        GameScore,
        Step
    } = state;

    const RenderCorrectStep = () => {
        switch (Step) {
            case 0:
                return <LoginScreen />;
            case 1:
                return <GameScreen />;
            case 2:
                return <FinalScreen />;
        }
    }

    const MoveForward = () => {
        setState({
            Step: Step + 1
        });
    }

    const OnNameChange = (name: string) => {
        setState({
            PlayerName: name
        });
    }

    const SetGameScore = (score: number) => {
        setState({
            GameScore: score
        });
    }

    return (
        <GameContext.Provider value={{ PlayerName, GameScore, MoveForward, OnNameChange, SetGameScore }}>
            {RenderCorrectStep()}
        </GameContext.Provider>
    );
}

export default Game;