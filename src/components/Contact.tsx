import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    thoughts: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setLoading(true);
    try {
      setSubmitting(true);
      const payload = {
        access_key: "05fecd48-eb3d-4d6b-85cb-011eac537f00",
        name: formData.name,
        subject: `Portfolio contact from ${formData.name}`,
        description: formData.description,
        thoughts: formData.thoughts,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (response.ok && result?.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", thoughts: "", description: "" });
      } else {
        toast({
          title: "Failed to send",
          description: result?.message || "Please try again later.",
        });
      }
    } catch (err) {
      toast({
        title: "Network error",
        description: "Unable to send right now. Please try again.",
      });
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harshakabari7@gmail.com",
      link: "mailto:harshakabari7@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8866187179",
      link: "tel:+918866187179",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gandhinagar, Gujarat, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Questions, thoughts, or just want to say hello?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-left">
              <Card className="p-8 bg-card border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-secondary border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="thoughts" className="block text-sm font-medium mb-2">
                      Your Thoughts
                    </label>
                    <Textarea
                      id="thoughts"
                      placeholder="Share your thoughts..."
                      value={formData.thoughts}
                      onChange={(e) =>
                        setFormData({ ...formData, thoughts: e.target.value })
                      }
                      rows={4}
                      className="bg-secondary border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <Textarea
                        id="description"
                      placeholder="Your message here..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      required
                      rows={5}
                      className="bg-secondary border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-hover)] group"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-right">
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-hover)] group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="font-semibold hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-semibold">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
                <h3 className="text-xl font-bold mb-3">Let's Build Something Amazing!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
