### Привет, как ты видишь - тут две директории:
* intership-web
* intership-api

само задание в файле task

## intership-web
тут будет твой будущий проект, сейчас там небольшой boilerplate, некий шаблон/заготовка, с которого ты начнешь свою разработку,
тут сделаны начальные подготовки, в процессе работы, ты будешь изменять файлы именно здесь, внутри папки src

## intership-api
простое API, к которому ты будешь обращаться с запросами, изменять его не нужно, но при желании можно посмотреть как это в общих чертах работает

базовый url для запросов http://127.0.0.1:8080

method and url | request body | response body
--- | --- | ---
post `/authorize` | `{login: string, password: string}` |  `{ isLogin: boolean }`
post `/logout` |  |
get `/organization` |  | `[{id:number, name:string, address:string, INN:number}]`
get `/division/${organizationId}` |  | `[{id:number, id_organization:number, name:string, phone:number}]`
get `/employee/?id=${divisionId}` | | `[{id:number, id_division:number, FIO:string, address:number, position:number}]`
post `/organization/?id=${organizationId}` | `{name:string, address:string, INN:number}` |
post `/division/?id=${divisionId}`| `{id_organization:number, name:string, phone:number}`|
post `/employee/?id=${employeeId}`| `{id_division:number, FIO:string, address:number, position:number}` |
delete `/organization/${organizationId}`| |
delete `/division/?id=${divisionId}`| |
delete `/employee/?id=${employeeId}`| |
put `/organization/?id=${organizationId}`| `{name:string, address:string, INN:number}` |
put `/division/?id=${divisionId}`| `{name:string, phone:number}` |
put `/employee/?id=${employeeId}`| `{FIO:string, address:number, position:number}` |

## P.S.
если будешь успешно справляться со своим непосредственным заданием и есть желание продвинуться дальше - обращайся, в индивидуальном порядке скажем что еще можно будет сделать и получить бонусов в карму

## Подготовка к работе

* уметь гуглить, читать документации, обращаться за советом, чуть-чуть пользоваться консолью, устанавливать программы.
* установить git https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git
* установить lts версию node.js https://nodejs.org/ru/
* склонировать свой проект (гит)
* установить зависимости для проекта (зайти в консоли в каждую директорию, выполнить npm i )
* запустить (npm start)
* открыть проект в редакторе кода (к примеру vscode), по желанию можно добавить плагины (гуглятся "плагины vscode react frontend", не переусердствуй)

## Дополнительные материалы
на случай, если нет на примете
актуальность некоторых ссылок под вопросом, самыми актуальными остаются официальные документации

---
### Git

https://www.youtube.com/watch?v=PEKN8NtBDQ0&list=PLY4rE9dstrJyTdVJpv7FibSaXB4BHPInb

https://githowto.com/ru/setup

https://learn.javascript.ru/screencast/git


---
### JS tutorial

https://learn.javascript.ru/

https://learn.javascript.ru/quiz/js-basic

---
### ES6

https://medium.com/@KucherDev/%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%B8-%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D1%81%D1%82%D0%BE%D0%B8%D1%82-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-es6-3135a973490b


---
### react tutorial

https://monsterlessons.com/project/series/react-dlya-nachinayushih

https://monsterlessons.com/project/series/redux-js-dlya-nachinayushih

https://tuhub.ru/posts/redux-i-thunk-vmeste-react-rukovodstvo-dlya-chajnikov


---
### redux

https://getinstance.info/articles/react/learning-react-redux/

https://habr.com/ru/post/269831/


---
### redux-thunk

https://monsterlessons.com/project/lessons/reduxjs-asinhronnye-eksheny-s-pomoshyu-redux-thunk

https://github.com/reduxjs/redux-thunk


---
### жизненные циклы

https://reactarmory.com/guides/lifecycle-simulators

---
### TypeScript

http://typescript-lang.ru/docs/


---
### React & Redux in TypeScript

https://github.com/piotrwitek/react-redux-typescript-guide

https://github.com/Lemoncode/react-typescript-samples


---
### Route

https://maxpfrontend.ru/tutorials/routing-v-react-na-osnove-browserhistory/

https://getinstance.info/articles/react/learning-react-router/

https://habr.com/ru/post/329996/
