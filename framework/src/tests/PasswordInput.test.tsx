import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PasswordInput from "../components/PasswordInput";

describe("PasswordInput", () => {
    it("отображает поле пароля", () => {
        render(<PasswordInput password="" onPasswordChange={() => {}} />);

        expect(screen.getByLabelText("Пароль")).toBeInTheDocument();
    });

    it("вызывает функцию при изменении пароля", async () => {
        const user = userEvent.setup();
        const onPasswordChange = vi.fn();

        render(
            <PasswordInput password="" onPasswordChange={onPasswordChange} />,
        );

        await user.type(screen.getByLabelText("Пароль"), "test1234");

        expect(onPasswordChange).toHaveBeenCalled();
        expect(onPasswordChange).toHaveBeenLastCalledWith("4");
    });
});