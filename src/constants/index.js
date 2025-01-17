import {
   entrepreneur,
   backend,
   instructor,
   web,
   javascript,
   typescript,
   html,
   css,
   reactjs,
   tailwind,
   git,
   firebase,
   java,
   mysql,
   nextjs,
   postgresql,
   python,
   springboot,
   sql,
   microsoft,
   whizara,
   sce,
   raw,
   carrent,
   jobit,
   tripguide,
 } from "../assets";
 
 export const navLinks = [
   {
     id: "about",
     title: "About",
   },
   {
     id: "work",
     title: "Work",
   },
   {
     id: "contact",
     title: "Contact",
   }
 ];
 
 const services = [
   {
     title: "Full-Stack Developer",
     icon: web,
   },
   {
     title: "Backend Developer",
     icon: backend,
   },
   {
     title: "Programming Instuctor",
     icon: instructor,
   },
   {
      title: "Sneaker Reseller",
      icon: entrepreneur,
   }
 ];
 
 const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Git",
    icon: git,
  },
 ];
 
 const experiences = [
  {
    title: "Computer Programming Instructor",
    company_name: "Whizara",
    icon: whizara,
    link: 'https://www.whizara.com/',
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
       'Deliver Python programming courses to students of all levels, building a strong foundation in core concepts',
       'Guide students through hands-on projects to develop real-world problem-solving and computational thinking skills',
       'Foster an inclusive learning environment, offering personalized support to inspire success and passion for computer science'
    ],
  },
  {
    title: "Computer Science Teaching Assistant	",
    company_name: "Mircrosoft TEALS",
    icon: microsoft,
    link: 'https://www.microsoft.com/en-us/teals',
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: [
    'Assist in teaching over 70+ high school students fundamentals of computer science and programming',
    'Devise lesson plans and resources to improve student learning with interactive exercises and projects', 
    'Collaborate with teachers and other volunteers to ensure a comprehensive educational experience'
    
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "SJSU College of Engineering",
    icon: sce,
    link: 'https://sce.sjsu.edu/',
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      'Facilitated in developing a transit schedule system for SJSU with real-time bus and shuttle updates',
      'Reduced API calls by 20%, with Python, by skipping stops with three or more future predictions', 
      'Automated sending of updated cache data via open HTTP connections, eliminating user refresh'
    ],
  },
  {
    title: "Shift Lead",
    company_name: "Raw - Superfood Cafe",
    icon: raw,
    link: 'https://www.raw.cafe/',
    iconBg: "#E6DEDD",
    date: "Oct 2022  - Sep 2024",
    points: [
      "Managed daily operations to ensure smooth workflow, including employee scheduling, inventory control, and food quality assurance",
      "Supervised and trained staff, fostering a collaborative team environment and enhancing customer service standards",
      "Resolved customer issues efficiently, maintaining a high level of satisfaction while meeting sales targets and promoting brand loyalty"
    ],
  },
 ];
 
 const testimonials = [
   {
     testimonial:
       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
     name: "Sara Lee",
     designation: "CFO",
     company: "Acme Co",
     image: "https://randomuser.me/api/portraits/women/4.jpg",
   },
   {
     testimonial:
       "I've never met a web developer who truly cares about their clients' success like Rick does.",
     name: "Chris Brown",
     designation: "COO",
     company: "DEF Corp",
     image: "https://randomuser.me/api/portraits/men/5.jpg",
   },
   {
     testimonial:
       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
     name: "Lisa Wang",
     designation: "CTO",
     company: "456 Enterprises",
     image: "https://randomuser.me/api/portraits/women/6.jpg",
   },
 ];
 
 const projects = [
   {
     name: "Car Rent",
     description:
       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
     tags: [
       {
         name: "react",
         color: "blue-text-gradient",
       },
       {
         name: "mongodb",
         color: "green-text-gradient",
       },
       {
         name: "tailwind",
         color: "pink-text-gradient",
       },
     ],
     image: carrent,
     source_code_link: "https://github.com/",
   },
   {
     name: "Job IT",
     description:
       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
     tags: [
       {
         name: "react",
         color: "blue-text-gradient",
       },
       {
         name: "restapi",
         color: "green-text-gradient",
       },
       {
         name: "scss",
         color: "pink-text-gradient",
       },
     ],
     image: jobit,
     source_code_link: "https://github.com/",
   },
   {
     name: "Trip Guide",
     description:
       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
     tags: [
       {
         name: "nextjs",
         color: "blue-text-gradient",
       },
       {
         name: "supabase",
         color: "green-text-gradient",
       },
       {
         name: "css",
         color: "pink-text-gradient",
       },
     ],
     image: tripguide,
     source_code_link: "https://github.com/",
   },
 ];
 
 export { services, technologies, experiences, testimonials, projects };