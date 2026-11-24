import { checkCredentials } from "./auth";

// Получаем элементы страницы

const email = document.querySelector<HTMLInputElement>("#email");
const password = document.querySelector<HTMLInputElement>("#password");
const message = document.querySelector<HTMLElement>("#message");
const remember = document.querySelector<HTMLInputElement>("#remember");
const form = document.querySelector<HTMLFormElement>("#login-form");
const register = document.querySelector<HTMLAnchorElement>("#register");

// Проверяем, что все необходимые элементы найдены

if (!form || !register) {
    throw new Error("Не удалось найти форму или ссылку регистрации");
}

// Проверка авторизации

function checkLogin(event: SubmitEvent): void {
    event.preventDefault();

    if (!email || !password || !message || !remember) {
        return;
    }

    // Проверяем заполнение полей

    if (email.value.trim() === "" || password.value === "") {
        message.textContent = "Заполните все поля!";
        message.style.color = "red";
        return;
    }

    // Проверяем формат почты

    if (!email.validity.valid) {
        message.textContent = "Введите правильную почту!";
        message.style.color = "red";
        return;
    }

    // Проверяем длину пароля

    if (password.value.length < 8) {
        message.textContent = "Пароль должен содержать минимум 8 символов!";
        message.style.color = "red";
        return;
    }

    // Сравниваем введённые данные

    if (checkCredentials(email.value, password.value)) {
        message.textContent = "Вы успешно вошли!";
        message.style.color = "green";

        // Сохраняем только почту

        if (remember.checked) {
            localStorage.setItem("email", email.value.trim().toLowerCase());
        } else {
            localStorage.removeItem("email");
        }
    } else {
        message.textContent = "Неверная почта или пароль!";
        message.style.color = "red";
    }
}

form.addEventListener("submit", checkLogin);

// Восстанавливаем почту

const savedEmail = localStorage.getItem("email");

if (savedEmail && email && remember) {
    email.value = savedEmail;
    remember.checked = true;
}

// Кнопка регистрации

register.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    if (!message) {
        return;
    }

    message.textContent = "Регистрация пока недоступна.";
    message.style.color = "blue";
});
