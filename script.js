// Заданные учётные данные (в реальном приложении храните на сервере!)
const validCredentials = {
    username: "admin",
    password: "12345"
};

// Элементы DOM
const authForm = document.getElementById('authForm');
const errorMessage = document.getElementById('error-message');
const welcomeMessage = document.getElementById('welcome-message');
const userNameSpan = document.getElementById('user-name');
const logoutButton = document.getElementById('logout');

// Обработчик отправки формы
authForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Получаем введённые данные
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Проверяем учётные данные
    if (username === validCredentials.username && password === validCredentials.password) {
        // Успешная авторизация
        showWelcomeMessage(username);
    } else {
        // Ошибка авторизации
        errorMessage.textContent = 'Неверный логин или пароль';
    }
});

// Показываем приветственное сообщение
function showWelcomeMessage(username) {
    authForm.classList.add('hidden');
    errorMessage.textContent = '';
    userNameSpan.textContent = username;
    welcomeMessage.classList.remove('hidden');
}

// Обработчик кнопки выхода
logoutButton.addEventListener('click', function() {
    welcomeMessage.classList.add('hidden');
    authForm.classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});
