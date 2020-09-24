/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};


const style = {
      color: 'black',
      
    };



//Home Page
const greeting = {

   title: "Divya Rajput",
  logo_name: "Divya Rajput",
  nickname: " Software Developer",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1lPQVOnWgA-5A2yKYUb8Lbp4c1vQ_wirM/view?usp=sharing",
  portfolio_repository: "https://drive.google.com/file/d/1lPQVOnWgA-5A2yKYUb8Lbp4c1vQ_wirM/view?usp=sharing",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Diu2912",
  // linkedin: "https://www.linkedin.com/in/divya-rajput-64424314a/",
  // gmail: "divyarajput6828@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Diu2912",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/divya-rajput-64424314a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC8ipagpRLwezlT8M4QS7sPw?disable_polymer=true",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:divyarajput6828@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/diu2912",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  
  {
    name: "Instagram",
    link: "https://www.instagram.com/diu_2912/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Experience of working with dialogflow and Google Actions",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        
        
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/divyarajput6828",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/diu2912",
    },
    
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@divya2401",
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Marathwada Mitra Mandal's College of Engineering, Pune",
      subtitle: "B.E in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Current CGPA : 9.18",
      ],
      website_link: "https://www.mmcoe.edu.in/",
    },
    
    {
      title: "Government Polytechnic, Pune",
      subtitle: "Diploma in Computer Engineering",
      logo_path: "logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2014 - 2017",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms etc.",
        "⚡ Apart from this, I have done courses on Soft skils and personality development.",
        "⚡ Percentage : 87.27%",
      ],
      website_link: "https://gppune.ac.in/userindex.php",
    },
    
  ],
};





const certifications = {
  certifications: [
    {
      title: "What is Data Science?",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/6ATFULAQBZ33",
      //alt_name: "IBM",
      color_code: "#FFFFFF",
    },
    {
      title: "Getting Started with AWS Machine Learning",
      subtitle: "- AWS",
      logo_path: "AWS.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/8PREBAPF5CHZ",
     // alt_name: "deeplearning.ai",
      color_code: "#FFFFFF",
    },
    {
      title: "Building Conversational Experiences with Dialogflow",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/ZW5R8EY6VEUF",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "Industrial IoT on Google Cloud Platform",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/QM6HN6XUAWTA",
      alt_name: "IBM",
      color_code: "#FFFFFF",
    },
    {
      title: "Introduction to Flutter Development Using Dart",
      subtitle: "- The App Brewery",
      logo_path: "The App Brewery.png",
      certificate_link:
        "https://1drv.ms/b/s!AocBjqKHrt-4emr8pyUhF9QSYv0?e=J8UlYM",
      alt_name: "Microsoft",
      color_code: "#FFFFFF",
    },
    {
      title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
      subtitle: "- Udemy",
      logo_path: "Udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2bd1edc0-c0c3-4c88-8ec1-8af71b74e00e/",
      alt_name: "IBM",
      color_code: "#FFFFFF",
    },
    {
      title: "Deep Learning and NLP A-Z™: How to create a ChatBot",
      subtitle: "- Udemy",
      logo_path: "Udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-9TU7FZ7A/",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "Professional Cloud Developer : Google Certification2019",
      subtitle: "- Udemy",
      logo_path: "Udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-ca140637-17b2-48b2-b4e2-6bb2bf12987f/",
      alt_name: "deeplearning.ai",
      color_code: "#FFFFFF",
    },
    {
      title: "Master MERN Stack by Building Complete Blog Project [2020]",
      subtitle: "- Udemy",
      logo_path: "Udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-093388f6-1ca2-4aa7-9f49-6afed6e0c8e0/",
      alt_name: "Coursera",
      color_code: "#FFFFFF",
    },
 //   {
 /*     title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with startups as ML and DL Developer, Data Sciece intern. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Data Science Intern",
          company: "Spotle.ai",
          company_url: "https://legatohealthtech.com/",
          logo_path: "s_logo.jpg",
          duration: "May 2020 - June 2020",
          location: "Pune, Maharashtra",
          description:
            "The tech community is doing its best to trace the corona outbreak, decode its impact and build  Powerful models to predict and contain it. Now you have a chance to work with the best minds in  Silicon Valley in a challenging covid19 Internship.Skil Set: NLP ,Data Science ,Python ,Presentation and Virtualization Skills",
          color: "#ee3c26",
        },
        
      ],
    },
    {
      title: " Virtual Internships",
      experiences: [
        {
          title: "Software Engineering Virtual Experience",
          company: "JPMorgan Chase & Co.",
          company_url: "https://www.jpmorganchase.com/",
          logo_path: "jp.jpg",
          duration: "April 2020 - May 2020",
          location: "Virtual",
          description:
            " Visualized set of flexible data transform, such as pivots, filters, and aggregations in web applications using typescript, react, JavaScript and piped those data into Perspective data Visualization software. Implemented a chart to traders’ dashboard allowing them to better identify potential trading opportunities using python.",
          color: "#0071C5",
        },
        {
          title: "Data Analytics Consulting Virtual Internship",
          company: "KPMG Australia",
          company_url:
            "https://home.kpmg/au/en/home.html",
          logo_path: "kp.png",
          duration: "May 2020 ",
          location: "Virtual",
          description:
            "Participating in the open-access KPMG Virtual Internship on ,Data Quality Assessment,Data Insights ,Data Insights and Presentation",
          color: "#0071C5",
        },
        
        {
          title: "Tech Consulting Virtual Internship",
          company: "Deloitte Australia",
          company_url:
            "https://www2.deloitte.com/au/en.html",
          logo_path: "de.png",
          duration: "May 2020 ",
          location: "Virtual",
          description:
            "Participating in the open-access Deloitte Virtual Internship on ● Technology, Strategy & Innovation ● Optimisation & Delivery ● Cloud Engineering",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "IEEE Student Branch Treasurer",
          company: "IEEE",
          company_url: "https://www.ieee.org/",
          logo_path: "IEEE-Logo.jpg",
          duration: "Dec 2019 - Present",
          location: "Pune, Maharashtra",
          description:
            "Maintain the appropriate Branch bank account,Prepare an annual budget for inclusion with the Annual Plan of Activities report and prepare the final Financial Statement for inclusion in the Annual Report of Activities.",
          color: "#4285F4",
        },
        {
          title: "Growth Hacker Team Member",
          company: "Coding Club",
          company_url: "https://codingclub.tech/online-course/coding-mafia?c=NVDMI&traffic=cclb",
          logo_path: "1.png",
          duration: "May 2020 – Jul 2020",
          location: "Work from home",
          description:
            "Coding Club  is a program for university students to lead the awareness and use of coding development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#4285F4",
        },
        {
          title: "Kiran Scholar",
          company: "Persistent Systems",
          company_url: "https://www.persistent.com/",
          logo_path: "p.jpeg",
          duration: "Oct 2017 - Sept 2020",
          location: "Pune, Maharashtra",
          description:
            "Persisitent Foundation has a flagship program ‘Kiran – Scholarship and mentoring program’ for girls studying Computer Scicence, IT and Bioinformatics. Employees from Persistent Systems mentor these students. Every year some special sessions are organised for these girls where technical inputs from the experts are given.",
          color: "#000000",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Chatbot Development, Cloud and Opensource Development.",
  },
  blogSection: {
   
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
     
    
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Open for opportunities: Yes",
    
  },
  phoneSection: {
    title: "",
    subtitle: "*****",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
