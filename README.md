# Doctor Appointment Summary System  

## Introduction  
The **Doctor Appointment Summary System** is a streamlined application for managing doctor-patient interactions. It allows users to document and review essential details such as diagnoses, prescriptions, and follow-up schedules. This system enhances patient care by ensuring clear communication and easy access to appointment summaries.  

## Features  
- **Patient Management**: Add and manage patient information such as name, age, and reason for visits.  
- **Consultation Details**: Document diagnoses, observations, and test results.  
- **Prescription Tracking**: Record medications with clear instructions and dosages.  
- **Follow-Up Scheduling**: Assign follow-up dates and additional tests or referrals.  
- **Admin Portal**: Manage records and monitor system usage via an admin dashboard.  

## Live Links  
- **Backend API**: [Doctor Backend](https://doctor-backend-nmje.onrender.com)  
- **Admin Portal**: [Admin Dashboard](https://bucolic-brigadeiros-a75a8b.netlify.app/)  
- **Frontend Application**: [Frontend Interface](https://hilarious-sunburst-1a5ac9.netlify.app/)  

## Technologies Used  
- **Backend**: Node.js, Express.js  
- **Frontend**: React.js  
- **Database**: MongoDB  
- **Hosting**: Render (Backend), Netlify (Frontend and Admin)  

## Getting Started  

### Prerequisites  
- Node.js  
- MongoDB  

### Installation  
1. Clone the repository for the backend and frontend:
   ```bash
   git clone <backend-repo-url>
   git clone <frontend-repo-url>
   ```
2. Navigate to the backend directory and install dependencies:  
   ```bash
   cd backend  
   npm install  
   ```  
3. Set up the `.env` file for the backend with your MongoDB connection string and other environment variables:  
   ```env
   MONGO_URI=your-mongodb-uri
   PORT=5000
   SECRET=your-secret-key
   ```  
4. Start the backend server:  
   ```bash
   npm start  
   ```  
5. Navigate to the frontend directory, install dependencies, and start the development server:  
   ```bash
   cd frontend  
   npm install  
   npm start  
   ```  

## Usage  
1. **Access the Admin Portal**: Manage users and track system activities via the [Admin Dashboard](https://bucolic-brigadeiros-a75a8b.netlify.app/).  
2. **Use the Frontend Application**: Patients and doctors can access the system through the [Frontend Interface](https://hilarious-sunburst-1a5ac9.netlify.app/).  
3. **Backend API**: API documentation and endpoints are hosted at [Doctor Backend](https://doctor-backend-nmje.onrender.com).  

## Contributing  
Contributions are welcome! Please follow the steps below:  
1. Fork the repository.  
2. Create a new branch:  
   ```bash
   git checkout -b feature-name  
   ```  
3. Commit your changes:  
   ```bash
   git commit -m "Add feature-name"  
   ```  
4. Push the changes to your branch:  
   ```bash
   git push origin feature-name  
   ```  
5. Submit a pull request.  

## License  
This project is licensed under the MIT License.  

## Acknowledgements  
- [Render](https://render.com/) for hosting the backend.  
- [Netlify](https://www.netlify.com/) for frontend and admin hosting.  
- Open-source libraries and contributors.  

--- 

Feel free to modify this as needed!
