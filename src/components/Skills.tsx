import { Code2, Database, BarChart3, Brain, MessageSquare, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set());
  const techSkillsRef = useRef<HTMLDivElement>(null);
  const softSkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleSkills((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    const techElements = techSkillsRef.current?.querySelectorAll("[data-index]");
    const softElements = softSkillsRef.current?.querySelectorAll("[data-index]");

    techElements?.forEach((el) => observer.observe(el));
    softElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const getSkillLabel = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Developing";
  };
  const technicalSkills = [
    { name: "Python (Pandas, NumPy, Matplotlib)", level: 90, icon: Code2 },
    { name: "SQL & Database Management", level: 85, icon: Database },
    { name: "Power BI & Tableau", level: 88, icon: BarChart3 },
    { name: "Data Structures & Algorithms (Java)", level: 65, icon: Brain },
  ];

  const softSkills = [
    { name: "Communication & Storytelling", level: 92 },
    { name: "Leadership & Team Management", level: 88 },
    { name: "Problem Solving", level: 80 },
    { name: "Entrepreneurial Vision", level: 100 },
  ];

  const tools = [
    "Git & GitHub",
    "VS Code",
    "MySQL",
    "IntelliJ IDEA",
    "Streamlit",
    "Jupyter Notebook",
    "Google Colab",
    "Tableau",
    "MS Word",
    "MS Excel",
    "Power BI",
    "DAX"
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            A comprehensive toolkit for transforming data into insights
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-12 md:mb-16" ref={techSkillsRef}>
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            Technical Stack
          </h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {technicalSkills.map((skill, index) => (
              <Card key={index} className="p-4 md:p-6 bg-card border-border card-glow" data-index={index}>
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <skill.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-sm md:text-base">{skill.name}</h4>
                      <span className="text-xs md:text-sm text-primary font-medium">
                        {getSkillLabel(skill.level)}
                      </span>
                    </div>
                    <Progress 
                      value={visibleSkills.has(index) ? skill.level : 0} 
                      className="h-2 transition-all duration-[1500ms] ease-out" 
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-secondary border border-primary/20 rounded-full text-xs md:text-sm font-medium hover:border-primary hover:bg-primary/10 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div ref={softSkillsRef}>
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Professional Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {softSkills.map((skill, index) => {
              const softIndex = index + 100; // Offset to avoid collision with tech skills
              return (
                <div key={index} className="space-y-2" data-index={softIndex}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-sm md:text-base">{skill.name}</h4>
                    <span className="text-xs md:text-sm text-primary font-medium">
                      {getSkillLabel(skill.level)}
                    </span>
                  </div>
                  <Progress 
                    value={visibleSkills.has(softIndex) ? skill.level : 0} 
                    className="h-2 transition-all duration-[1500ms] ease-out" 
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
