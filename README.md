# BuildingCodeBlog
A supportive community to share your coding adventures with.

## Description
BuildingCodeBlog is a CMS-style blog site similar to WordPress where developers can publish their blog posts and comment on other developers' posts. This site is built from scratch following the MVC paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. The site is deployed on Heroku.

## Table of Contents
User Story
Acceptance Criteria
Mock-Up
Getting Started
Technologies Used
Installation
Usage
Deployment
Contributing
License

## User Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

## Mock-Up
The following animation demonstrates the application functionality:



## Getting Started
Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the express-handlebars package to implement Handlebars.js for your Views, use the MySQL2 and Sequelize packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the dotenv package to use environment variables, the bcrypt package to hash passwords, and the express-session and connect-session-sequelize packages to add authentication.

Note: The express-session package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

## Technologies Used
Node.js
Express.js
Handlebars.js
MySQL2
Sequelize
dotenv
bcrypt
express-session
connect-session-sequelize

## Installation
Clone the repository:
git clone git@github.com:MagsZavala/BuildingCodeBlog.git
Navigate to the project directory:
Copy code
cd BuildingCodeBlog
Install the dependencies:
Copy code
npm install
Set up your environment variables in a .env file:
Copy code
DB_NAME='buildingcodeblog'
DB_USER='your_mysql_username'
DB_PASSWORD='your_mysql_password'
SECRET='a_very_secure_and_unique_secret_key'
Set up the database:
Copy code
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

## Usage
Start the server:
Copy code
npm start
Open your browser and go to http://localhost:3001.

## Deployment
Ensure you have a Heroku account and the Heroku CLI installed.
Log in to Heroku:
Copy code
heroku login
Create a new Heroku app:
Copy code
heroku create your-app-name
Add the JawsDB MySQL add-on to your app:
Copy code
heroku addons:create jawsdb:mysql
Set your environment variables on Heroku:
Copy code
heroku config:set DB_NAME='heroku_db_name'
heroku config:set DB_USER='heroku_db_user'
heroku config:set DB_PASSWORD='heroku_db_password'
heroku config:set SECRET='a_very_secure_and_unique_secret_key'
Deploy the application:
Copy code
git push heroku main

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License.

