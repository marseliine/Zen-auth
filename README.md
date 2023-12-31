## Данные для входа

login: kate

password: kate

## Общие данные

Основные цвета - #435261, #8676b6. Фон страницы - белый. Ссылки - #2d6fb1. Базовый размер шрифта - 14px;

Можно устанавливать любые необходимые npm-пакеты.

## 1. Навигация, главное меню.

Вывести главное меню, состоящее из пунктов: Home, Inventory, Reports, Billing, Profile. С каждого пункта меню должен быть переход в соответствующий раздел, вынесенный в отдельный модуль. Модули должны подгружаться динамически. Внутри каждого раздела - страница с заголовком.

Меню должно реагировать на наведение, выбранный пункт меню - выделяться.

## 2. Header

Вывести общий для всех страниц header. В нем разместить ссылку Logout (без функционала) и информацию о пользователе:

- текущие First Name, Last Name
- ссылка на профиль

При желании к ссылке профиля и/или Logout можно добавить иконки.

## 3. Профиль

Добавить страницу для редактирования профиля пользователя. На странице должна быть форма с полями:

- Email - readonly;
- First name - обязательное, не длиннее 255 символов;
- Last name - обязательное, не длиннее 255 символов;
- Phone number - обязательное, 10 символов. "+7" пользователем не вводится, а подставляется автоматически;
- WebSite URL - необязательное, валидный URL.

Чтение и заппись данных из/в API - эмулировать в отдельном сервисе.

## 4 Обратная связь при обновлении профиля.

- Оформить вывод валидационных ошибок формы как всплывающие справа от полей ввода "облачка" красного цвета.
- При успешном обновлении профиля показывать сообщение об этом в Header.
- Эмулировать для определенного набора данных (например, First Name длиной в один символ) возврат ошибки от API. Отобразить её в той же области, что и сообщение об успехе обновления профиля.
- Сообщения об успехе скрывать автоматически через 30 секунд. Сообщения об ошибке должны удаляться после клика пользователя на иконку закрытия (крестик, например) этого сообщения.

## 5. Авторизация

Разделить приложение на два модуля - для неавторизованных пользователей (auth) и пользователей, успешно прошедших авторизацию (app). Запретить неавторизованным пользователям просматривать страницы, относящиеся к модулю app.

Добавить форму для логина; эмулировать запросы-ответы к API - как успешные, так и для некорректной пары логин-пароль.

При логине выдавать пользователю роль (можно случайную из некоторого набора).

Авторизация должна сохраняться при обновлении/закрытии страницы.
