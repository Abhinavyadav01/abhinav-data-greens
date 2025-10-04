import { BarChart3, Database, FileText, TrendingUp, Zap, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Visualization & Dashboarding",
      description: "Create interactive, insightful dashboards using Power BI and Tableau that transform raw data into compelling visual stories for informed decision-making.",
      tools: ["Power BI", "Tableau", "Plotly"]
    },
    {
      icon: Database,
      title: "Data Transformation & Cleaning",
      description: "Expert data wrangling using Python and SQL to transform messy datasets into clean, structured, analysis-ready formats for reliable insights.",
      tools: ["Python/Pandas", "SQL", "Power Query"]
    },
    {
      icon: FileText,
      title: "Business Intelligence Reporting",
      description: "Develop comprehensive BI reports that answer critical business questions, identify trends, and provide actionable recommendations backed by data.",
      tools: ["DAX", "SQL Queries", "Excel"]
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis & Forecasting",
      description: "Identify patterns, trends, and anomalies in your data to predict future outcomes and support strategic planning with statistical analysis.",
      tools: ["Python/Scipy", "Statistical Models", "Power BI"]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline repetitive data workflows through automation scripts and tools, saving time and reducing human error in data processing.",
      tools: ["Python Scripts", "Streamlit", "APIs"]
    },
    {
      icon: LineChart,
      title: "Data Storytelling",
      description: "Translate complex data findings into clear, engaging narratives that resonate with stakeholders and drive business action.",
      tools: ["Presentation Skills", "Data Viz", "Communication"]
    }
  ];

  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services & <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional data analysis services to unlock the value in your data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border card-glow group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
            <p className="text-lg font-semibold mb-2">
              Ready to transform your data into insights?
            </p>
            <p className="text-muted-foreground">
              Let's discuss how data analysis can solve your business challenges
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
