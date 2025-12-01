import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex flex-col items-center space-y-8">
          <h3 className="text-2xl font-semibold mb-2 text-center">
            Contact Information
          </h3>

          <div className="space-y-6 w-full max-w-md">
            
            {/* Email - Changed to flex-col and text-center */}
            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 border border-border/50 hover:bg-card/80 transition-colors">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium text-sm text-muted-foreground mb-1">Email</h4>
                <a
                  href="mailto:pereltom2@gmail.com"
                  className="text-lg font-medium hover:text-primary transition-colors block"
                >
                  pereltom2@gmail.com
                </a>
              </div>
            </div>

            {/* Phone - Changed to flex-col and text-center */}
            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 border border-border/50 hover:bg-card/80 transition-colors">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium text-sm text-muted-foreground mb-1">Phone</h4>
                <a
                  href="tel:+14127583919"
                  className="text-lg font-medium hover:text-primary transition-colors block"
                >
                  +1 (412) 758-3919
                </a>
              </div>
            </div>

            {/* Location - Changed to flex-col and text-center */}
            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 border border-border/50 hover:bg-card/80 transition-colors">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium text-sm text-muted-foreground mb-1">Location</h4>
                <span className="text-lg font-medium block">
                  Irvine, California, USA
                </span>
              </div>
            </div>
            
          </div>

          <div className="pt-8 text-center">
            <h4 className="font-medium mb-4 text-muted-foreground">Connect With Me</h4>
            <div className="flex space-x-6 justify-center">
              <a 
                href="https://www.linkedin.com/in/tomperel/" 
                target="_blank"
                className="hover:text-primary transition-transform hover:scale-110"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="https://github.com/tomy2years" 
                target="_blank"
                className="hover:text-primary transition-transform hover:scale-110"
              >
                <Github size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};