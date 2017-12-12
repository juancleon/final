
# Visitor Check-In Application

## Nonfunctional requirements
The application was designed with several non-functional requirements in mind. It should be scalable to handle ever-increasing amounts of data. Also, it should be reliable so users can access it when it is running. It should provide security for the administrator to prevent unauthorized access to the database. Further, it should be simple and intuitive to use. It should also render the page content so that it can be viewed without obstruction on a tablet device. 
The tools selected are Node.js, Express.js, Handlebars.js and MongoDB as they were utilized in my CSC 583 course. This eliminated the need to become familiar with the specifications and functionality of the tools leading to a smoother implementation of the application.

## Installation instructions
Once the visitor check-in application is downloaded, MongoDB and npm must also be downloaded. To initialize MongoDB, navigate to the bin directory of the MongoDB folder that was downloaded. If using Git (recommended) right-click and select “Git Bash Here.” Otherwise, in Windows a command prompt opened with administrator privileges will also suffice. Next, type “mongod.exe” to start the MongoDB program. To install npm, navigate to the root folder of the Visitor Check-In application, as above with MongoDB, and enter “npm install.” Finally, navigate to the root folder, as above, of the check-in application and type “node app.” This will start the application which can be viewed by navigating a web browser to the web address, localhost:3000.


## Architecture
The application was developed via a three-level system. Handlebars.js provides the user GUI, while Node.js and Express.js transmit the data from the frontend to the endpoints. MongoDB provides the backend database to store user information.

## Plan of action
- [x] Specify non-functional requirements
- [x] Select tools to use for application
- [x] Specify admin and visitor functions
- [x] Integrate visitor functionality into pre-existing admin functionality (design)
- [x] Implement the updated admin functions and new visitor functions
- [x] Test the login function for admins and register function for visitors
	
	
