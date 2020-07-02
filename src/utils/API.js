//Fake DB
export const myInfo = {
  info: {
    name: "Yotam Baram",
    title: "Full Stack Developer",
    aboutMeShort: "Full Stack Developer",
    aboutMeLong: "Full Stack Web Developer",
    email: "yotambaram@gmail.com",
    lookingFor: "",
    address: "Bellevue, WA USA", 
    picture: "yotam2.jpg",
  },
  myLinks: [
  {link: "https://github.com/yotambaram", linkName: "GitHub"},
  {link: "https://www.linkedin.com/in/yotambaram", linkName: "Linkedin"},
],
  summary: "Creative thinker, passionate about developing apps that help people solve everyday problems. Approaching programming challenges from different perspectives, designing simple scalable solutions for complex problems. Creating intuitive user experiences Mobile-first design & development Excellent communication and collaboration skills.",
  skills: ["HTML", "CSS", "JavaScript", "Python",  "jQuery", "React.js", "Node.js", "Express",  "Git", "MySQL", "MongoDB", "Heroku", "Responsive Design", "Bootstrap", "Handlebars", "Cookies", "Local Storage Security and Session Storage", "User Authentication", "MERN Stack", "Adobe Premiere Pro", "Final Cut Pro"],
  workExp: [
    {
      company:"MX1 (SES) Satellite services",
      roll:  "Television Playout Operator",
      address: "Bet Shemesh Israel",
      staerYear: 2018,
      endYear: 2019,
      description:`Monitored and controlled TV broadcast. Operation and maintenance of the various control systems for satellite communications equipment and associated devices.
      Provided technical support to resolve issues in real time while ensuring continuous transmission. 
      Global company, 150 TV channels in this playout.`

    },
    {
      company:"Entertainment Channel",
      roll:  "Senior News Content Editor",
      address: "Tel Aviv Israel",
      staerYear: 2014,
      endYear: 2018,
      description:`Managed a team of 15 employees. Defined work plans for short/long term, implemented work procedures, targeted effective use of resources and load balancing during broadcast time, improved productivity KPIs.
      Coordinated with various external stakeholders and content providers (PR, publishers, brand marketers, agents, reporters etc.).`

    },
    {
      company:"The Israeli Sports Channel",
      roll:  "Executive Producer and Content Editor",
      address: "Tel Aviv Israel",
      staerYear: 2009,
      endYear: 2014,
      description:`Explored and created content items for TV shows end to end in real time. 
      Produced and edited live broadcasts, performed real-time decision making.
      Provided learning services & developed training programs for new employees.
      Responsibility for a 30-person broadcast team at a real time event.`

    }
  ],
  projects: [
    {
    id: 1,
    name: "goTutor",
    description:`A social network that enables a user to look for a tutors or be a tutor and look for a students, based on selected set of skills user is defining`,
    picture: `findtutor.JPG`,
    links: [
      {
        link: "https://gotutor.herokuapp.com",
        linkName: "goTutor Web"
      },
      {
        link:"https://github.com/yotambaram/go-tutor-front",
        linkName: "GitHub Frontend"
      },
      {
        link:"https://github.com/yotambaram/go-tutor-back",
        linkName: "GitHub Backend"
      }
    ]
    },
    {
      id: 2,
      name: "Flixlists",
      description:`Full stack web application that allows users to search the open Movie Database for information about films and to create & save movie lists. Each user owns user name & password and user's lists are stored persistently in a MySQL database.`,
      picture: "flixlists.JPG",
      links: [
        {
          link: "https://flixlists.herokuapp.com",
          linkName: "flixlists Web",
        },
        {
         link: "https://github.com/yotambaram/Flixlists",
         linkName: "GitHub"
        }
      ]
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description:`The weather app is simple, accessible and easy to use. 
      The app calls the weather API, user will get weather forcast details based on user's location or searched location, results presented in Fahrenheit or Celsius based on user's choice`,
      picture: "weather-deshboard.JPG",
      links: [
        {
          link:"https://yotambaram.github.io/Weather-Dashboard",
          linkName: "Weather Dashboard Web"
          },
          {
            link:"https://github.com/yotambaram/Weather-Dashboar",
            linkName: "GitHab"
          }
      ]
    },
    {
      name: "Finder",
      id: 4,
      description: `My first project in very early stage, a month after I started. Basic but very sentimental to me.
      The app uses two third-party APIs to get user's geolocation and restaranut data. 
      The app suggests the user with restaurants randomly, based on selected location. 
      User can reject to show the next random option or accept to get restaurant details.`,
      picture: "finder.JPG",
      links: [
        {
        link:"https://commiewalker.github.io/Findr",
        linkName: "Findr Web"
        },
        {
          link:"https://github.com/commiewalker/Findr",
          linkName: "GitHab"
        }
      ]
    }
  ],
  about: [
    {
    cardid: 1,
    headline: "ABOUT ME", 
    content: "10 years experience in broadcast and commercial production as an executive producer and content editor for various tv channels. Pre and post production live remote production. I’ve played key roles in creating high exposure content and producing major events. During March 2019 I’ve relocated from Israel to Seattle, WA, due to my wife’s relocation job. I took advantage of this major change as an opportunity to learn software development and to route myself into a career change which I was hoping for a long back. Since our move, I’ve been dedicated and targeted to gain knowledge, learning and developing my skills as a full stack developer. I’ve learnt independently and also completed successfully formal crossovers (certificates). Now I’m ready to take it to the next level and leverage the knowledge and experience I gained at my next role."
    },
    {
    cardid: 2,
    headline: "PERSONAL LIFE", 
    content: "From Israel, relocated to US with my family in march 2019. Married to Ayelet and father to Adam (5) and Eleanor (2). We love to spend family time together, travel around mainly in nature."
    },
    {
    cardid: 3,
    headline: "CAREER PATH", 
    content: ["Television playout operator, Television playout operator, 2018-2019", "Senior News Content Editor, Entertainment Channel, 2014-2017", "Executive Producer and Content Editor, The Israeli Sports Channel, 2009-2014"]
    },
    {
    cardid: 4,
    headline: "I'M GOOD AT", 
    content: ["Planning & driving schedule", "Results-oriented go-getter", "Partner management & team work", "Brainstorming and innovation"]
    }
    
  ]
}

