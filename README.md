
npm install mongoose express jsonwebtoken dotenv bcryptjs

npm install  body-parser cors --save

npm install nodemon -D

mongoose - NOSQL
express - Nodejs web application framework 
dotenv - Dotenv is a zero-dependency module that loads environment variables from a .env file
bcryptjs - Optimized bcrypt in JavaScript with zero dependencies
body-parser - helps to parse the request and create the req.body object
cors -  provides Express middleware to enable CORS with various options.
nodemon - automatically restarting application

RUN - npm run dev


#HTTP Status Codes
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
