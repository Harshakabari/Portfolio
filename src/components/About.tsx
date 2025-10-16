import { Laptop, PencilRuler, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-10 items-start animate-slide-up">
            {/* Left: Paragraphs */}
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hi Everyone! I'm{" "}
                <span className="font-semibold text-primary">
                  Harsh Akabari
                </span>, a passionate{" "}
                <span className="font-semibold text-accent">
                  Full Stack Web Developer
                </span>{" "}
                driven by the art of transforming ideas into impactful digital
                experiences. I hold a B.Tech in Computer Engineering from LDRP
                Institute of Technology, Gandhinagar.
              </p>

              <p>
                With over{" "}
                <span className="font-semibold text-accent">
                  6+ months of industry experience
                </span>, I bring a deep commitment to excellence and a proven
                track record of delivering robust, production-ready solutions.
                My strong work ethic and collaborative spirit make me a valuable
                team player, dedicated to achieving collective success.
              </p>

              <p>
                I thrive on continuous learning — always exploring new
                technologies and best practices to elevate my craft. Let’s
                connect and explore how I can contribute to your team’s success
                with innovative solutions and a passion for pushing boundaries
                in web development.
              </p>
            </div>

            {/* Right: Service cards (single column) */}
            <div className="grid gap-6">
              <div className="rounded-2xl bg-secondary/40 border border-border/60 p-6 hover:border-primary/60 transition-colors shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/15">
                    <PencilRuler className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Web Design</h4>
                    <p className="text-muted-foreground mt-2">Modern, accessible, and thoughtful UI/UX crafted to reflect your brand.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-secondary/40 border border-border/60 p-6 hover:border-primary/60 transition-colors shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/15">
                    <Laptop className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Web App Development</h4>
                    <p className="text-muted-foreground mt-2">High-quality, scalable apps using React, Node.js, and TypeScript.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-secondary/40 border border-border/60 p-6 hover:border-primary/60 transition-colors shadow-sm">
                  <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/15">
                    <Server className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                    <h4 className="text-xl font-semibold">Deployment</h4>
                    <p className="text-muted-foreground mt-2">Reliable deployments on AWS/Vercel with CI/CD and best practices.</p>
                  </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
