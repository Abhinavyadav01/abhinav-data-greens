import { GraduationCap, Lightbulb, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const cards: ("education" | "leadership" | "vision")[] = [
    "education",
    "leadership",
    "vision",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" as const },
    }),
  };

  const nextCard = (dir: number) => {
    setDirection(dir);
    setActiveIndex((prev) => {
      const newIndex = (prev + dir + cards.length) % cards.length;
      return newIndex;
    });
  };

  const activeCard = cards[activeIndex];

  return (
    <section id="about" className="py-8 md:py-24 px-4 sm:px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-4 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            From Civil Engineering to Data Science – A journey driven by
            curiosity and impact
          </p>
        </div>

        {/* -------- Mobile Swiping Cards -------- */}
        <div className="md:hidden flex items-center justify-center gap-2 mb-6 relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeCard}
              custom={direction}
              variants={cardVariants as any}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex items-center justify-center gap-2"
            >
              {/* Left Button */}
              <button
                onClick={() => nextCard(-1)}
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center"
              >
                {activeCard === "education" && (
                  <Target className="h-6 w-6 text-primary" />
                )}
                {activeCard === "leadership" && (
                  <GraduationCap className="h-6 w-6 text-primary" />
                )}
                {activeCard === "vision" && (
                  <Lightbulb className="h-6 w-6 text-primary" />
                )}
              </button>

              {/* Active Card */}
              {activeCard === "education" && (
                <Card className="w-34 h-35 p-4 bg-card border-border shadow-md">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xs font-bold mb-1 text-center">
                      Education
                    </h3>
                    <p className="text-muted-foreground text-[11px] text-center leading-tight">
                      B.Tech in Civil Engineering
                      <br />
                      NIT Jalandhar (2023–2027)
                    </p>
                  </div>
                </Card>
              )}

              {activeCard === "leadership" && (
                <Card className="w-34 h-35 p-4 bg-card border-border shadow-md">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xs font-bold mb-1 text-center">
                      Leadership
                    </h3>
                    <p className="text-muted-foreground text-[11px] text-center leading-tight">
                      Management Coordinator
                      <br />
                      E-Cell NIT Jalandhar
                    </p>
                  </div>
                </Card>
              )}

              {activeCard === "vision" && (
                <Card className="w-34 h-35 p-4 bg-card border-border shadow-md">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xs font-bold mb-1 text-center">
                      Vision
                    </h3>
                    <p className="text-muted-foreground text-[11px] text-center leading-tight">
                      Build a tech-driven business
                      <br />
                      that’s a market leader
                    </p>
                  </div>
                </Card>
              )}

              {/* Right Button */}
              <button
                onClick={() => nextCard(1)}
                className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center"
              >
                {activeCard === "education" && (
                  <Lightbulb className="h-6 w-6 text-primary" />
                )}
                {activeCard === "leadership" && (
                  <Target className="h-6 w-6 text-primary" />
                )}
                {activeCard === "vision" && (
                  <GraduationCap className="h-6 w-6 text-primary" />
                )}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ---------------- Desktop/Tablet Cards ---------------- */}
        <div className="hidden md:grid grid-cols-3 gap-2 md:gap-8 mb-4 md:mb-12">
          <Card className="p-2 sm:p-6 bg-card border-border hover:scale-105 transition-transform">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4 mx-auto">
              <GraduationCap className="h-4 w-4 md:h-6 md:w-6 text-primary" />
            </div>
            <h3 className="text-xs sm:text-xl font-bold mb-1 md:mb-2 text-center">
              Education
            </h3>
            <p className="text-muted-foreground text-[10px] sm:text-base text-center leading-tight">
              B.Tech in Civil Engineering
              <br />
              NIT Jalandhar (2023-2027)
            </p>
          </Card>

          <Card className="p-2 sm:p-6 bg-card border-border hover:scale-105 transition-transform">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4 mx-auto">
              <Lightbulb className="h-4 w-4 md:h-6 md:w-6 text-primary" />
            </div>
            <h3 className="text-xs sm:text-xl font-bold mb-1 md:mb-2 text-center">
              Leadership
            </h3>
            <p className="text-muted-foreground text-[10px] sm:text-base text-center leading-tight">
              Management Coordinator
              <br />
              E-Cell NIT Jalandhar
            </p>
          </Card>

          <Card className="p-2 sm:p-6 bg-card border-border hover:scale-105 transition-transform">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4 mx-auto">
              <Target className="h-4 w-4 md:h-6 md:w-6 text-primary" />
            </div>
            <h3 className="text-xs sm:text-xl font-bold mb-1 md:mb-2 text-center">
              Vision
            </h3>
            <p className="text-muted-foreground text-[10px] sm:text-base text-center leading-tight">
              Build a tech-driven business
              <br />
              that's a market leader
            </p>
          </Card>
        </div>

        {/* ---------------- About Text ---------------- */}
        <div className="md:hidden space-y-2 text-xs leading-tight text-foreground/90 overflow-hidden">
          <p>
            My journey into{" "}
            <strong className="text-primary">
              Data Science and Data Analysis
            </strong>{" "}
            began with a simple curiosity: What insights lie hidden in data that
            could solve real-world problems?
          </p>
          <p>
            As the{" "}
            <strong className="text-primary">
              Management Coordinator for the NIT Jalandhar Entrepreneurship Cell
            </strong>
            , I organized the "Revive Failed Business" event with over 200
            participants, where I learned the importance of data-driven
            decision-making in business success. This experience solidified my
            commitment to using data as a tool for innovation.
          </p>
          <p>
            Today, I leverage{" "}
            <strong className="text-primary">
              Python, SQL, Power BI, and Tableau
            </strong>{" "}
            to transform complex datasets into actionable insights. My goal is
            to build a{" "}
            <strong className="text-primary">
              tech-driven business that becomes a market leader
            </strong>{" "}
            by solving overlooked problems through innovative data solutions.
          </p>
          <p className="text-primary font-semibold">
            I believe that the best solutions come from looking at problems
            differently, and data is the lens through which we can see what
            others miss.
          </p>
        </div>

        <Card className="hidden md:block p-3 sm:p-6 md:p-8 lg:p-12 bg-card border-border">
          <div className="space-y-2 md:space-y-6 text-[11px] sm:text-base md:text-lg leading-snug md:leading-relaxed text-foreground/90">
            <p>
              My journey into{" "}
              <strong className="text-primary">
                Data Science and Data Analysis
              </strong>{" "}
              began with a simple curiosity: What insights lie hidden in data
              that could solve real-world problems?
            </p>
            <p>
              As the{" "}
              <strong className="text-primary">
                Management Coordinator for the NIT Jalandhar Entrepreneurship
                Cell
              </strong>
              , I organized the "Revive Failed Business" event with over 200
              participants, where I learned the importance of data-driven
              decision-making in business success. This experience solidified my
              commitment to using data as a tool for innovation.
            </p>
            <p>
              Today, I leverage{" "}
              <strong className="text-primary">
                Python, SQL, Power BI, and Tableau
              </strong>{" "}
              to transform complex datasets into actionable insights. My goal is
              to build a{" "}
              <strong className="text-primary">
                tech-driven business that becomes a market leader
              </strong>{" "}
              by solving overlooked problems through innovative data solutions.
            </p>
            <p className="text-primary font-semibold">
              I believe that the best solutions come from looking at problems
              differently, and data is the lens through which we can see what
              others miss.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;