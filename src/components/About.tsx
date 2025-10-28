import { GraduationCap, Lightbulb, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const About = () => {
  const [activeCard, setActiveCard] = useState<'education' | 'leadership' | 'vision'>('education');

  return (
    <section id="about" className="py-8 md:py-24 px-4 sm:px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-4 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            From Civil Engineering to Data Science - A journey driven by curiosity and impact
          </p>
        </div>

        {/* Mobile Interactive Cards */}
        <div className="md:hidden flex items-center justify-center gap-2 mb-4">
          {activeCard === 'leadership' && (
            <>
              <Card className="w-32 h-32 p-3 bg-card border-border transition-all duration-300 ease-in-out animate-scale-in">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xs font-bold mb-1 text-center">Leadership</h3>
                  <p className="text-muted-foreground text-[9px] text-center leading-tight">
                    Management Coordinator<br />
                    E-Cell NIT Jalandhar
                  </p>
                </div>
              </Card>
              <button onClick={() => setActiveCard('education')} className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out animate-scale-in">
                <GraduationCap className="h-6 w-6 text-primary" />
              </button>
              <button onClick={() => setActiveCard('vision')} className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out animate-scale-in">
                <Target className="h-6 w-6 text-primary" />
              </button>
            </>
          )}
          
          {activeCard === 'education' && (
            <>
              <button onClick={() => setActiveCard('leadership')} className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out animate-scale-in">
                <Lightbulb className="h-6 w-6 text-primary" />
              </button>
              <Card className="w-32 h-32 p-3 bg-card border-border transition-all duration-300 ease-in-out animate-scale-in">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xs font-bold mb-1 text-center">Education</h3>
                  <p className="text-muted-foreground text-[9px] text-center leading-tight">
                    B.Tech in Civil Engineering<br />
                    NIT Jalandhar (2023-2027)
                  </p>
                </div>
              </Card>
              <button onClick={() => setActiveCard('vision')} className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out animate-scale-in">
                <Target className="h-6 w-6 text-primary" />
              </button>
            </>
          )}
          
          {activeCard === 'vision' && (
            <>
              <button onClick={() => setActiveCard('leadership')} className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out animate-scale-in">
                <Lightbulb className="h-6 w-6 text-primary" />
              </button>
              <button onClick={() => setActiveCard('education')} className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out animate-scale-in">
                <GraduationCap className="h-6 w-6 text-primary" />
              </button>
              <Card className="w-32 h-32 p-3 bg-card border-border transition-all duration-300 ease-in-out animate-scale-in">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xs font-bold mb-1 text-center">Vision</h3>
                  <p className="text-muted-foreground text-[9px] text-center leading-tight">
                    Build a tech-driven business<br />
                    that's a market leader
                  </p>
                </div>
              </Card>
            </>
          )}
        </div>

        {/* Desktop/Tablet Cards */}
        <div className="hidden md:grid grid-cols-3 gap-2 md:gap-8 mb-4 md:mb-12">
          <Card className="p-2 sm:p-6 bg-card border-border hover:scale-105 transition-transform">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4 mx-auto">
              <GraduationCap className="h-4 w-4 md:h-6 md:w-6 text-primary" />
            </div>
            <h3 className="text-xs sm:text-xl font-bold mb-1 md:mb-2 text-center">Education</h3>
            <p className="text-muted-foreground text-[10px] sm:text-base text-center leading-tight">
              B.Tech in Civil<br className="md:hidden" /> Engineering<br />
              NIT Jalandhar<br className="md:hidden" /> (2023-2027)
            </p>
          </Card>

          <Card className="p-2 sm:p-6 bg-card border-border hover:scale-105 transition-transform">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4 mx-auto">
              <Lightbulb className="h-4 w-4 md:h-6 md:w-6 text-primary" />
            </div>
            <h3 className="text-xs sm:text-xl font-bold mb-1 md:mb-2 text-center">Leadership</h3>
            <p className="text-muted-foreground text-[10px] sm:text-base text-center leading-tight">
              Management<br className="md:hidden" /> Coordinator<br />
              E-Cell NIT<br className="md:hidden" /> Jalandhar
            </p>
          </Card>

          <Card className="p-2 sm:p-6 bg-card border-border hover:scale-105 transition-transform">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4 mx-auto">
              <Target className="h-4 w-4 md:h-6 md:w-6 text-primary" />
            </div>
            <h3 className="text-xs sm:text-xl font-bold mb-1 md:mb-2 text-center">Vision</h3>
            <p className="text-muted-foreground text-[10px] sm:text-base text-center leading-tight">
              Build a tech-driven<br className="md:hidden" /> business<br />
              that's a market<br className="md:hidden" /> leader
            </p>
          </Card>
        </div>

        {/* About Text - Mobile without border, Desktop with Card */}
        <div className="md:hidden space-y-2 text-xs leading-tight text-foreground/90 h-[180px] overflow-hidden">
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

        <Card className="hidden md:block p-3 sm:p-6 md:p-8 lg:p-12 bg-card border-border">
          <div className="space-y-2 md:space-y-6 text-[11px] sm:text-base md:text-lg leading-snug md:leading-relaxed text-foreground/90">
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
