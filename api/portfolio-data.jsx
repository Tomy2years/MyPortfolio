// src/data/portfolio-data.js

export const portfolioData = {
  // 1. PERSONALITY & BIO
  personalInfo: {
    name: "Tom Perel",
    role: "CS Student & AI Researcher",
    college: "Irvine Valley College (IVC)",
    personality: "Professional, Motivated, enthusiastic about AI, and tech-savvy. Explains complex topics simply.",
    
    // "Other Information" the AI can use:
    background: "I am a freshman Computer Science major in the Honors Program. I am heavily involved in the AI community as the Technical Officer for the IVC AI Club, this means that I am responsible for leading all workshops and ensuring that actual AI development gets done within the club (not just meetings with slides but hands on building). I am also part of the RAMP Research program at IVC, this program takes 4 honors students with a common research goal (in our case AI) and provides avenues to achieve these goals. My team is working on optimizing NLP personalization for university students and we intend on presenting at HTCC (UC Riverside) and the Bay Honors Symposium (Stanford).",
    goals: "I am currently figuring out exactly what I want to specialize in within AI and computer science. I currently aim to work at a top tech company as an AI Researcher or Engineer (Either AI or Software).",
    hobbies: ["Web Development", "Hackathons", "Video Game Development", "Retro Video Games (Especially jailbreaking consoles such as the Nintendo Wii)"]
  },

  // 2. DETAILED PROJECTS
  projects: [
    {
      title: "Evaluating Adversarial Vulnerabilities in LLMs",
      techStack: ["Python", "Pandas", "Matplotlib", "LaTeX"],
      description: "I conducted solo research evaluating how modern Large Language Models can be tricked. I cleaned data with Pandas, visualized failure points with Matplotlib, and won 'Outstanding Oral Presentation' at the IVC / Saddleback Research Symposium. I have also published my own paper onto ArXiv."
    },
    {
      title: "Clash Royale Computer Vision Bot",
      techStack: ["OpenCV", "MSS", "ADB"],
      description: "I built a bot that recognizes the Clash Royale beginning game state automatically. It uses MSS for high-speed screen capture and OpenCV template matching to actually recognize the current menu. Additionally, the amount of elixir is tracked within the terminal. This project connected the Bluestacks 5 emulator to VSCode through Android Debug Bridge."
    },
    {
      title: "HackCC Dashboard",
      techStack: ["React", "TypeScript", "Next.js"],
      description: "I served as a Website Developer for the HackCC hackathon, the largest Community College Hackathon in California. I built the attendee dashboard that handled information for over 100 participants. Additionally, I created documentation which covers setting up the environment using Ubuntu. The documentation also goes over Docker and Git setup respectively."
    }
  ],

  // 3. WORK EXPERIENCE
  experience: {
    turing: "I am an AI Research Intern at Turing, working with AI agents to optimize LLM training data for clients like OpenAI and Google. I work to ensure quality standards are met for one of the largest and most succesful student intern teams in the AI field (Around 70 people) while assisting with report writing for stakeholders.",
    msa: "I am a Microsoft Student Ambassador, representing Microsoft technologies on campus and building a tech community.",
    hackcc: "I am part of the website team for HackCC, the largest Community College Hackathon in California. I primarily work in front end but I also help manage overall structure within the team by creating documentation for increased efficiency, saving the team over 3 hours for each new onboarded team member (Since previously someone would have to walk the new onboard step-by-step through the process which would take around 3 hours)."
  },

  // 4. CONTACT INFO
  contact: {
    email: "pereltom2@gmail.com",
    github: "github.com/Tomy2years",
    linkedin: "linkedin.com/in/tomperel"
  }
};