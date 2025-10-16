import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Study Notion",
      description:
        "An EdTech platform built with the MERN stack. It facilitates targeted advertising by analyzing user behavior and preferences. Leveraging MERN's versatility, it offers dynamic content delivery, real-time data processing, and seamless integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Harshakabari/studynotion",
      demo: "https://studynotion-theta.vercel.app/",
    },
    {
      title: "Career Hub",
      description:
        "A MERN stack job portal offering a user-friendly interface for job seekers and recruiters. Features advanced search filters, easy application submissions, secure user authentication, and an intuitive dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Harshakabari/Career-Hub",
      demo: "#",
    },
    {
      title: "Daily Digest",
      description:
        "A dynamic news web application developed using the MERN stack. It provides users with a curated selection of daily news articles, offering convenience and efficiency in staying updated with current events.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Harshakabari/Daily-Digest",
      demo: "https://daily-digest-ten.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my expertise in full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-hover)] group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && project.demo !== "#" ? (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary/50 text-primary-foreground opacity-70 cursor-not-allowed"
                        disabled
                        aria-disabled="true"
                        title="Demo unavailable"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
