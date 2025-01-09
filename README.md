# BarberFinder

BarberFinder is a fullstack web application designed to help users find and book appointments with barbers in their area. This app provides a seamless experience for both barbers and customers, offering features like profile management, shop details, service listings, and user reviews.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- User registration and authentication
- Barber profile creation and management
- Shop details and service listings
- Search barbers by location
- User reviews and ratings
- Secure password handling with bcrypt
- JWT-based authentication

## Technologies Used
- **Frontend**: React, Tailwind CSS, react-router-dom, react-icons
- **Backend**: Node.js, Express.js, Mongoose, JWT, bcrypt,cloudinary
- **Database**: MongoDB
- **Other**: Axios,multer

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/Akashgupta41/barber_site
    ```

2. **Install dependencies for the backend**
    ```bash
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables**
    - Create a `.env` file in the `backend` directory.
    - Add the following environment variables:
    ``` 
    MONGODB_URI = ...
    PORT = ...
    CLOUDINARY_CLOUD_NAME = ....
    NODE_ENV = ...
    JWT_SECRET = .....
    CLOUDINARY_API_KEY = ...
    CLOUDINARY_API_SECRET = ......
    ```

5. **Run the application**
    - **Backend**: Start the backend server
    ```bash
    cd backend
    npm start
    ```

    - **Frontend**: Start the frontend development server
    ```bash
    cd ../frontend
    npm start
    ```

## Usage
- Visit the homepage to see the list of available barbers in your area.
- Register or login to access personalized features.
- As a barber, create and manage your profile, shop details, and services.
- As a customer, search for barbers, view their profiles, and leave reviews.

## Screenshots
_Add some screenshots of the application here to give users a visual overview._
![Screenshot 2025-01-09 091612](https://github.com/user-attachments/assets/5f936e28-5369-4c60-b992-3f648c6b76e4)

## Project Deployed Link

✈️ findbarber-z9f5.onrender.com


## API Endpoints
### Users
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user
- `PUT /api/update-profile- Update profile of user
- `GET /api/profile- get profile of user


### Barbers
- `POST /api/barber/register` - Register a new barber
- `POST /api/barber/login` - Login a barber
- `PUT /api/barber/update-profile` - For barber  update profile
- `GET /api/barber/profile -  Get Barber Profile
-  `GET /api/barber/all -  Get all Barbers
-   `GET /api/barber/:id -  Get Barber by id
-   `PUT /api/barber/add/shop -  Add Barber's Shop

### Reviews
- `POST /api/review/post` - Add a review
- `GET /api/reviews/:barberId` - Get reviews for a specific barber

### Meatings
- `POST /api/service/schedule/:_barberId` - Shedule a meating
- `GET /api/service/user` - Get meatings for a  barber
- `GET /api/service/barber` - Get meatings for a  barber
- `PUT /api/service/update/:serviceId` - update meating by barber
  
## Contributing
Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.