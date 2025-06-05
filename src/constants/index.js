import {
   entrepreneur,
   backend,
   instructor,
   web,
   javascript,
   typescript,
   html,
   css,
   tailwind,
   java,
   mysql,
   nextjs,
   postgresql,
   python,
   springboot,
   microsoft,
   whizara,
   sce,
   raw,
   safelink,
   launchpad,
   bossy,
   stockiqs
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
     id: "projects",
     title: "Projects",
   },
   {
    id: "entrepreneur",
    title: "Entrepreneur",
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
  // {
  //   name: "SQL",
  //   icon: sql,
  // },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
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
 ];
 
 const experiences = [
  {
    title: "Computer Programming Instructor",
    company_name: "Whizara",
    icon: whizara,
    link: 'https://www.whizara.com/',
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Jun 2025",
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
    date: "Mar 2024 - Jun 2025",
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
 
  const projects = 
    [
      {
        name: "Bossy",
        description:
          "A platform that empowers employees to anonymously review and rate their bosses and companies. By fostering workplace transparency, we help job seekers make informed career decisions.",
        tags: [
          {
            name: "Next.js",
            color: "blue-text-gradient",
          },
          {
            name: "Express.js",
            color: "green-text-gradient",
          },
          {
            name: "AWS",
            color: "pink-text-gradient",
          },
        ],
        link: 'https://bossy.onl/',
        image: bossy,
        source_code_link: "https://github.com/jjjosephn/bossy",
      },
      {
        name: "Stockiqs",
        description:
          "An inventory management system designed specifically for sneaker resellers. Track your inventory, monitor profits, and streamline your reselling business with our specialized tools built by resellers, for resellers.",
        tags: [
          {
            name: "Next.js",
            color: "blue-text-gradient",
          },
          {
            name: "Node.js",
            color: "green-text-gradient",
          },
          {
            name: "AWS",
            color: "pink-text-gradient",
          },
        ],
        link: 'https://stockiqs.vip',
        image: stockiqs,
        source_code_link: "https://github.com/jjjosephn/stockiqs",
      },
      {
        name: "Launchpad",
        description:
          "An interactive platform designed to connect innovators, entrepreneurs, and enthusiasts. It serves as a hub for showcasing projects, startups, and ideas, allowing users to find collaborators and build their teams.",
        tags: [
          {
            name: "Next.js",
            color: "blue-text-gradient",
          },
          {
            name: "TypeScript",
            color: "green-text-gradient",
          },
          {
            name: "Sanity",
            color: "pink-text-gradient",
          },
        ],
        link: 'https://launchpad-eight-puce.vercel.app/',
        image: launchpad,
        source_code_link: "https://github.com/jjjosephn/launchpad",
      },
      {
        name: "SafeLink",
        description:
          "An application designed to help users manage and store contact information. The application allows users to create, read, update, and delete contact details making it ideal for personal or business use.",
        tags: [
          {
            name: "Java",
            color: "blue-text-gradient",
          },
          {
            name: "SpringBoot",
            color: "green-text-gradient",
          },
          {
            name: "PostgreSQL",
            color: "pink-text-gradient",
          },
        ],
        link: 'https://github.com/jjjosephn/SafeLink',
        image: safelink,
        source_code_link: "https://github.com/jjjosephn/SafeLink",
      },
    ];

  const testimonials = [
    {
      testimonial:
        "Shipping was super quick to Canada, great packaging, and easy communication. Thank you sm! I would definitely buy again.",
      name: "rrachellynch",
    },
    {
      testimonial:
        "Lost on the SNKRS app, but won with @sickiqs. Great communication and quick and easy transaction. He even shipped to accommodate my busy schedule. Can’t wait to do more business. 💜",
      name: "stelulite",
    },
    {
      testimonial:
        "It was nothing but good business. A smooth transition with great communication. Can’t ask for anything more. Definitely buying again. Buddy solid 💪🏾",
      name: "owl_leroy",
    },
  ];
 
 export { services, technologies, experiences, projects, testimonials };