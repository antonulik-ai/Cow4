const correctEmail = "student@example.com";
const correctPassword = "Andrusha225";

export function checkCredentials(email: string, password: string): boolean {
    return (
        email.trim().toLowerCase() === correctEmail &&
        password === correctPassword
    );
}
