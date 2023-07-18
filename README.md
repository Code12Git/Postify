## Postify

Postify is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a user registration and login system with JWT token authentication and uses cookies to manage user sessions. Users can create, read, update, and delete posts once they are logged in.

## Features

User registration and login system with validation

JWT token authentication for secure user sessions

Create, read, update, and delete posts

User-friendly interface for a seamless user experience

## Technologies Used

MongoDB: A NoSQL database for storing user and post data

Express.js: A web application framework for Node.js to build the server-side API

React.js: A JavaScript library for building user interfaces

Node.js: A JavaScript runtime environment for server-side development

JWT (JSON Web Tokens): A standard for token-based authentication

Cookies: Used to manage user sessions and store authentication tokens

## Installation

To run the project locally, follow these steps:

Clone the repository: git clone https://github.com/Code12Git/Postify

Navigate to the project directory: cd postify

Install the dependencies for the server: cd server && npm install

Install the dependencies for the client: cd ../client && npm install

Create a .env file in the server directory and configure the following environment variables:

DB_URI: Connection URI for your MongoDB database

JWT_SECRET: Secret key for JWT token generation

COOKIE_SECRET: Secret key for cookie encryption

Start the server: cd ../server && npm start

Start the client: cd ../client && npm start

Open your browser and navigate to http://localhost:3000 to access the Postify application.

## Usage

Once the application is running, you can:

Register a new user account by providing the necessary information.

Log in with your registered credentials.

Create new posts by filling out the post form and submitting it.

View a list of all posts.

Edit or delete your own posts.

Log out of the application to end the session.

## Contributing

Contributions to Postify are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
