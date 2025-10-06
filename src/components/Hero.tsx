import { ArrowDown, Download, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 md:py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-5 md:space-y-6 animate-slide-in-left text-center md:text-left">
            <div className="space-y-3">
              <p className="text-muted-foreground text-xs sm:text-sm tracking-widest uppercase">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Abhinav Yadav
              </h1>
              <p className="text-2xl sm:text-2xl md:text-3xl font-bold text-gradient">
                A Data Analyst
              </p>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto md:mx-0 px-2 sm:px-0">
              Leveraging Python, SQL, and Power BI to transform complex data into clear, actionable business intelligence. Driving insights with precision and innovation in Data Science.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 md:pt-4 justify-center md:justify-start px-4 sm:px-0">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 sm:py-5 w-full sm:w-auto text-base shadow-lg hover:shadow-xl transition-all"
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 sm:py-5 w-full sm:w-auto text-base transition-all"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf'; 
                  link.download = 'Abhinav_Yadav_CV.pdf'; 
                  link.click();

                  // 5. Optional: Track the click
                  // console.log('Resume download clicked!');
                  // or send info to analytics (Google Analytics, etc.)
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 pt-4 md:pt-4 justify-center md:justify-start">
              <a href="https://github.com/abhinavyadav01" target="_blank" rel="noopener noreferrer" 
                className="w-11 h-11 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/abhinavyadav23" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:abhinav.codes01@gmail.com"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/_abhinav.0523" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="relative animate-fade-in order-first md:order-last mb-6 md:mb-0">
            <div className="relative w-56 sm:w-72 md:w-full max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow" />
              
              {/* Image container */}
              <div className="relative rounded-full overflow-hidden border-4 border-primary/30 hover:cursor-pointer shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Abhinav Yadav - Data Analyst" 
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-out hover:scale-125"
                />
              </div>

              {/* Decorative rings */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-pulse pointer-events-none"/>
              <div className="absolute -inset-8 border border-primary/10 rounded-full pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
