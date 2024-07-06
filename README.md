<!-- # Society Management Project

## Running the Application

- To run the application, ensure you have Nodejs installed and set up.
- Also install all the required dependency and set up MYSQL in your machine.
    ```
        npm i express
	    mpm 
	    go get gorm.io/gorm v1.25.10
    ```
- Use the following command to start the server:

```
go run main.go
``` -->

<div align="center">
  <h1>Society Management Project</h1>
  <h2> Empowering Societies, Simplifying Management </h2>
  <h3> Check out at {link} /</h3>
</div>


<h2>Table of Contents</h2>

- [Project Description](#project-description)
- [Technology Used](#tech-stack)
   - [Frontend](#frontend)
   - [Backend](#backend)
- [System Architecture](#system-architecture)
   - [Front-end](#front-end)
   - [Back-end](#back-end)
   - [Database](#database)
   - [Architecture Diagram](#architecture-diagram)
- [Front End Technology](#front-end-technology)
   - [For Students](#for-students)
   - [For Instructors](#for-instructors)
- [Back End Technology](#back-end-technology)
   - [Data Models and Database Schema](#data-models-and-database-schema)
- [API Design](#api-design)
- [How to Contribute](#how-to-contribute)


## Project Description
<a name="project-description"></a>
The primary objective of this project is to develop a module for our college societies. The website serves as a 
comprehensive platform to showcase the contributions and achievements of students, provide information about the 
society, list faculty coordinators and members, display testimonials, and advertise openings in the society and various other things.. The platform is built using the MERN stack, which includes
ReactJS, NodeJS, MySQL, and ExpressJS.

StudyNotion aims:
* To understand the fundamental components of society management.
* To explore effective practices for administrative management.
* To examine the role of technology in enhancing society management.
* To provide recommendations for improving society management 
systems.

In summary, Society Management is a versatile and intuitive tech platform that is designed to provide an immersive experience to students and a platform for society admins to maintain a complete record of their societies. In the following sections, we will delve into the technical details of the platform, which will provide a comprehensive understanding of the platform's features and functionalities.


<hr>
<p align="right">(<a href="#top">back to top</a>)</p>

## 📌 Technology Used
<a name="tech-stack"></a>

### Frontend
<a F="frontend"></a>
<p>
  <a href="https://www.w3schools.com/html/"> <img src="https://img.icons8.com/color/70/000000/html-5--v1.png" alt="HTML" /></a>
  <a href="https://www.w3schools.com/css/"> <img src="https://img.icons8.com/color/70/000000/css3.png" alt="CSS" /></a>
  <a href="https://www.w3schools.com/js/"><img src="https://img.icons8.com/color/70/000000/javascript--v1.png" alt="JS" /></a>
  <a href="https://www.w3schools.com/REACT/DEFAULT.ASP"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React.js" width="50" height="50" /></a>
  <a href="https://www.w3schools.com/REACT/DEFAULT.ASP"><img src="images/SequelizeImg.jpeg" alt="React.js" width="50" height="50" /></a>
</p>

- **HTML**:HTML (HyperText Markup Language) is a skeleton of a website, structuring content with tags and elements.
- **CSS**:CSS is a style sheet language used to style web pages.It enables the application of different styles based on media types and user preferences, enhancing user accessibility and readability
- **JavaScript**:JavaScript is a programming language used to add interactivity to websites.
- **React.js**:A JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.


### Backend
<a m="backend"></a>
<p>
<a href="https://www.w3schools.com/nodejs/"><img src="https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png" alt="Node.js" width="50" height="50" /></a>
<a href="https://www.javatpoint.com/expressjs-tutorial"><img src="https://github.com/expressjs/expressjs.com/raw/gh-pages/images/express-facebook-share.png" alt="expressjs" width="50" height="50" /></a>
<a href="https://www.mongodb.com/docs/"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1280px-MySQL_logo.svg.png" alt="MySQL Logo" width="50" height="50" /></a>
</p>

- **MySQL**: MySQL is a popular open-source relational database management system (RDBMS) that uses structured query language (SQL) for database access and management.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side scripting and running scripts server-side to produce dynamic web page content.
- **Sequelize**: Sequelize is a promise-based ORM for Node.js that simplifies database interaction by abstracting SQL queries and supporting various SQL dialects. It allows easy management of database models, associations, migrations, and CRUD operations using JavaScript.


<p align="right">(<a href="#top">back to top</a>)</p>

## System Architecture
<a g="system-architecture"></a>
The Society management platform consists of three main components: the front end, the back end, and the database. The platform follows a client-server architecture, with the front end serving as the client and the back end and database serving as the server.

### Front-end 
<a h="front-end"></a>
The front end of the platform is built using ReactJS, ReactJS allows for the creation of dynamic and responsive user
interfaces, which are critical for providing an engaging learning experience to the students.
The front end communicates with the back end using RESTful API calls

### Back-end 
<a i="bront-end"></a>
The back end of the platform is built using NodeJS and ExpressJS,. The back end provides APIs for the front end to consume, which include functionalities such as user authentication, course creation, and course consumption. The back end also handles the logic for processing and storing the course content and user data.


### Database
<a j="database"></a>
The database for the platform is built using MySQL, which is a SQL database thatprovides a flexible and scalable data storage solution.It supports a wide range of operating systems, offers robust data security features, and provides seamless integration with numerous programming languages and platforms, making it a versatile solution for database management.

### Architecture Diagram
<a i="architecture-diagram"></a>
Here is a high-level diagram that illustrates the architecture of the Society management platform:

![Architecture](images/architecture.png)


<hr>
<p align="right">(<a href="#top">back to top</a>)</p>

## Front End Technology
<a k="front-end-technology"></a>

The front end of Society Management has all the necessary pages that a tech platform for all the societies within the college should have. Some of these pages are:

### For Students:
<a k="for-students"></a>
* Homepage: This page will have a brief introduction to the platform, as well a list of all the societies of the college.
* Course List: This page will have a list of all the courses available on the platform,
along with their descriptions and ratings.
* Wishlist: This page will display all the courses that a student has added to their
wishlist.
* Cart Checkout: This page will allow the user to complete the course purchase.
* Course Content: This page will have the course content for a particular course,
including videos, and other related material.
* User Details: This page will have details about the student's account, including
their name, email, and other relevant information.
* User Edit Details: This page will allow the student to edit their account details.


### For Instructors:
<a k="for-instructors"></a>
* Dashboard: This page will have an overview of the instructor's courses, as well as
the ratings and feedback for each course.
* Insights: This page will have detailed insights into the instructor's courses,
including the number of views, clicks, and other relevant metrics.
* Course Management Pages: These pages will allow the instructor to create, update,
and delete courses, as well as manage the course content and pricing.
* View and Edit Profile Details: These pages will allow the instructor to view and edit
their account details.
PAGE 3
For Admin (this is for future scope):
* Dashboard: This page will have an overview of the platform's courses, instructors,
and students.
* Insights: This page will have detailed insights into the platform's metrics, including
the number of registered users, courses, and revenue.
* Instructor Management: This page will allow the admin to manage the platform's
instructors, including their account details, courses, and ratings.
* Other Relevant Pages: The admin will also have access to other relevant pages, such
as user management and course management pages.

To build the front end, we use frameworks and libraries such as ReactJS, We also use CSS and Tailwind, which are
styling frameworks that help make the user interface look good and responsive.
To manage the state of the application, we use Redux, which is a popular state management
library for React. 

<hr>
<p align="right">(<a href="#top">back to top</a>)</p>

## Back End Technology
<a k="back-end-technology"></a>

Description of the Back-end Architecture: 
Society Management uses a monolithic architecture, with the backend built using Node.js and Express.js, and MySQL as the primary database. 

Features and Functionalities of the Back-end: 
The back end of Society Management provides a range of features and functionalities, including:
1. User authentication and authorization: Students and instructors can sign up and log in to the platform using their college assigned microsoft email addresses and password.
2. Society management: Society Heads can create, fetch, update, and delete the societies, as well as manage society content and media. Students can view and can easily decide o participate in their desired society.


Frameworks, Libraries, and Tools used: 
The back end of StudyNotion uses a range of frameworks, libraries, and tools to ensure its functionality and performance, including:
1. Node.js: Node.js is used as the primary framework for the back end.
2. MySQL: MySQL is used as the primary database, providing a flexible and scalable data storage solution.
3. Express.js: Express.js is used as a web application framework, providing a range of features and tools for building web applications.
4. JWT: JWT (JSON Web Tokens) are used for authentication and authorization,
providing a secure and reliable way to manage user credentials.
5. Bcrypt: Bcrypt is used for password hashing, adding an extra layer of security to user
data.
6. Sequelize: Sequelize is a promise-based Node.js ORM (Object-Relational Mapping) tool that provides an easy way to interact with SQL databases. It supports various SQL dialects such as PostgreSQL, MySQL, SQLite, and MSSQL. Sequelize allows developers to define models for their database tables, perform CRUD operations, and manage database migrations, associations, and transactions using JavaScript. It abstracts the complexity of raw SQL queries, making it easier to work with databases in a more object-oriented manner.

<hr>


### Data Models and Database Schema:
<a k="data-models-and-database-schema"></a>
The back end of Society Management uses a range of data models and database schemas to manage data, including:
1. Users schema:
2. Roles schema:
3. StudentProfile schema:
3. SocietyProfile schema:
3. SocietyEvents schema:
3. SocietyAchievements schema:
3. StudentAchievements schema:
3. StudentMarking schema:

Overall, the back-end of Society Management is designed to provide a robust and scalable solution for a tech platform for a college, with a focus on security, reliability, and ease of use. By using the right frameworks, libraries, and tools, we can ensure that the platform functions smoothly and provides an optimal user experience for all its users.

![Database Schema](images/databaseSchema.png)


<hr>
<p align="right">(<a href="#top">back to top</a>)</p>

## API Design
<a k="api-design"></a>

* The Society Management platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE.

* Sample list of API endpoints and their functionalities is completely listed at http://localhost:3000/docs

* The installation steps are listed below and you can localhost on your system.

- In conclusion, the REST API design for the Society Management tech platform is a crucial part of the project. The API endpoints and their functionalities are designed to ensure seamless communication between the front-end and back-end of the application.
- By following RESTful principles, the API will be scalable, maintainable, and reliable. The sample API requests and responses provided above illustrate how each endpoint will function and what kind of data it will accept or return.
- With this API design, Society Managaement will be able to provide a smooth user experience while ensuring security and stability.

## Error Handling
<a k="api-design"></a>
The API will return appropriate HTTP status codes and error messages for invalid requests or server errors.

* 400 Bad Request: The request was invalid.
* 404 Not Found: The requested record was not found.
* 500 Internal Server Error: An error occurred on the server.

<hr>
<p align="right">(<a href="#top">back to top</a>)</p>


## How to Contribute ?
<a k="how-to-contribute"></a>
<div>
  <h3> Installation and Setup Guide </h3>
</div

<br>

To get started with Society Management on your local machine, follow these steps:

#### Prerequisites


Before you begin, ensure you have the following prerequisites installed:

- Node.js (version X.X.X) ⚙️
- MySQL (version X.X.X) 📦
- Git 📂

  <p align="right">(<a href="#top">back to top</a>)</p>

#### Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/SocietyBackend_NodeJS.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd SocietyBackend_NodeJS
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   npm install express 
   npm install --save sequelize mysql2
   npm install express swagger-jsdoc swagger-ui-express
   ```

4. **Set Environment Variables:**

   ```bash
   cd server
   ```

   Create a `.env` file or rename it to `.env` if exists already in server for the following environment variables:

   ```bash
   DB_USER = root
   DB_PASS = yourDatabasePassword
   DB_NAME = yourDatabaseName
   DB_HOST = 127.0.0.1

   ```
5. **Starting the server**

   ```bash
   Use the following command to start the server:

   node server.js

   ```
   