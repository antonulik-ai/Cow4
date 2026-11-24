interface PasswordInputProps {
    password: string;
    onPasswordChange: (password: string) => void;
}

function PasswordInput({
    password,
    onPasswordChange,
}: PasswordInputProps) {
    return (
        <>
            <label htmlFor="password">Пароль</label>
            <input
                type="password"
                id="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(event) => onPasswordChange(event.target.value)}
                required
            />
        </>
    );
}

export default PasswordInput;