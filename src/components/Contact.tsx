import { useState } from "react";
import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_fgr2vk7",
        "template_if8mr1q",
        formData,
        "RuddJ7m653xUJlXxF"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
      });
      console.error("EmailJS Error:", error);
    }
  };

  const handleSuggestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_fgr2vk7",
        "template_if8mr1q",
        { message: suggestion },
        "RuddJ7m653xUJlXxF"
      );
      toast({
        title: "Suggestion received!",
        description: "Thank you for your feedback.",
      });
      setSuggestion("");
    } catch (error) {
        toast({
          title: "Error sending suggestion",
          description: "Please try again later.",
        });
        console.error("EmailJS Error:", error);
      }
  };

  const contactLinks = [
    { icon: Mail, label: "Email", value: "abhinav.codes01@gmail.com", href: "mailto:abhinav.codes01@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "/abhinavyadav23", href: "https://linkedin.com/in/abhinavyadav23" },
    { icon: Github, label: "GitHub", value: "/abhinavyadav01", href: "https://github.com/abhinavyadav01" },
    { icon: Instagram, label: "Instagram", value: "_abhinav.0523", href: "https://instagram.com/_abhinav.0523" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            Have a project in mind or want to discuss data solutions? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Contact Form */}
          <Card className="p-6 md:p-8 bg-card border-border">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Suggestion Box */}
          <div className="space-y-6 md:space-y-8">
            {/* Contact Links */}
            <Card className="p-6 md:p-8 bg-card border-border">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Suggestion Box */}
            <Card className="p-6 md:p-8 bg-card border-border">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Quick Suggestion</h3>
              <form onSubmit={handleSuggestionSubmit} className="space-y-3">
                <Textarea
                  placeholder="Share your feedback or suggestions..."
                  rows={3}
                  className="bg-background border-border resize-none"
                />
                <Button 
                  type="submit" 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Submit Suggestion
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
