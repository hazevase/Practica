Для запуска фронтенд части проекта стоит прописать команды 

Для пользователей "npm":

                        {
                            cd ff
                            npm install 
                            npm run dev
                        }
Для пользователей "yarn":
                        {
                            cd ff
                            yarn 
                            yarn run dev
                        }


Для запуска бекенд части проекта стоит прописать команды 

Для пользователей "npm":

                        {
                            cd ff
                            npm start
                        }
Для пользователей "yarn":
                        {
                            cd ff
                            yarn start
                        }

Проверьте открытость ваших портов:
Для фронтент части - localhost:5173
Для бекенд части - localhost:8080

В проекте используется нереалиционная база данных MongoDB, не забудьте сменить ссылку на вашу бд в файле "server/db.js"
