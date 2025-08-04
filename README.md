# Laundry Impact Foundation (LIFo) Web App

## Overview
The Laundry Impact Foundation (LIFo) web app is a responsive platform designed to facilitate clothing donations and volunteer registrations for the nonprofit initiative focused on restoring dignity through clean clothing. This application serves as a tool for action, awareness, and impact, connecting donors, volunteers, and administrators.

## Features
- **Homepage**: Highlights the mission statement, call-to-action for scheduling pickups, testimonials, and impact statistics.
- **Donation Scheduling**: Allows donors to easily schedule pickups for clothing donations through a user-friendly form.
- **Volunteer Registration**: Provides a platform for volunteers to register and express their interest in joining the cause.
- **Admin Dashboard**: A protected area for admins to view and manage donor submissions and volunteer registrations.
- **Contact Section**: Offers various contact options for users to reach out for more information.

## Tech Stack
- **Frontend Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Animation**: Framer Motion
- **Forms**: Formik or basic form components
- **PDF Generation**: jsPDF or similar
- **Backend**: Local state or mock API (future integration with Google Sheets or Firebase)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/lifo-web-app.git
   ```
2. Navigate to the project directory:
   ```
   cd lifo-web-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Folder Structure
```
lifo-web-app
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── DonationForm.jsx
│   │   ├── VolunteerForm.jsx
│   │   ├── AdminTable.jsx
│   │   └── ContactSection.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Donate.jsx
│   │   ├── Volunteer.jsx
│   │   └── Admin.jsx
│   ├── utils
│   │   └── mockData.js
│   └── styles
│       └── index.css
├── public
│   └── vite.svg
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
Special thanks to the Laundry Impact Foundation team and volunteers for their dedication to restoring dignity through clean clothing.