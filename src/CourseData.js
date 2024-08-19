import UciIcon from "./assets/uci.png"
import MetaIcon from "./assets/meta.png"
import IbmIcon from "./assets/ibm.png"
import MicrosoftIcon from "./assets/microsoft.png"
import GuviIcon from "./assets/guvi.png"
import AccentureIcon from "./assets/accenture.png"



export const coursesData = [
    {
        courseName: "Meta Back-End Developer Professional Certificate",
        numberOfSubcourses: 9,
        link: 'https://www.coursera.org/account/accomplishments/professional-cert/3FAP895JJPS8',
        icon: <img src={MetaIcon} alt="LinkedIn" style={{ width: 40, height: 40 }} />, 
        details: "Comprehensive training in back-end development, covering key areas such as server-side programming, API development, cloud hosting, and database management. This specialization provided hands-on experience in building scalable, secure, and efficient backend systems.",
        certificationDate: "September 14, 2023",
        duration: "Approximately 8 months at 6 hours a week",
        certificationIssuedTo: "Shivam Goswami",
        institution: "Meta",
        subCourses: [
            {
                subCourseName: "Django Web Framework",
                subCourseDescription: "Mastered Django for developing robust and scalable web applications, with a strong emphasis on database integration and security.",
                completionDate: "September 11, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/FR96CSMYCHUZ',
                gradeAchieved: "85.16%"
            },
            {
                subCourseName: "APIs",
                subCourseDescription: "Gained expertise in designing, developing, and deploying RESTful APIs, enabling seamless communication between services.",
                completionDate: "September 14, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/V8VV8JCFDSS9',
                gradeAchieved: "92.36%"
            },
            {
                subCourseName: "Back-End Developer Capstone",
                subCourseDescription: "Completed a capstone project that consolidated all back-end skills into a comprehensive, real-world application.",
                completionDate: "September 10, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/FUREK8MFQE9Q',
                gradeAchieved: "89.33%"
            },
            {
                subCourseName: "Introduction to Databases for Back-End Development",
                subCourseDescription: "Learned SQL, data modeling, and database management fundamentals, focusing on efficient data storage and retrieval.",
                completionDate: "September 10, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/TC7CP9FMXT8G',
                gradeAchieved: "92%"
            },
            {
                subCourseName: "Introduction to Back-End Development",
                subCourseDescription: "Covered the basics of server-side programming, including database integration and web server management.",
                completionDate: "August 9, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/9CG2LTVMGKDM',
                gradeAchieved: "94.35%"
            },
            {
                subCourseName: "Version Control",
                subCourseDescription: "Proficient in using Git for version control, enabling efficient collaboration and code management.",
                completionDate: "June 8, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/7BT855QVU2TB',
                gradeAchieved: "88.75%"
                
            },
            {
                subCourseName: "Programming in Python",
                subCourseDescription: "Developed a strong foundation in Python programming, covering essential syntax, data structures, and algorithms.",
                completionDate: "September 10, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/BWX2AJSBGBL6',
                gradeAchieved: "94.75%"
            },
            {
                subCourseName: "The Full Stack",
                subCourseDescription: "Gained an understanding of full-stack development, bridging front-end and back-end technologies for a complete development approach.",
                completionDate: "September 11, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/9UFVT56P6ZL3',
                gradeAchieved: "91.56%"
            },
            {
                subCourseName: "Coding Interview Preparation",
                subCourseDescription: "Prepared for technical interviews with problem-solving techniques and practice sessions.",
                completionDate: "June 27, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/VHDLVR8VJ676',
                gradeAchieved: "85%"
            }
        ]
    },
    {
        courseName: "Meta Front-End Developer Professional Certificate",
        numberOfSubcourses: 9,
        icon: <img src={MetaIcon} alt="LinkedIn" style={{ width: 40, height: 40 }} />,
        details: "Focused on the foundational skills required for front-end development, including HTML, CSS, JavaScript, and React. This specialization emphasized building responsive and dynamic web interfaces, with a strong understanding of UX/UI principles.",
        certificationDate: "June 27, 2023",
        duration: "Approximately 7 months at 6 hours a week",
        certificationIssuedTo: "Shivam Goswami",
        link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/DBF9KEWHHXRQ',
        institution: "Meta",
        subCourses: [
            {
                subCourseName: "React Basics",
                subCourseDescription: "Learned the fundamentals of React, including component-based architecture, state management, and lifecycle methods.",
                completionDate: "June 17, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/S3BUPGQRZURV',
                gradeAchieved: "92.50%"
            },
            {
                subCourseName: "Programming with JavaScript",
                subCourseDescription: "Acquired deep knowledge of JavaScript, focusing on building interactive and dynamic web applications.",
                completionDate: "June 6, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/BZABV6SVU5UV',
                gradeAchieved: "94.53%"
            },
            {
                subCourseName: "Principles of UX/UI Design",
                subCourseDescription: "Understood core UX/UI design principles, enabling the creation of user-friendly and aesthetically pleasing web interfaces.",
                completionDate: "June 23, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/7XXZMQ3R9NEK',
                gradeAchieved: "89.62%"
            },
            {
                subCourseName: "Advanced React",
                subCourseDescription: "Delved into advanced React topics, including hooks, context API, and performance optimization.",
                completionDate: "June 22, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/UKR89NBWCZQ2',
                gradeAchieved: "90.80%"
            },
            {
                subCourseName: "Front-End Developer Capstone",
                subCourseDescription: "Developed a capstone project that showcased all front-end skills, from design to deployment.",
                completionDate: "June 24, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/GEYHUYYGX5J9',
                gradeAchieved: "90.92%"
            },
            {
                subCourseName: "Version Control",
                subCourseDescription: "Gained proficiency in Git, facilitating collaboration and efficient version control for front-end projects.",
                completionDate: "June 8, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/7BT855QVU2TB',
                gradeAchieved: "88.75%"
            },
            {
                subCourseName: "Introduction to Front-End Development",
                subCourseDescription: "Learned the basics of front-end development, covering HTML, CSS, and JavaScript.",
                completionDate: "June 2, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/S5QTVLXGSYMF',
                gradeAchieved: "94.35%"
            },
            {
                subCourseName: "Coding Interview Preparation",
                subCourseDescription: "Enhanced coding interview skills with targeted problem-solving practice and mock interviews.",
                completionDate: "June 27, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/VHDLVR8VJ676',
                gradeAchieved: "85%"
            },
            {
                subCourseName: "HTML and CSS in Depth",
                subCourseDescription: "Gained in-depth knowledge of HTML and CSS for creating well-structured and styled web pages.",
                completionDate: "June 13, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/ZA7W5HN5MGX5',
                gradeAchieved: "88%"
            }
        ]
    },
    {
        courseName: "IBM Full Stack Software Developer Professional Certificate",
        numberOfSubcourses: 12,
        icon: <img src={IbmIcon} alt="LinkedIn" style={{ width: 40, height: 40 }} />,
        details: "Comprehensive training in full-stack development, with a focus on front-end and back-end technologies, cloud computing, containerization, and DevOps practices. This specialization provided practical experience in building and deploying full-stack applications.",
        certificationDate: "June 19, 2023",
        duration: "Approximately 5 months at 10 hours a week",
        certificationIssuedTo: "Shivam Goswami",
        link: 'https://www.coursera.org/account/accomplishments/professional-cert/5RJ85ZP3GQ6M',
        institution: "IBM",
        subCourses: [
            {
                subCourseName: "Introduction to Cloud Computing",
                subCourseDescription: "Learned the fundamentals of cloud computing, including cloud services, deployment models, and architecture.",
                completionDate: "June 13, 2022",
                link: 'https://www.coursera.org/account/accomplishments/verify/LXN5BGTQGYQV',
                gradeAchieved: "92%"
            },
            {
                subCourseName: "Application Development using Microservices and Serverless",
                subCourseDescription: "Developed proficiency in microservices architecture and serverless computing for scalable application development.",
                completionDate: "June 18, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/WWU3P5MFAJ4U',
                gradeAchieved: "90%"
            },
            {
                subCourseName: "Django Application Development with SQL and Databases",
                subCourseDescription: "Built applications using Django, with a focus on SQL database integration and management.",
                completionDate: "June 19, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/5F6PZ878SWTQ',
                gradeAchieved: "86%"
            },
            {
                subCourseName: "Introduction to Web Development with HTML, CSS, JavaScript",
                subCourseDescription: "Acquired a solid foundation in web development, mastering HTML, CSS, and JavaScript.",
                completionDate: "June 28, 2022",
                link: 'https://www.coursera.org/account/accomplishments/verify/WCYQGFNL99BQ',
                gradeAchieved: "96.25%"
            },
            {
                subCourseName: "Developing AI Applications with Python and Flask",
                subCourseDescription: "Specialized in developing AI applications using Python and Flask, focusing on deploying machine learning models.",
                completionDate: "December 12, 2022",
                link: 'https://www.coursera.org/account/accomplishments/verify/8NR8SQ4PP9ZB',
                gradeAchieved: "100%"
            },
            {
                subCourseName: "Full Stack Software Developer Assessment",
                subCourseDescription: "Successfully completed an assessment that tested full-stack development skills across various technologies.",
                completionDate: "July 2, 2022",
                link: 'https://www.coursera.org/account/accomplishments/verify/2N2GDPAS8SG4',
                gradeAchieved: "84.44%"
            },
            {
                subCourseName: "Developing Cloud Native Applications",
                subCourseDescription: "Gained expertise in building cloud-native applications, optimized for performance and scalability.",
                completionDate: "June 29, 2022",
                link: 'https://www.coursera.org/account/accomplishments/verify/CVVJWA2B24G9',
                gradeAchieved: "92%"
            },
            {
                subCourseName: "Developing Cloud Apps with Node.js and React",
                subCourseDescription: "Learned to develop cloud-based applications using Node.js for the backend and React for the frontend.",
                completionDate: "July 2, 2022",
                link: 'https://www.coursera.org/account/accomplishments/verify/FQVH8VJ29UA7',
                gradeAchieved: "98%"
            },
            {
                subCourseName: "Introduction to Containers with Docker, Kubernetes & OpenShift",
                subCourseDescription: "Mastered containerization technologies like Docker, Kubernetes, and OpenShift for efficient application deployment.",
                completionDate: "June 29, 2022",
                link: 'https://www.coursera.org/account/accomplishments/verify/U5K9LFX3F45J',
                gradeAchieved: "95.56%"
            },
            {
                subCourseName: "Python for Data Science, AI & Development",
                subCourseDescription: "Developed a deep understanding of Python for data science, AI, and web development.",
                completionDate: "June 28, 2022",
                link: 'https://www.coursera.org/account/accomplishments/verify/F57C2DJ5A4LD',
                gradeAchieved: "100%"
            },
            {
                subCourseName: "Tools for Software Development",
                subCourseDescription: "Gained hands-on experience with essential software development tools like Git, Docker, and Jenkins.",
                completionDate: "June 18, 2022",
                link: 'https://www.coursera.org/account/accomplishments/verify/9VM6VU35PZ22',
                gradeAchieved: "86%"
            },
            {
                subCourseName: "Getting Started with Git and GitHub",
                subCourseDescription: "Learned to use Git and GitHub for version control, collaboration, and project management.",
                completionDate: "June 18, 2022",
                link: 'https://www.coursera.org/account/accomplishments/verify/UGN9KMKF2DA7',
                gradeAchieved: "94.74%"
            }
        ]
    },
    {
        "courseName": "Blockchain Specialization",
        "numberOfSubcourses": 4,
        "details": "This specialization provided comprehensive insights into blockchain technology, covering essential aspects such as cryptography, hashing algorithms, Merkle Trees, and decentralized transaction systems. It also emphasized the practical applications of blockchain in cryptofinance and other decentralized technologies.",
        "certificationDate": "June 18, 2023",
        "duration": "1 month, 10 hours per week",
        icon: <img src={UciIcon} alt="LinkedIn" style={{ width: 40, height: 40 }} />,
        link: 'https://www.coursera.org/account/accomplishments/specialization/P4RARZVXMPQ2',
        "certificationIssuedTo": "Shivam Goswami",
        "institution": "University of California, Irvine",
        "subCourses": [
            {
                "subCourseName": "The Blockchain",
                "subCourseDescription": "Developed a foundational understanding of blockchain technology, its architecture, and core components.",
                "completionDate": "December 28, 2022",
                link: 'https://www.coursera.org/account/accomplishments/verify/LAEXWEYHE8JD',
                "gradeAchieved": "88%"
            },
            {
                "subCourseName": "Cryptography and Hashing Overview",
                "subCourseDescription": "Studied cryptographic principles and hashing techniques integral to blockchain security.",
                "completionDate": "December 29, 2022",
                link: 'https://www.coursera.org/account/accomplishments/verify/JNYBJR73EJ9M',
                "gradeAchieved": "94%"
            },
            {
                "subCourseName": "The Merkle Tree and Cryptocurrencies",
                "subCourseDescription": "Explored the role of Merkle Trees in blockchain technology and how they are leveraged by cryptocurrencies.",
                "completionDate": "January 11, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/BKRGKCA5P7GX',
                "gradeAchieved": "97.77%"
            },
            {
                "subCourseName": "The Blockchain System",
                "subCourseDescription": "Examined the blockchain system architecture and its practical applications in decentralized transactions.",
                "completionDate": "June 18, 2023",
                link: 'https://www.coursera.org/account/accomplishments/verify/ZBNBZ2YNXBYN',
                "gradeAchieved": "94%"
            }
        ]
    },
    {
        courseName: "MTA: Introduction to Programming using Java",
        numberOfSubcourses: "N/A",
        link: 'https://drive.google.com/file/d/1B3FlY8QX84PdLu4Ce8N_B-f3uq5wJDDl/view?usp=sharing', // Example link for MTA exam details
        icon: <img src={MicrosoftIcon} alt="MTA Exam" style={{ width: 40, height: 40 }} />, // Replace with the actual icon path
        details: "This certification demonstrates foundational knowledge in programming using Java. It covers Java fundamentals, data types, variables, control flow, object-oriented programming, and basic debugging techniques. Score: 74/100",
        certificationDate: "October 20, 2021",
        duration: "1 month", 
        certificationIssuedTo: "Shivam Goswami",
        institution: "Microsoft",
    },
    {
        courseName: "Technology Consulting Virtual Experience Program",
        numberOfSubcourses: "N/A", // Number of practical tasks completed
        link: 'https://drive.google.com/file/d/1s2sChv0c_wyLQGFTmcKETDuDo1h1-teR/view?usp=sharing', // Example link for the program
        icon: <img src={AccentureIcon} alt="Forage" style={{ width: 40, height: 40 }} />, // Replace with the actual icon path
        details: "Completed practical tasks in a technology consulting program, focusing on key areas such as project kickoff, requirements gathering, application design, and agile stories. This experience provided hands-on skills and insights into the consulting process.",
        certificationDate: "June 1st, 2023",
        duration: "1 week",
        certificationIssuedTo: "Shivam Goswami",
        institution: "Accenture"
    },
    {
        courseName: "Game Development using Pygame",
        numberOfSubcourses: "N/A", // Number of practical tasks completed
        link: 'https://drive.google.com/file/d/1VHGniN8Lqt_3E_0KnsorJ-1e2ui_ERPx/view?usp=sharing', // Example link for the program
        icon: <img src={GuviIcon} alt="Forage" style={{ width: 40, height: 40, borderRadius: '25px' }} />, // Replace with the actual icon path
        details: "This course provides a comprehensive introduction to game development using the Pygame library. Participants will learn how to create engaging 2D games from scratch, covering essential topics such as game physics, user input handling, game logic, and graphics rendering. The course includes hands-on projects that allow students to apply their skills by building fully functional games.",
        certificationDate: "June 28th, 2023",
        duration: "1 month",
        certificationIssuedTo: "Shivam Goswami",
        institution: "Guvi"
    }
    
];