# My Game Corner
<img src="public/assets/mgc_logo.png"></img>

# Technologies Used

Frontend: HTML, CSS, JavaScript  
Backend: Node.js, Express.js  
Database: MySQL  

# Project Overview

The My Game Corner project aims to provide an interactive platform for game reviews. It allows users to register, log in, and publish reviews about the games they play. Additionally, it provides visual charts based on the game reviews.

Illustrative Representation of the User Interface:

+-----------------------+ <br>
|     My Game Corner    | <br>
+-----------------------+ <br>
|    [Login | Register] | <br>
+-----------------------+ <br>
|      Hello, User      | <br>
+-----------------------+ <br>
|   [Game 1] [Game 2]   | <br>
|   [Game 3] [Game 4]   | <br>
+-----------------------+ <br>
|   [Profile | Logout]  | <br>
+-----------------------+ <br>

# Features

**User Registration**  
- **Objective**: Enable new users to register on the platform.  
- **How It Works**: Users provide a username, email, and password. The system stores the data in the MySQL database, allowing users to log in later.

**User Authentication**  
- **Objective**: Allow users to log in and access personalized features.  
- **How It Works**: Users submit their credentials (username and password), which are verified by the system. If valid, the user is authenticated and granted access.

**Game Reviews**  
- **Objective**: Allow users to publish their reviews of games.  
- **How It Works**: Users select a sentiment (positive or negative), write a message, and submit their review. The system records the review in the database, linking it to the game and the user.

# Business Rules in the Code

1. **User Registration and Login**  
   - **Registration**: User data (name, email, password) is validated and stored in the MySQL database.  
   - **Login**: The system checks if the provided credentials match the stored data. If valid, the user is authenticated.

2. **Submitting Reviews**  
   - **Game Reviews**: Users can submit a review for a specific game, including a message and a sentiment (positive or negative).  
   - **Validation**: The system ensures all necessary fields (message and sentiment) are filled before allowing submission.

3. **Sessions and Local Storage**  
   - **User Session**: Upon login, user information is stored in `sessionStorage` to maintain authentication state.  
   - **Logout**: When the user logs out, the `sessionStorage` is cleared, ending the session.

# Architecture and Data Flow

The application follows a client-server architecture, where the frontend handles the user interface, and the backend manages business logic and data storage.

- **Frontend**: Built with HTML, CSS, and JavaScript, the frontend sends requests to the backend and displays information interactively.  
- **Backend**: Developed with Node.js and Express, the backend processes HTTP requests, executes business logic, and interacts with the MySQL database.  
- **Database**: The MySQL database stores user, game, and review information.

**Data Flow**:

User --> Frontend (HTML, CSS, JS) --> HTTP Request --> Backend (Express, Node.js)  
                                                 |  
                                                 v  
                                        Database (MySQL)

# Usage Instructions

Clone the repository, then with Node.js installed, run the command `npm install`. Use the database script and configure the `.env` file. After that, run the command `npm start` and enjoy the site.

# Conclusion

The My Game Corner project provides an efficient platform for users to interact with games, leave reviews, and receive visual feedback through charts. It is developed using modern technologies like Node.js, Express, MySQL, HTML, CSS, and JavaScript, offering a robust experience for both developers and users.
