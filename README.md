# oxem-table

Написано без использования сторонних библиотек. Только bootstrap для минимальной стилизации.

## Установка

Просто сделать 
```console
npm install
```

## Тестирование

Из тестов делал только unit на jest'е. Сами тесты лежат [тут](./tests/unit). Под гитом лежат только тесты для компонента Table.

Для запуска
```console
npm run test:unit
```

## Docker

1. Сборка образа -
```console
docker build -t oxem-table
```
2. Запуск на порту 8080 -
```console
docker run -it -p 8080:80 --rm --name oxem-table oxem-table
```
