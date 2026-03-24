/
  -- src/
     index.js // server
     models/
     controllers/
     middlewares/
     services/
     utils/
     config/
     repository/


     #Welcome to Flight Search Service
     ##project Setup
     --colne the project on your local
     -- execute `npm install`  on the same path  as of your root directory of download project
     --Create a `.env` file in the root directory and add following environment variable
          -PORT=3000
    --inside the 'src/config' folder create a new file `config.json` and then add the following piece of json
    ...
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "Flight_Search_Db_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  ...


