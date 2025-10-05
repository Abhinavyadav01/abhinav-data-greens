import { GraduationCap, Lightbulb, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            From Civil Engineering to Data Science - A journey driven by curiosity and impact
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          <Card className="p-6 bg-card border-border card-glow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="text-muted-foreground">
              B.Tech in Civil Engineering<br />
              NIT Jalandhar (2023-2027)
            </p>
          </Card>

          <Card className="p-6 bg-card border-border card-glow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Leadership</h3>
            <p className="text-muted-foreground">
              Management Coordinator<br />
              E-Cell NIT Jalandhar
            </p>
          </Card>

          <Card className="p-6 bg-card border-border card-glow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Vision</h3>
            <p className="text-muted-foreground">
              Build a tech-driven business<br />
              that's a market leader
            </p>
          </Card>
        </div>

        <Card className="p-6 md:p-8 lg:p-12 bg-card border-border">
          <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
            <p>
              My journey into <strong className="text-primary">Data Science and Data Analysis</strong> began with a simple curiosity: What insights lie hidden in data that could solve real-world problems?
            </p>
            <p>
              As the <strong className="text-primary">Management Coordinator for the NIT Jalandhar Entrepreneurship Cell</strong>, I organized the "Revive Failed Business" event with over 200 participants, where I learned the importance of data-driven decision-making in business success. This experience solidified my commitment to using data as a tool for innovation.
            </p>
            <p>
              Today, I leverage <strong className="text-primary">Python, SQL, Power BI, and Tableau</strong> to transform complex datasets into actionable insights. My goal is to build a <strong className="text-primary">tech-driven business that becomes a market leader</strong> by solving overlooked problems through innovative data solutions.
            </p>
            <p className="text-primary font-semibold">
              I believe that the best solutions come from looking at problems differently, and data is the lens through which we can see what others miss.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
