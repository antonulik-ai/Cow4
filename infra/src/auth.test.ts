import { describe, it, expect } from "vitest";
import { checkCredentials } from "./auth";

describe("checkCredentials", () => {
    it("принимает правильные данные", () => {
        expect(checkCredentials("student@example.com", "Andrusha225")).toBe(
            true,
        );
    });

    it("не принимает неправильную почту", () => {
        expect(checkCredentials("wrong@example.com", "Andrusha225")).toBe(
            false,
        );
    });

    it("не принимает неправильный пароль", () => {
        expect(checkCredentials("student@example.com", "WrongPassword")).toBe(
            false,
        );
    });

    it("не зависит от регистра букв в почте", () => {
        expect(checkCredentials("STUDENT@EXAMPLE.COM", "Andrusha225")).toBe(
            true,
        );
    });
});
