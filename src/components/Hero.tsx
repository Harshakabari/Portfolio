import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";


const Hero = () => {
  const [text, setText] = useState("");
  const roles = [
    "Full Stack Developer", 
    "Frontend Developer",
    "Backend Developer",
  ];
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const currentText = roles[i];
      const current = isDeleting
        ? currentText.substring(0, text.length - 1)
        : currentText.substring(0, text.length + 1);

      setText(current);
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && current === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && current === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Purple Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 animate-glow" />

      {/* Purple Orbs */}
      <div className="absolute top-1/4 left-[200px] w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-8 relative z-10 pt-[105px] md:pt-[60px]">
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12 max-w-6xl mx-auto animate-slide-up">
          {/* Left: Text Content */}
          <div className="text-center md:text-left space-y-8">
            {/* Greeting */}
            <div className="inline-block">
              <p className="text-muted-foreground text-lg mb-2">Hi, I'm</p>
              <h1  style={{ fontFamily: "'Moon Dance', cursive" }} className="text-5xl moon-dance md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                Harsh Akabari
              </h1>
            </div>

            {/* Typing Effect */}
            <div className="h-6 flex items-center justify-center md:justify-start">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                {text}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed">
              A creative Full Stack Web Developer dedicated to crafting fast, responsive, and impactful web solutions that bring ideas to life with clean design and powerful functionality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-2">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-hover)] transition-all duration-300"
                asChild
              >
                <a href="/resume.pdf" download="Harsh_Akabari_Resume.pdf">
                  Download Resume
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-2 md:pb-0 pb-4">
              <a
                href="https://github.com/Harshakabari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/harshakabari/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:harshakabari7@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="order-first md:order-none flex justify-center md:justify-end">
            <div className="relative w-56 aspect-square md:w-[65%] lg:w-[70%] group">
              {/* Decorative ring / glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-accent/20 to-transparent blur-2xl transition-transform duration-700 ease-out group-hover:scale-110" />
              {/* Animated shadow orbs */}
              <div aria-hidden="true" className="pointer-events-none select-none">
                <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/25 blur-2xl animate-rotate" />
                <div className="absolute -bottom-6 -right-8 w-20 h-20 md:w-28 md:h-28 rounded-full bg-accent/25 blur-2xl animate-float" />
                <div className="absolute top-1/2 -left-10 w-14 h-14 md:w-20 md:h-20 rounded-full bg-primary/15 blur-2xl animate-glow" />
              </div>
              <img
                src="/profile.jpg"
                alt="Harsh Akabari"
                className="relative z-10 w-full h-full object-cover rounded-full border border-border/60 shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:-rotate-1"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/Hero-img.jpg'; }}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-3 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
