# Социальная сетья для Программистов

## Как запустить проект

### Запуск через Docker

- Установить можно на странице [docker](https://www.docker.com/products/docker-desktop/)
- После установки проверьте работу docker
  - `$ docker version`
- Клонируйте этот репозиторий
  - `$ git clone git@github.com:Evollt/programmers-social.git`
- Откройте проект и запустите командой
  - `$ docker-compose up -d`

### Установка через Nodejs

- Установить можно на сайте [nodejs](https://nodejs.org/en)
- Клонируйте этот репозиторий
  - `$ git clone git@github.com:Evollt/programmers-social.git`
- Откройте проект и установите зависимости
  - `$ npm install`
  - `$ npm install -g nodemon`
  - `$ npm install -g ts-node`
- Запустите проект
  - `$ npm run dev`

### Настоятельно рекомендую запускать через docker, потому что тогда все будет устанавливаться под капотом и вам не нужно будет ничего делать и устанавливать при каждом обновлении проекта

### После этого проект откроется на `localhost:8000`
