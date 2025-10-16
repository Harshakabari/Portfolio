import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Harshakabari",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/harshakabari/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:harshakabari7@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative border-t border-border bg-secondary/30">
      <div className="container mx-auto px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Harsh Akabari
              </h3>
              <p className="text-muted-foreground">
                Full Stack Developer passionate about creating innovative web solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {["About", "Projects", "Skills", "Experience", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Harsh Akabari. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-600 fill-red-600" /> by Harsh Akabari
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
