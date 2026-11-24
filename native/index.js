
// Правильные данные для входа

const correctEmail = "student@example.com";
const correctPassword = "Andrusha225";

// Получаем элементы страницы

const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const remember = document.getElementById("remember");
const message = document.getElementById("message");

// Проверка авторизации

function checkLogin(event) {

    event.preventDefault();

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

    if (
        email.value.trim().toLowerCase() === correctEmail &&
        password.value === correctPassword
    ) {

        message.textContent = "Вы успешно вошли!";
        message.style.color = "green";

        // Сохраняем только почту

        if (remember.checked) {
            localStorage.setItem("email", correctEmail);
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

if (savedEmail) {
    email.value = savedEmail;
    remember.checked = true;
}

// Кнопка регистрации

document.getElementById("register").addEventListener("click", (event) => {

    event.preventDefault();

    message.textContent = "Регистрация пока недоступна.";
    message.style.color = "blue";

});
