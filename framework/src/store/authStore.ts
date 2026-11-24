
import { create } from "zustand";

type MessageType = "success" | "error" | "info";

interface AuthState {
    message: string;
    messageType: MessageType;
    rememberedEmail: string;

    login: (email: string, password: string, remember: boolean) => void;
    register: () => void;
}

const correctEmail = "student@example.com";
const correctPassword = "Andrusha225";

export const useAuthStore = create<AuthState>((set) => ({
    message: "",
    messageType: "info",
    rememberedEmail: localStorage.getItem("email") ?? "",

    login: (email, password, remember) => {
        const normalizedEmail = email.trim().toLowerCase();

        if (!normalizedEmail || !password) {
            set({
                message: "Заполните все поля!",
                messageType: "error",
            });
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(normalizedEmail)) {
            set({
                message: "Введите правильную почту!",
                messageType: "error",
            });
            return;
        }

        if (password.length < 8) {
            set({
                message: "Пароль должен содержать минимум 8 символов!",
                messageType: "error",
            });
            return;
        }

        if (
            normalizedEmail === correctEmail &&
            password === correctPassword
        ) {
            if (remember) {
                localStorage.setItem("email", normalizedEmail);
            } else {
                localStorage.removeItem("email");
            }

            set({
                message: "Вы успешно вошли!",
                messageType: "success",
                rememberedEmail: remember ? normalizedEmail : "",
            });
        } else {
            set({
                message: "Неверная почта или пароль!",
                messageType: "error",
            });
        }
    },

    register: () => {
        set({
            message: "Регистрация пока недоступна.",
            messageType: "info",
        });
    },
}));
