const myInfo = {
  me: {
    name: "Yotam Baram",
    title: "Full Stack Developer",
    aboutMeShort: "Full Stack Developer",
    aboutMeLong: "Full Stack Developer",
    lookingFor: "",
    address: "Bellevue, WA"
  },
  github: "https://github.com/yotambaram",
  linkedin: "https://www.linkedin.com/in/yotambaram/",
  summary: "Intuitive user experiences; passionate about developing apps that help people solve everyday problems; approaching programming challenges from different perspectives; developing responsive websites; finding unique perspectives on how end-users interact with websites; mobile-first design, and development; collaborating with a team to address UX/UI problems; complex problem solving; responsive design; addressing accessibility issues; quality and performance testing; agile development; server-side development.",

  skills: ["HTML", "CSS", "JavaScript", "Python",  "jQuery", "React.js", "Node.js", "Express",  "Git", "MySQL", "MongoDB", "Heroku", "Responsive Design", "Bootstrap", "Handlebars", "Cookies", "Local Storage Security and Session Storage", "User Authentication", "MERN Stack", "Adobe Premiere Pro", "Final Cut Pro"],

  workExp: [
    {
      company:"MX1 (SES) Satellite services",
      roll:  "Television Playout Operator",
      address: "Bet Shemesh Israel",
      staerYear: 2018,
      endYear: 2019,
      description:`*Monitoring and control during TV broadcast. Operation and maintenance of the various control systems for satellite communications equipment and associated devices. 
      * Providing technical support to resolve issues in real time and ensuring continuous transmission. 
      *Globally company, 150 TV channels in this playout`

    },
    {
      company:"Entertainment Channel",
      roll:  "Senior News Content Editor",
      address: "Tel Aviv Israel",
      staerYear: 2014,
      endYear: 2018,
      description:`*Managed a team of 15 employees. Defined work plans for short/long term, implemented work procedures, targeting effective use of resources and load balancing during broadcast time, improved productivity KPIs.
      *Coordinated with various external stakeholders and content providers (PR, publishers, brand marketers, agents, reporters etc.).
      `

    },
    {
      company:"The Israeli Sports Channel",
      roll:  "Executive Producer and Content Editor",
      address: "Tel Aviv Israel",
      staerYear: 2009,
      endYear: 2014,
      description:`*Explore and create content items for TV shows end to end in real time. Champions league content (the premium sport product for Europe)
      *Produce and edit live broadcasts, perform real-time  decision making.
      *Provided learning services & developed training programs for new employees.
      *Executive TV Producer of the biggest sport event in Israel like F1 Jerusalem 2013, israeli football final cup 2013, 2014
      *Responsibility for a 30-person broadcast team at the time of the event`

    }
  ],
  projects: [
    {    
    name: "Find Tutor",
    description:`A social network that allows you to choose skills you need help to learn and find tutor or with skills you are good on and can be a tutor, you can find the learning people who needs help`,
    links: ["https://github.com/OlgaSadova/FinalProject", "https://github.com/OlgaSadova/FinalProjectBackEnd", "https://yoututor2020.herokuapp.com"]
   
    },
    {
      name: "Flixlists",
      description:`Full stack web application that allows users to search the Open Movie Database for information about films and to keep lists of their favorite ones. Each user his her own login and password and her lists are stored persistently in a MySql database.`,
      links: ["https://flixlists.herokuapp.com", "https://github.com/OlgaSadova/FinalProjectBackEnd", "https://github.com/OlgaSadova/FinalProject"]
    },
    {
      name: "Weather Dashboard",
      description:`The weather app is simple, accessible and easy to use. Receives the weather API details and passes them to a site visitor based on their location or location searched for Fahrenheit or Celsius of your choice.`,
      links: ["https://yotambaram.github.io/Weather-Dashboard/"]
    },
    {
      name: "Finder",
      description: `My first project in code studies, a month after I started. Not a project that showcases its capabilities but it is my first "product" and has sentimental value to me. The app lets you choose a place to eat by picture. The user's location information and entertainment content come from two third-party APIs.`,
      links: ["https://yotambaram.github.io/Weather-Dashboard/"]
    }
  ]

}

const API = {
    getMyData:function(){
        return myInfo
    },
 

}
export default API