# Климов Дмитрий для ScoreWarrior
# Первоначальная настройка
В папках /project/dashboard и /project/ad-service добавить файл окружения .env  
В /project/ad-service требуется добавить:  
MONGODB_URL=*URL MongoDB*  
PORT=*Порт проекта*  
SECRET=*Секретное слово для bcrypt*  
В /project/dashboard требуется добавить:  
MONGODB_URL=*URL MongoDB*  
PORT=*Порт проекта*  
SECRET=*Секретное слово для bcrypt*  
AD_TOKEN=*Токен, полученный из рекламного сервиса*  
# Dashboard  
URL: http://klimov-web.online/  
Frontend Directory: /buildSrc/dashboard  
Backend Directory: /project/dashboard  
Порядок запуска проекта:  
```sh
npm install
npm run populate
npm start
```
npm run populate - заполняет базу "рыбными" данными  

# AdService
URL: http://klimov-web.ru/  
Frontend Directory: /buildSrc/ad-service  
Backend Directory: /project/ad-service  
Порядок запуска проекта:  
```sh
npm install
npm run populate
npm start
```
npm run populate - заполняет базу базовыми типами событий и добавляет контрагента

# Использованные технологии
- Backend - NodeJS
- Frontend - ReactJS
- Database - MongoDB
