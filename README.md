# VEX

## Table of Contents

- [About](#about)
- [Backend Information](#backend-information)
- [React Frontend Information](#react-frontend-information)
- [MYSQL Information](#mysql-Information)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

The "VEX" project is a comprehensive solution developed with a Node.js backend, React Native frontend, and PostgreSQL database. Its primary purpose is to provide a platform for a simple control over your small business for the ones who don't have a good knowledge and familiarity with the tecnology and complex interfaces.

## Backend Information <a name = "backend-information"></a>

### Project Structure

The backend of the SAC Fullnet project is based on Spring Boot, and its `pom.xml` file specifies the project's dependencies, including Java 17 and various Spring Boot starters.

#### Backend Dependencies

- `express`: Web framework for Node.js.
- `express-validator `: Middleware for request data validation.
- `mysql`: Node.js MySQL driver for database connectivity.
- `dotenv`:  Library for managing environment variables.
- `nodemon`: Utility to monitor for changes and restart the server.

### Prerequisites

Before you start with the backend portion of this project, ensure that you have Node.js and npm installed on your system.

You can verify that these prerequisites are installed using the following commands:

```
# Check Node.js version
node -v

# Check npm version
npm -v
```


### Installing

Follow these steps to set up the backend development environment:

Clone the Repository: Clone this project repository to your local machine.

```
git clone https://github.com/Chamfrado/VEX_2.0
```
Navigate to the Backend Directory:

```
cd  VEX_2.0/Backend/
```

Install Dependencies: Install the required project dependencies:

```
npm install
```
Set Up Environment Variables:

Go to .env file in the root of the /backend directory and add your environment variables, including database connection details.

Run the Backend: Start the Spring Boot backend.

```
npm run dev
```
Access the Backend: The backend API can be accessed at http://localhost:3333. You can explore the available endpoints and test the API using tools like Postman or curl.


## React Native Frontend Information <a name = "react-frontend-information"></a>

    The frontend of the "VEX" project is developed using React Native and managed by the Expo framework.


### Project Structure
The frontend of the SAC Fullnet project is developed using React and managed by npm. The package.json file specifies the project's dependencies and scripts.

### Frontend Dependencies
- `expo`: Expo development environment.
- `expo-cli`: Command-line tool for Expo.
- `react-native-table-component`: A library for creating tables in React Native.
- `react-native-svg`: Library for SVG rendering in React Native.

### Prerequisites
BBefore you start with the React Native frontend, ensure that you have Expo and Node.js installed on your system. You can verify these 
prerequisites using the following commands:

```
# Check Node.js version
node -v

# Check Expo version
expo --version
```
### Installing

Follow these steps to set up the React frontend development environment:

If you already got the project, ignore this part, Clone the Repository: Clone this project repository to your local machine.

```
git clone https://github.com/Chamfrado/VEX_2.0
```

Navigate to the Frontend Directory: Change your current working directory to the frontend directory.

```
cd VEX_2.0/frontend

```

Install Dependencies: Install the required project dependencies.

```
npm install
```


Start the React Native frontend application using Expo:

```
expo start
```

The React Native app can be accessed using the Expo Go app on your mobile device. You can interact with the user interface and explore the features of the application.

## MYSQL Information <a name = "mysql-Information"></a>

### Installing
Follow these steps to set up the MySQL database for the "VEX" application:

If you haven't already, you can download and install MySQL from the official website: MySQL Downloads.

Create the Database:

Open a terminal or command prompt and log in to MySQL using the mysql command with a user that has the necessary privileges:

```
mysql -u your_mysql_user -p
```

Replace your_mysql_user with the actual MySQL username you want to use.

Run DDL and DML Scripts:

Navigate to the directory where you have stored the DDL and DML SQL scripts (e.g., VEX_2.0/Utilitys/BD).

Use the mysql command to run the DDL and DML scripts to create and populate the "VEX" database:

```
mysql -u your_mysql_user -p vex < DDLVEX.sql
mysql -u your_mysql_user -p vex < DML_VEX.sql

```
Replace your_mysql_user with your MySQL username and DDLVEX.sql and DML_VEX.sql with the actual names of your DDL and DML SQL script files.

Verify Database Creation:

You can verify that the "vex" database has been created and populated by connecting to it:

```
mysql -u your_mysql_user -p vex
```
This should open the MySQL command-line interface for the "vex" database.

After completing these steps, you have successfully installed the MySQL database, created the "vex" database, and executed the DDL and DML scripts using MySQL.

Feel free to replace PostgreSQL with MySQL in your project setup, and don't forget to update any relevant configuration files in your backend to use MySQL instead of PostgreSQL.



### Contributing
If you would like to contribute to our project, please refer to our Contributing Guidelines for more information.

We welcome contributions from the community and appreciate your support in making our project even better.

Lohran Cintra aka Chamfrado - Project Maintainer
