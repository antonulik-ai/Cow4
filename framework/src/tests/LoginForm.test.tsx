
import { describe, expect, it, beforeEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import LoginForm from "../components/LoginForm";
import { useAuthStore } from "../store/authStore";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
    cleanup();

    localStorage.clear();

    useAuthStore.setState({
        message: "",
        messageType: "info",
        rememberedEmail: "",
    });
});

describe("LoginForm", () => {
    it("отображает заголовок и поля авторизации", () => {
        render(<LoginForm />);

        expect(
            screen.getByRole("heading", { name: "Авторизация" }),
        ).toBeInTheDocument();

        expect(screen.getByLabelText("Электронная почта")).toBeInTheDocument();
        expect(screen.getByLabelText("Пароль")).toBeInTheDocument();

        expect(
            screen.getByRole("button", { name: "Войти" }),
        ).toBeInTheDocument();
    });

    it("отображает ссылку регистрации", () => {
        render(<LoginForm />);

        expect(
            screen.getByRole("link", { name: "Регистрация" }),
        ).toBeInTheDocument();
    });

    it("показывает ошибку при неправильных данных", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    await user.type(
        screen.getByLabelText("Электронная почта"),
        "student@example.com",
    );
    await user.type(screen.getByLabelText("Пароль"), "wrongpass");
    await user.click(screen.getByRole("button", { name: "Войти" }));

    expect(screen.getByRole("status")).toHaveTextContent(
        "Неверная почта или пароль!",
    );
});

it("успешно входит и сохраняет почту", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    await user.type(
        screen.getByLabelText("Электронная почта"),
        "student@example.com",
    );
    await user.type(screen.getByLabelText("Пароль"), "Andrusha225");
    await user.click(screen.getByLabelText("Сохранять сессию"));
    await user.click(screen.getByRole("button", { name: "Войти" }));

    expect(screen.getByRole("status")).toHaveTextContent(
        "Вы успешно вошли!",
    );
    expect(localStorage.getItem("email")).toBe("student@example.com");
});
});
