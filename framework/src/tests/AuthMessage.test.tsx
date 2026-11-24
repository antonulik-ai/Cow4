import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AuthMessage from "../components/AuthMessage";

describe("AuthMessage", () => {
    it("отображает текст сообщения", () => {
        render(
            <AuthMessage
                message="Вы успешно вошли!"
                messageType="success"
            />,
        );

        expect(screen.getByRole("status")).toHaveTextContent(
            "Вы успешно вошли!",
        );
    });

    it("добавляет CSS-класс типа сообщения", () => {
        render(
            <AuthMessage
                message="Неверные данные"
                messageType="error"
            />,
        );

        expect(screen.getByRole("status")).toHaveClass("error");
    });
});