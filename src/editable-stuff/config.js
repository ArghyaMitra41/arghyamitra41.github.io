// Navigation Bar SECTION
const navBar = {
  show: false,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Arghya",
  middleName: "",
  lastName: "Mitra",
  message: "Lead Salesforce Engineer",
  description:
    "Lead Salesforce Engineer building lending and fintech products with Apex, LWC, REST integrations, Agentforce AI, and a strong focus on scalable delivery.",
  tags: [
    "Salesforce + Lending",
    "Agentforce AI",
    "10+ Stable Integrations",
    "Team Leadership",
  ],
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ArghyaMitra41/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/arghya-mitra/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/instrumentaaaal/",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/arghya.mitra/",
    // },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/@instrumentaaal/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/instrumentaaal/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/arghyamitra.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/arghyamitra.jpg"),
  imageSize: 375,
  message:
    "I am a Lead Engineer at Cloudkaptan Consultancy Services, focused on designing and delivering Salesforce solutions for lending and enterprise workflows.",
  summary:
    "My work blends architecture, hands-on development, stakeholder collaboration, and delivery leadership. I enjoy turning complex business requirements into scalable products using Apex, Lightning Web Components, Visualforce, REST APIs, and asynchronous Salesforce patterns.",
  highlights: [
    "Built end-to-end lending workflows and real-time bank file modules on Salesforce",
    "Delivered and stabilized 10+ integrations across ID verification, bureau reports, and payment systems",
    "Implemented Salesforce Agentforce AI for lending document summarisation and supported quality through reviews and testing",
  ],
  resume: "/arghya-mitra-cv-2026.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/arghyamitra.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/arghyamitra.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you are hiring for Salesforce engineering, building in fintech, or want to discuss platform architecture and integrations, feel free to reach out at",
  email: "arghya.mitra41@gmail.com"
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Lead Engineer',// Here Add Company Name
      company: 'CloudKaptan Consultancy Services',
      companylogo: require("../editable-stuff/CK Square Logo.jpg"),
      date: 'Oct 2020 - Present',
      summary:
        "Leading Salesforce solution design and delivery for lending products, building Apex, LWC, Visualforce, REST services, async processing, and compliance-focused workflows while mentoring developers and driving code quality.",
    },
    {
      role: 'Summer Research Intern (Artificial Intelligence)',
      company: 'Indian Institute of Technology, Bombay',
      companylogo: require("../editable-stuff/indian_institute_of_technology_bombay_logo.jpeg"),
      date: 'Jun 2019 - Aug 2019',
      summary:
        "Built NLP and computer-vision based research tooling, including work on research paper summarization and a PDF extractor using Python, OCR, OpenCV, PyMuPDF, Pandas, and NumPy.",
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
