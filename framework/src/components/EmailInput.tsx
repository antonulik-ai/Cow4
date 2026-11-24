interface EmailInputProps {
    email: string;
    onEmailChange: (email: string) => void;
}

function EmailInput({ email, onEmailChange }: EmailInputProps) {
    return (
        <>
            <label htmlFor="email">Электронная почта</label>
            <input
                type="email"
                id="email"
                placeholder="Введите почту"
                value={email}
                onChange={(event) => onEmailChange(event.target.value)}
                required
            />
        </>
    );
}

export default EmailInput;