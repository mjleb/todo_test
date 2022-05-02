# todo_test

Стек: Nodejs+Vue

Проект запущен для тестирования по ссылке: https://todos.mirrorcl.ru/

# Требования к коду
Суть этого тестового - решить поставленную задачу минимально необходимым набором сущностей.

Аккуратность кода - это важно. Убедитесь, что в нем не осталось мусора, отладочных инструкций, закомментированного кода.
Называйте переменные и объекты, чтобы по одному названию был понятен их тип и предназначение.
См. Стив Макконнелл "Совершенный Код" (глава 11): Ссылка на книгу

Из базы должны выбираться только те записи, с которыми планируем работать. Нельзя выбирать всю таблицу целиком.
Модель должна принимать отфильтрованные данные из контроллера. Также нельзя передавать ей данные GET или POST целиком.
В шаблонах не должно быть inline стилей и скриптов.


Любой повторяющийся код - зло. (См. "Предотвращение дублирования кода" раздел 7.1 Макконнелла).
Во фронте в коде рендера не должно быть логики или вычислений. Вся бизнес-логика должна быть в методах класса, или собрана наверху перед разметкой.
Если пишете фронт на React, cостояние всех элементов приложения должно храниться в центральном хранилище (redux, context, etc). Хоть документация и не запрещает local state, использовать его нецелесообразно.


# Протокол тестирования

* Перейти на стартовую страницу приложения. Должен отобразиться список задач. В списке присутствуют поля: имя пользователя, email, текст задачи, статус. Не должно быть опечаток. Зазоры должны быть ровные. Ничего не ползет. Должна быть возможность создания новой задачи. Должна быть кнопка для авторизации.
Не заполнять поля для новой задачи. Сохранить задачу. Должны вывестись ошибки валидации. Ввести в поле email “test”. Должна вывестись ошибка, что email не валиден.

* Создать задачку с корректными данными (имя “test”, email “test@test.com”, текст “test job”). Задача должна отобразиться в списке задач. Данные должны быть ровно те, что были введены в поле формы. После создания задачи должно вывестись оповещение об успехе добавления (обратная связь).
Для проверки XSS уязвимости нужно создать задачу с тегами в описании задачи (добавить в поле описания задачи текст , заполнить остальные поля). Задача должна отобразиться в списке задач, при этом не должен всплыть alert c текстом ‘test’.

* Создать еще 2 задачи. Должна появиться новая страница в пагинации.

* Отсортировать список по полю “имя пользователя” по возрастанию. Список должен пересортироваться. Перейти на последнюю страницу в пагинации. Сортировка не должна сбиться, задачи с последней страницы должны быть отображены. Далее отсортировать по тому же полю, но по убыванию. Перейти на первую страницу. Имя пользователя, которое было последним в списке, должно стать первым. Проделать этот тест для полей “email” и “статус”.

* Перейти на страницу авторизации пользователя. Попробовать залогиниться с пустыми полями. Должна вывестись ошибка, что поля обязательны для заполнения или, что введенные данные не верные. Ввести в поле для имени пользователя “admin1”, в поле для пароля “321”. Должна вывестись ошибка о неправильных реквизитах доступа. Админский доступ не должен быть предоставлен. Ввести данные “admin” в поле для имени и “123” в поле для пароля. Авторизация должна пройти успешно. Должна отобразиться кнопка для выхода из профиля админа.

* Для созданной задачи проставить отметку “выполнено”. Перезагрузить страницу. Отредактировать текст задачи. Сохранить и перезагрузить страницу. Текст задачи должен быть тот, который ввели при редактировании. В общем списке задача должна отображаться уже с двумя отметками: "выполнено" и “отредактировано администратором”. Отметка “отредактировано администратором” должна появляться только в случае изменения текста в теле задачи.

* В общем списке задача должна отображаться со статусом задачи “выполнено”.

* Открыть параллельно приложение в новой вкладке. Разлогиниться в новой вкладке. В этой вкладке не должно быть возможности редактировать задачу. Вернуться в предыдущую вкладку. Отредактировать задачу и сохранить. Отредактированная задача не должна быть сохранена. Приложение должно запросить авторизацию.
