import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import AuthMessage from "./AuthMessage";

function LoginForm() {
    const [email, setEmail] = useState(
        useAuthStore((state) => state.rememberedEmail),
    );
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(
        Boolean(useAuthStore((state) => state.rememberedEmail)),
    );

    const message = useAuthStore((state) => state.message);
    const messageType = useAuthStore((state) => state.messageType);
    const login = useAuthStore((state) => state.login);
    const register = useAuthStore((state) => state.register);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        login(email, password, remember);
    }

    return (
        <section className="login-box">
            <h1>Авторизация</h1>
            <p>Войдите в свой аккаунт</p>

            <div className="social-buttons">
                <a
                    href="https://accounts.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Google
                </a>
                <a
                    href="https://id.vk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ВКонтакте
                </a>
            </div>

            <div className="separator">или</div>

            <form onSubmit={handleSubmit}>
                <EmailInput email={email} onEmailChange={setEmail} />

                <PasswordInput
                    password={password}
                    onPasswordChange={setPassword}
                />

                <div className="remember">
                    <input
                        type="checkbox"
                        id="remember"
                        checked={remember}
                        onChange={(event) => setRemember(event.target.checked)}
                    />
                    <label htmlFor="remember">Сохранять сессию</label>
                </div>

                <button type="submit">Войти</button>

                <AuthMessage
                    message={message}
                    messageType={messageType}
                />
            </form>

            <p className="registration">
                Нет аккаунта?{" "}
                <a
                    href="#register"
                    onClick={(event) => {
                        event.preventDefault();
                        register();
                    }}
                >
                    Регистрация
                </a>
            </p>
        </section>
    );
}

export default LoginForm;