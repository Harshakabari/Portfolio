import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Ywork.ai",
      period: "May 2025 - Present",
      description:
        "As a Full Stack Developer at Ywork.ai, I played a key role in building and optimizing the core Ywork platform. My primary focus was on developing complex, interactive front-end interfaces using React.js and Redux for dynamic state management. I also implemented real-time functionalities using WebSockets and worked closely with the backend team to ensure seamless integration, data consistency, and overall system performance.",
      achievements: [
        <>
          Built and optimized the platform’s UI with{" "}
          <span className="font-semibold text-primary">Next.js</span> and{" "}
          <span className="font-semibold text-primary">Redux</span>, implementing
          complex and responsive user interfaces with smooth state transitions.
        </>,
        <>
          Designed and maintained advanced state management logic in{" "}
          <span className="font-semibold text-primary">Redux</span>, improving
          performance, scalability, and data flow consistency across components.
        </>,
        <>
          Added real-time functionality using{" "}
          <span className="font-semibold text-accent">WebSockets</span> to enhance
          responsiveness, live updates, and user interactivity.
        </>,
        <>
          Collaborated closely with the backend team to integrate{" "}
          <span className="font-semibold text-primary">REST APIs</span> and
          optimize communication between client and server.
        </>,
        <>
          Contributed to performance tuning, bug fixes, and UI optimization for a
          seamless user experience across devices.
        </>,
      ],
    },    
    {
      role: "Full Stack Developer Intern",
      company: "Tatvasoft",
      period: "Jan - April 2025",
      description:
        "As a Full Stack Developer intern, I contributed to the development and enhancement of both front-end and back-end components of web applications. I worked on building a Kitchen Order Ticket (KOT) system named PizzaShop, handling the complete development process from design to deployment using .NET MVC and PostgreSQL to improve order management and operational efficiency.",
      achievements: [
        <>
          Developed a full-fledged{" "}
          <span className="font-semibold text-primary">Kitchen Order Ticket (KOT)</span>{" "}
          system named{" "}
          <span className="font-semibold text-primary">PizzaShop</span> to manage
          and streamline restaurant order workflows.
        </>,
        <>
          Designed and integrated the database with{" "}
          <span className="font-semibold text-primary">PostgreSQL</span> and built
          the application architecture using{" "}
          <span className="font-semibold text-primary">.NET MVC</span> for seamless
          interaction between frontend and backend components.
        </>,
        <>
          Implemented features for efficient order tracking, kitchen coordination,
          and real-time status updates to enhance overall operational flow.
        </>,
      ],
    },
      
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-20 pb-12 animate-slide-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-[23px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[var(--glow-primary)]" />

                {/* Content Card */}
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-hover)] group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>{exp.description}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <p>
                        {exp.achievements.map((frag, i) => (
                          <span key={i}>
                            {frag}
                            {i < exp.achievements.length - 1 ? " " : ""}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
