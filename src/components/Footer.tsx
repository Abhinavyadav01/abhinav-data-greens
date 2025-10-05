import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 md:py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left">
            © 2025 Abhinav Yadav. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm flex items-center gap-2">
            Built with <Heart className="h-3 w-3 md:h-4 md:w-4 text-primary fill-primary" /> and data-driven passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
