import { ArrowRight, ExternalLink, Github, ScrollText } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Evaluating Adversarial Vulnerabilities in Modern Large Language Models",
    description: "A solo research project with a published and cited paper that won the 2025 IVC/Saddleback Research Symposium out of 200+ participants.",
    image: "/projects/Project1.JPG",
    tags: ["Python", "Pandas", "Matplotlib"],
    demoUrl: "https://arxiv.org/abs/2511.17666",
    githubUrl: "https://github.com/Tomy2years/llm-jail-break",
  },
  {
    id: 2,
    title: "Portrait",
    description:
      "AI-Powered version of Canvas with RAG chatbot that won 1st place at the AI track for UCI HackTheCoast 2026.",
    image: "/projects/project2.jpeg",
    tags: ["Langchain", "React", "SQLite", "FastAPI"],
    demoUrl: "https://devpost.com/software/portrait-3fzu1l",
    githubUrl: "https://github.com/Tomy2years/HackTheCoast",
  },
  {
    id: 3,
    title: "SideQuest",
    description:
      "A gamified social media that gets people moving around their community. Won 1st place overall and the Community track at LaserHacks 2026.",
    image: "/projects/project3.jpg",
    tags: ["FastAPI", "Langchain", "SQLAlchemy", "React"],
    demoUrl: "https://devpost.com/software/laserhacks",
    githubUrl: "https://github.com/Tomy2years/Laserhacks",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ScrollText size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/tomy2years"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
