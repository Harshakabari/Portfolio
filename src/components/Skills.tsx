import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiSocketdotio,
  SiAmazon,
  SiPostgresql,
  SiPython,
  SiCplusplus,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiNginx,
} from "react-icons/si";

const Skills = () => {
  const skills: { name: string; Icon?: React.ComponentType<{ className?: string }> }[] = [
    { name: "HTML", Icon: SiHtml5 },
    { name: "CSS", Icon: SiCss3 },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "Javascript", Icon: SiJavascript },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "React Js", Icon: SiReact },
    // { name: "Tanstack Query", Icon: SiReactquery },
    { name: "Node Js", Icon: SiNodedotjs },
    { name: "Express Js", Icon: SiExpress },
    { name: "NextJs", Icon: SiNextdotjs },
    { name: "MongoDB", Icon: SiMongodb },
 
    { name: "Socket.io", Icon: SiSocketdotio },
    { name: "AWS", Icon: SiAmazon },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "Python", Icon: SiPython },
    { name: "C++", Icon: SiCplusplus },
    // { name: "Docker", Icon: SiDocker },
    { name: "Git", Icon: SiGit },
    // { name: "Nginx", Icon: SiNginx },
  ];

  return (
    <section id="skills" className="py-24 relative bg-gradient-to-b from-background via-secondary/30 to-background">
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-primary">Technologies</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies I've been working with recently
            </p>
          </div>

          {/* Skills Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {skills.map(({ name, Icon }, index) => (
              <div
                key={name}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/70 border border-border text-foreground/90 text-sm md:text-base shadow-sm hover:border-primary hover:text-primary hover:shadow-[var(--shadow-hover)] hover:scale-105 transition-all duration-300 cursor-default will-change-transform"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
