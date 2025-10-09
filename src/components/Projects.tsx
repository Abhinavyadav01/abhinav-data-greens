import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import collegeAnalyser from "@/assets/college-analyser-project.jpg";
import zeptoDashboard from "@/assets/zepto-dashboard-project.jpg";
import collegeAnalyserVideo from "@/assets/college-analyser-video.mp4";
import zeptoDashboardVideo from "@/assets/zepto-dashboard-video.mp4";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "College Analyser",
      description: "An interactive dashboard built with Streamlit and Python helping JEE aspirants make informed decisions during counseling. Features visual college comparisons, detailed seat matrices, historical cutoff analysis, and location-based insights using maps.",
      image: collegeAnalyser,
      video: collegeAnalyserVideo,
      technologies: ["Python", "Excel", "Streamlit", "Pandas", "Plotly", "Matplotlib"],
      highlights: [
        "Visual comparison of all 54 IIT/NIT colleges",
        "Interactive plots and cutoff trends with selectboxes",
        "Location analysis with integrated maps",
        "Simplified counseling decision-making"
      ],
      liveLink: "https://nkjcpjfzpjhaxlf7nzcsam.streamlit.app",
      githubLink: "https://github.com/Abhinavyadav01/CollegeAnalyser-"
    },
    {
      title: "Zepto Sales Dashboard",
      description: "A comprehensive Power BI dashboard analyzing sales data for Zepto (10 minutes grocery delivery service). Utilized Power Query for data transformation, DAX for advanced calculations, and data modeling to answer critical business questions about item performance and outlet efficiency.",
      image: zeptoDashboard,
      video: zeptoDashboardVideo,
      technologies: ["Power BI", "Power Query", "DAX", "Data Modeling"],
      highlights: [
        "Analysis of item sales, rating and fat content patterns",
        "Outlet performance comparison across locations",
        "Revenue optimization insights",
        "Interactive filters for deep-dive analysis"
      ],
      liveLink: "#",
      githubLink: "https://github.com/Abhinavyadav01/Zepto_Sales"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            Transforming complex problems into elegant data-driven solutions
          </p>
          <div className="hidden md:flex items-center justify-center mt-6">
            <p className="text-muted-foreground text-sm font-cursive">
              Hover on the project image to watch video
            </p>
          </div>
        </div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-card border-border card-glow">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image/Video */}
                <div 
                  className="relative h-48 sm:h-64 md:h-auto overflow-hidden bg-muted"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {hoveredProject === index ? (
                    <video 
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60 md:opacity-0" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-xs md:text-sm uppercase tracking-wide text-primary mb-2 md:mb-3">
                        Key Highlights
                      </h4>
                      <ul className="space-y-1.5 md:space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                    <Button 
                      variant="ghost"
                      className="hover:bg-secondary w-full sm:w-auto"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
