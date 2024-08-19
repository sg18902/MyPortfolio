import brainded1 from './assets/brainded (1).png';
import brainded2 from './assets/brainded (2).png';
import brainded3 from './assets/brainded (3).png';
import brainded4 from './assets/brainded (4).png';
import brainded5 from './assets/brainded (5).png';
import brainded6 from './assets/brainded (6).png';
import ehr from './assets/ehr.jpg';
import ehr1 from './assets/ehr1.png';
import ehr2 from './assets/ehr2.png';
import ehr3 from './assets/ehr3.png';
import ems1 from './assets/ems1.png';
import ems2 from './assets/ems2.png';
import ems3 from './assets/ems3.png';
import ems4 from './assets/ems4.png';
import ems5 from './assets/ems5.png';
import ems6 from './assets/ems6.png';
import ems7 from './assets/ems7.png';
import ems8 from './assets/ems8.png';
import ems9 from './assets/ems9.png';
import nft1 from './assets/nft1.png';
import nft2 from './assets/nft2.png';
import nft3 from './assets/nft3.png';
import nft4 from './assets/nft4.png';
import nft5 from './assets/nft5.png';
import potfolio from './assets/potfolio.png';
import potfolio1 from './assets/potfolio1.png';
import potfolio2 from './assets/potfolio2.png';
import potfolio3 from './assets/potfolio3.png';
import potfolio4 from './assets/potfolio4.png';
import potfolio5 from './assets/potfolio5.png';
import potfolio6 from './assets/potfolio6.png';
import ruininsight from './assets/ruininsight.js.png';
import ruininsight1 from './assets/ruininsight1.png';
import ruininsight2 from './assets/ruininsight2.png';
import ruininsight3 from './assets/ruininsight3.png';
import ruininsight4 from './assets/ruininsight4.png';
import ruininsight5 from './assets/ruininsight5.png';
import ruininsight6 from './assets/ruininsight6.png';
import ruininsight7 from './assets/ruininsight7.png';
import sportshop from './assets/sportshop.png';
import sportshop1 from './assets/sportshop1.png';
import sportshop2 from './assets/sportshop2.png';
import sportshop3 from './assets/sportshop3.png';
import sportshop4 from './assets/sportshop4.png';
import studium5png from './assets/studium.5png.png';
import studium from './assets/studium.png';
import studium1 from './assets/studium1.png';
import studium2 from './assets/studium2.png';
import studium3 from './assets/studium3.png';
import studium4 from './assets/studium4.png';
import studium6 from './assets/studium6.png';
import studium7 from './assets/studium7.png';
import studium8 from './assets/studium8.png';
import studium9 from './assets/studium9.png';




export const ProjectData = [
    {
        name: "Sports Shop Management System",
        description: "The Sports Shop Management System is a comprehensive Java application built for efficiently managing a sports equipment store. Leveraging JDBC for database connectivity, Swing for the user interface, and AWS for hosting, this system offers a seamless and user-friendly experience.",
        stack: ["Java", "JDBC", "Swing", "AWS"],
        language: ["Java"],
        features: [
            "Product Management: Add, update, and delete products with essential details such as name, category, price, and quantity in stock.",
            "Sales Tracking: Record sales transactions, including products sold, quantity, total price, and date/time of sale.",
            "Discount Management: Apply various types of discounts, including seasonal offers, bulk purchase discounts, and special promotions.",
            "Sales History: Maintain a comprehensive sales history, allowing for in-depth analysis and reporting.",
            "User Authentication: Optional secure login functionality with different levels of access for enhanced privacy and control."
        ],
        deployedLink: "",
        githubLink: "https://github.com/sg18902/SportShop",
        images: [sportshop, sportshop1, sportshop2, sportshop3, sportshop4]
    },
    {
        name: "HealthMate",
        description: "HealthMate is a comprehensive healthcare management platform designed to streamline the interaction between doctors and patients. Built using HTML, CSS, JavaScript, jQuery, Web3.js, and Solidity, this platform offers a user-friendly interface for easy navigation and a responsive design that ensures seamless use across various devices.",
        stack: ["HTML", "CSS", "JavaScript", "Solidity", "Web3.js"],
        language: ["JavaScript", "Solidity"],
        features: [
            "Doctor Registration: Register with name, specialization, contact, and address.",
            "Patient Registration: Register with personal details, appointment date, and preferred doctor.",
            "View Doctor Details: Access detailed doctor profiles including specialization and contact info.",
            "View Patient Details: View comprehensive patient profiles with diagnosis and treatment details.",
            "Diagnose Patient: Assign diagnosis and recommend treatment based on patient ID.",
            "Record Patient Treatment: Record treatment details with patient ID and additional notes.",
            "View Medical Records: Access detailed medical records for all registered patients.",
            "Delete Patient Records: Doctors can remove patient records for efficient management.",
            "User-Friendly Interface: Intuitive design for easy navigation and interaction.",
            "Responsive Design: Seamless access across desktops, tablets, and mobile devices.",
            "Blockchain Integration: Secure data management using Web3.js and Solidity.",
            "Transaction Handling: Secure and efficient data management with Web3.js."
        ],
        deployedLink: "",
        githubLink: "https://github.com/sg18902/HealthMate",
        images: [ehr, ehr1, ehr2, ehr3]
    },
    {
        name: "Classroom Management System",
        description: "This is a full-stack classroom management system that allows Principals, Teachers, and Students to manage classrooms, timetables, and user accounts. The application provides a dashboard for different user roles with scoped functionality and features, built with a modern tech stack.",
        stack: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB"
       ],
        language: ["JavaScript"],
        features: [
            "Principal: Create classrooms, assign teachers and students, and manage user accounts.",
            "Teacher: View students, create timetables, and manage classroom schedules.",
            "Student: View classmates and timetables.",
            "Dashboard: Dynamic views based on user role (Principal, Teacher, Student).",
            "User Management: Forms for creating and updating user details.",
            "Classroom Management: Interfaces for creating and managing classrooms and timetables.",
            "Authentication: Secure login/signup process for users."
        ],
        deployedLink: "",
        githubLink: "https://github.com/sg18902/Studium",
        images: [studium, studium1, studium2, studium3, studium4, studium5png, studium6, studium7, studium8, studium9]
    },
    {
        name: "Brain Tumor Detection",
        description: "A system designed to detect and classify brain tumors using Magnetic Resonance Imaging (MRI). By leveraging advanced machine learning techniques and MRI data, this system offers accurate tumor detection and classification, enhancing diagnostic precision and patient care.",
        stack:
            [
                "React.js",
                "Python",
                "REST API",
            ],
        language: ["Python", "JavaScript"],
        features: [
            "Detects brain tumors using MRI scans.",
            "Classifies tumors into subtypes such as Edema, Necrotic, Enhancing, and Ground.",
            "Utilizes machine learning models like ResNet 50, VGG16, and U-Net.",
            "Provides a web interface for users to interact with the model.",
            "Algorithms : ResNet 50, VGG16, U-Net, AdaBoost (to be tested), Ensemble of CNN architectures (ResNet, EfficientNetV2)"
        ],
        deployedLink: "",
        githubLink: "https://github.com/sg18902/BrainDead",
        images: [brainded5, brainded1, brainded2, brainded3, brainded4 , brainded6]
    },
    {
        name: "RuinInsight: Data Visualisation Dashboard",
        description: "RuinInsight is an advanced data visualization dashboard designed to provide insightful analysis of data stored in MongoDB. It uses a variety of charts and visually appealing cards to present data trends and insights effectively.",
        stack:
            [
                "React.js",
                "Node.js",
                "Mongodb",
                "Express"
            ],
        language: ["JavaScript"],
        "features": [
            "Area Chart: Displays data as a series of points connected by lines, filled with color to show volume.",
            "Bar Chart: Represents data with rectangular bars to compare different categories or values.",
            "Column Chart: Similar to bar charts but with vertical bars, useful for showing changes over time.",
            "Pie Chart: Illustrates the proportions of a whole by dividing a circle into slices representing different categories.",
            "Line Chart: Shows data trends over time with a series of data points connected by straight lines."
        ],
        deployedLink: "",
        githubLink: "https://drive.google.com/drive/folders/1niYT1NTTzH0FIvAoPajQOIikkQw3LEXV?usp=sharing",
        images: [ruininsight1, ruininsight , ruininsight2, ruininsight3, ruininsight4, ruininsight5, ruininsight6, ruininsight7] 
    },
    {
        name: "My Portfolio Website",
        "description": "A personal portfolio website designed to showcase my skills, education, experience, and accomplishments. This platform serves as a comprehensive introduction to my professional background, providing an overview of my projects, educational qualifications, work experience, and certifications.",
        stack:
            [
                "React.js"
            ],
        language: ["JavaScript"],
        "features": [
            "Project Section: Highlights various projects I've worked on, including details and links to each project's documentation or live demo.",
            "Education Section: Provides information about my academic background, including institutions attended, degrees earned, and notable achievements.",
            "Experience Section: Outlines my professional work history, including roles, responsibilities, and key accomplishments.",
            "Contact Me: A contact form or link to facilitate communication with me for potential job offers, collaborations, or inquiries.",
            "Certifications: Lists relevant certifications and courses completed, showcasing my commitment to professional development.",
            "Home: The landing page that provides an overview and navigational access to other sections of the website."
        ],
        deployedLink: "",
        githubLink: "",
        images: [potfolio6, potfolio, potfolio1, potfolio2, potfolio3, potfolio4, potfolio5] 
    },
    {
        name: "NFT Marketplace",
        description: "A comprehensive NFT marketplace platform leveraging Ethereum blockchain for buying, selling, and managing NFTs. It integrates wallet connectivity, blockchain technology, and smart contracts to ensure secure and efficient transactions.",
        stack:
            [
                "React.js",
                "HTML",
                "CSS",
                "Pinata",
                "MetaMask",
                "Solidity",
                "Web3"
            ],
        language: ["JavaScript", "Solidity"],
        features: [
            "MetaMask works as an Ethereum wallet for buying, storing, and swapping your ETH and ERC-20 tokens.",
            "Users can buy and sell NFTs on the marketplace.",
            "Ethereum is the blockchain most widely used for NFT marketplaces. It stores NFT identifiers and links them to respective digital assets.",
            "Smart contracts create a unique identifier for each NFT and use the ERC-721 standard to create non-fungible tokens."
        ],
        deployedLink: "",
        githubLink: "",
        images: [nft1, nft2, nft3, nft4, nft5] 
    },
    {
        name: "Event Management System",
        description: "A robust event management platform designed to streamline the organization and management of events. The system provides functionalities for creating, managing, and participating in events, ensuring a smooth and efficient process for both organizers and attendees.",
        stack: [
            "React.js",
            "CSS",
            "Node.js",
            "MongoDB",
            "Express.js",
            "RESTful API"
        ],
        language: ["JavaScript", "HTML", "CSS"],
        features: [
            "Allows users to create and manage events with customizable details.",
            "Supports user registration and authentication with role-based access control.",
            "Provides a calendar view for scheduling and tracking events.",
            "Includes search functionality for finding and filtering events based on criteria."
        ],
        deployedLink: "",
        githubLink: "",
        images: [ems3, ems1, ems2,  ems4, ems5, ems6, ems7, ems8, ems9]
    },
];