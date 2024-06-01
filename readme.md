# Academic Review Management System
this guide will walk you through setting up this application.
it's a MERN (MongoDB, Express.js, React.js, Node.js) stack application split into both frontend and backend

### Prerequisites

Before proceeding, ensure you have the following installed on your system:

    - Node.js (https://nodejs.org/)
    - MongoDB (https://www.mongodb.com/)
    - Git (https://git-scm.com/)

### Installation
Clone the repository:
```bash
git clone https://github.com/bxra2/ARMS-system.git
```
Navigate to the project directory:
```bash
cd ARMS-system
```
Navigate to both client and server and install dependencies:
```bash
cd client && npm install
cd server && npm install
```

### Configuration

   Backend Configuration:
        Create a .env file in the root of the backend directory.
        Add your MongoDB connection string and other environment variables to the .env file:
```
MONGODB_URI=<your_mongodb_connection_string>
NODE_ENV=development
PORT=5000
JWT_SECRET=
```


### Running the Application

To run the application in development mode with hot reloading for both frontend and backend:

```bash
cd client && npm run dev
cd server && npm run dev
```

Once the servers are running, you can access the frontend at http://localhost:3000 and the backend at http://localhost:5000
