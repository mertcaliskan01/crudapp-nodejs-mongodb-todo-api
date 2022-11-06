
# Jwt Auth, TODO Crud, Nodejs, MongoDb Api Project

................................|￣￣￣￣￣￣￣￣|   
................................|...😎.API.🙌....|   
................................|_______________ |   
............................(\\__/)....||           
............................(•ㅅ•)...||             
............................/|---|.づ              
...............................|.|                     

## Install dependencies

npm install mongoose express jsonwebtoken dotenv bcryptjs

npm install  body-parser cors --save

npm install nodemon -D

npm i express-async-errors

npm i jest supertest mocha


## Notes

mongoose - NOSQL
express - Nodejs web application framework 
dotenv - Dotenv is a zero-dependency module that loads environment variables from a .env file
bcryptjs - Optimized bcrypt in JavaScript with zero dependencies
body-parser - helps to parse the request and create the req.body object
cors -  provides Express middleware to enable CORS with various options.
nodemon - automatically restarting application
express-async-errors - error handling
mocha - Simple, flexible, fun JavaScript test framework for Node.js & The Browser 
jest - Jest is a framework for testing JavaScript code. Unit testing is the main usage of it.
supertest - Using Supertest, we can test endpoints and routes on HTTP servers.




# HTTP Status Codes
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

200 - OK The request succeeded.
201 - Created The request succeeded, and a new resource was created as a result.
400 - Bad Request The server cannot or will not process the request due to something that is perceived to be a client error
401 - Unauthorized, unauthenticated
403 - Forbidden The client does not have access rights to the content
409 - Conflict This response is sent when a request conflicts with the current state of the server.
500 - The server has encountered a situation it does not know how to handle.







## Register

<img width="1360" alt="Screen Shot 2022-09-04 at 14 16 35" src="https://user-images.githubusercontent.com/47431669/188311215-383fb20a-63b5-40d5-9167-f17949188bad.png">

## Login
<img width="1356" alt="Screen Shot 2022-09-04 at 14 17 02" src="https://user-images.githubusercontent.com/47431669/188311235-17f7925d-0bfd-4d4e-a387-7c3e1188d20a.png">

## Welcome
<img width="1361" alt="Screen Shot 2022-09-04 at 14 33 19" src="https://user-images.githubusercontent.com/47431669/188311250-edffc827-3b0f-490c-abc2-c5bb1fa009e2.png">




## Run Project
create .env file
    API_PORT=8080
    MONGO_URI= "mongodb+srv://mcaliskan01:crarjd5QeVPnbYJ@cluster0.3w1x1is.mongodb.net/?retryWrites=true&w=majority"
    TOKEN_KEY = "Random"
    TOKEN_EXPIRES = "2h"
  
TEST - npm test
RUN - npm run dev
