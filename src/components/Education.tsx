import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Graduation",
      institution: "LDRP Institute & Technology - Gandhinagar",
      period: "2021 - 2025",
      grade: "CGPA: 8.07",
      description: "B.Tech in Computer Engineering.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Prime School of Science - Jamnagar",
      period: "2019 - 2021",
      grade: "Percentage: 84.46% | Grade: A2",
      description: "12th PCM - HSC",
    },
    {
      degree: "Secondary Education",
      institution: "Kalindi School - Jamnagar",
      period: "March 2019",
      grade: "Percentage: 91.62% | Grade: A1",
      description: "10th SSC",
    },
  ];

  return (
    <section id="education" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Education Items */}
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-20 pb-12 animate-slide-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute  left-[23px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[var(--glow-primary)]" />

                {/* Content Card */}
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-hover)] group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">
                      {edu.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Grade */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/20">
                    <span className="text-sm font-semibold text-primary">{edu.grade}</span>
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

export default Education;
