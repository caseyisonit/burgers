# Eat-Da-Burger - Bob's Burgers Edition

### Welcome to my burger app!

Welcome to Bob's Burgers, home of the punniest burgers you can find. Step right up and place your order or go ahead and devour one that's already been made. 

### Functionality
Using an ORM, the app has 3 basic CRUD functions...

* READ from a database and display using Handlebars
* UPDATE a burger by clicking the "Eat Me" button 
* CREATE a new burger using the "Place Order" form

**Example of app in action**  
![](gifs/burgers_app.gif)   

### Deploying/Using My App

[You can check out my site on Heroku right here!](https://enigmatic-wildwood-34882.herokuapp.com/)

OR

You can also set it up locally by following these instructions:  

* Clone the repo 
```
git clone <repo>
```
* Navigate into the directory and install the dependencies. 
``` 
cd <repo>
npm install 
```
* Create MySQL database using the db/schema.sql & db/seeds.sql files. 
* Check database settings in the config folder.
* Get the server running by running the following command.
```
nodemon server.js
```
* Go to localhost:3000 in your browser and curb your hunger!

### Technologies Used
* Handlebars 
* MySQL
* Node JS
* Express 
* ORM
* jQuery and AJAX
* Materialize & Custom CSS