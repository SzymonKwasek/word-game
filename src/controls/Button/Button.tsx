import "./Button.scss";

interface IButtonProps {
    Text: string;
    OnClick: () => void;
    ClassName?: string;
}

const Button = ({ Text, ClassName, OnClick }: IButtonProps) => {
    return (
        <button className={`button ${ClassName ? ClassName : ""}`} onClick={OnClick}>{Text}</button>
    );
}

export default Button;