import { Code2, Database, BarChart3, Brain, MessageSquare, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
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
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for transforming data into insights
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            Technical Stack
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <Card key={index} className="p-6 bg-card border-border card-glow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    {/* <h4 className="font-semibold mb-2">{skill.name}</h4>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-sm text-primary mt-1 font-medium">{skill.level}%
                      {getSkillLabel(skill.level)}
                    </p>  */}
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{skill.name}</h4>
                      <span className="text-sm text-primary font-medium">
                        {getSkillLabel(skill.level)}
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />

                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-secondary border border-primary/20 rounded-full text-sm font-medium hover:border-primary hover:bg-primary/10 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Professional Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{skill.name}</h4>
                  <span className="text-sm text-primary font-medium">
                    {getSkillLabel(skill.level)}
                  </span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
