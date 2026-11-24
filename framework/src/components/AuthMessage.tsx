interface AuthMessageProps {
    message: string;
    messageType: "success" | "error" | "info";
}

function AuthMessage({ message, messageType }: AuthMessageProps) {
    return (
        <p
            id="message"
            role="status"
            aria-live="polite"
            className={`message ${messageType}`}
        >
            {message}
        </p>
    );
}

export default AuthMessage;