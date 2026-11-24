import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailInput from "../components/EmailInput";

describe("EmailInput", () => {
    it("отображает поле электронной почты", () => {
        render(<EmailInput email="" onEmailChange={() => {}} />);

        expect(
            screen.getByLabelText("Электронная почта"),
        ).toBeInTheDocument();
    });

    it("вызывает функцию при изменении почты", async () => {
        const user = userEvent.setup();
        const onEmailChange = vi.fn();

        render(<EmailInput email="" onEmailChange={onEmailChange} />);

        await user.type(
            screen.getByLabelText("Электронная почта"),
            "test@example.com",
        );

        expect(onEmailChange).toHaveBeenCalled();
        expect(onEmailChange).toHaveBeenLastCalledWith("m");
    });
});