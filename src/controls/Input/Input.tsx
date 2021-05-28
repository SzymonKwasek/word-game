import "./Input.scss";

interface IInputProps {
    Value: string;
    OnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    Validation?: "success" | "error" | undefined;
    ValidationMessage?: string;
    Placeholder?: string;
}

const Input = ({ Value, OnChange, Validation, ValidationMessage, Placeholder }: IInputProps) => {
    return (
        <div className="input-wrapper">
            <input
                placeholder={Placeholder}
                className={`input ${Validation === "error" ? "input--error" : ""}`}
                value={Value}
                onChange={OnChange} />
            {Validation === "error" &&
                <div className="input__validation input__validation--error">
                    {ValidationMessage}
                </div>
            }
        </div>
    );
}

export default Input;