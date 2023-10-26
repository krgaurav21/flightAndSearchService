# Welcome to Flight Service 

## Project Setup
    - clone the project on your local
    - Execute `npm install` on the same path as of your root directory as of the downloaded project
    - Create `.env` file in the root directory and add the following environment variables
        - `PORT = 3000`
    - inside the `src/config` folder create a file `config.json` and then add the following piece of json

        .....
            "development": {
                "username": "Your_db_login_name",
                "password": "Your_DB_PASSWORD",
                "database": "Flight_Search_DB_DEV",
                "host": "127.0.0.1",
                "dialect": "mysql"
            }

        ......
    

    - Once you have added your db config as mentioned above, go to the src folder from your terminal and execute `npx sequelize db:create`
    and then execute 
    `npx sequelize db:migrate`

    .........


    ## DB Design
        - Airplane table
        - Flights
        -city
        -Airport

    - A flight belongs to an airplane but an airplane can have multiple flights.
    - A city has many airports but one airport belongs to only one city.
    - One airport can have many flights but one flight belongs to one airport.

