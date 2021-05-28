import { useState, useContext } from "react";
import { GameContext } from "../Game";
import Input from "../../controls/Input/Input";
import Button from "../../controls/Button/Button";
import "./LoginScreen.scss";

const LoginScreen = () => {
    const { OnNameChange, MoveForward, PlayerName } = useContext(GameContext);
    const [DidSubmit, setDidSubmit] = useState<boolean>(false);

    const OnNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        OnNameChange(e.target.value);
    }

    const HandleMoveForward = () => {
        if (PlayerName.length > 0) {
            MoveForward();
        } else {
            setDidSubmit(true);
        }
    }

    const InputValidation = () => {
        return PlayerName.length > 0 ? "success" : "error";
    }

    return (
        <div className="login-screen">
            <h1 className="login-screen__title">Wordcloud game</h1>
            <Input
                Value={PlayerName}
                OnChange={OnNameChangeHandler}
                Validation={DidSubmit ? InputValidation() : undefined}
                Placeholder="Enter your nickname here..."
                ValidationMessage="Enter a valid nickname"
            />
            <Button Text="play" OnClick={HandleMoveForward} />
        </div>
    );
}

export default LoginScreen;