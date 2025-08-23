import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Box,
  Smartphone,
  Globe,
  Users,
  Target,
  TrendingUp,
  Rocket,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import heroImage from "@/assets/hero-3d-printing.jpg";
import marketplaceImage from "@/assets/marketplace-concept.jpg";
import applicationsImage from "@/assets/applications-showcase.jpg";

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [

    {
      id: "title",
      title: "3DPrinting",
      subtitle: "Revolutionizing 3D Printing Services in Egypt",
      content: (
        <div className="text-center space-y-8">
          <div className="relative overflow-hidden rounded-2xl mb-8">
            <img
              src={heroImage}
              alt="Futuristic 3D printing laboratory"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <h1 className="text-6xl font-bold hero-text mb-4">Etb3haly</h1>
          <p className="text-2xl text-secondary font-semibold">
            First 3D Printing Services in Egypt
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into reality through cutting-edge 3D printing
            technology and comprehensive digital services
          </p>
        </div>
      ),
    },

    {
      id: "problem",
      title: "The Problem",
      subtitle: "Limited Access to 3D Printing in MENA",
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold hero-text">The Challenge</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <p className="text-lg">
                    Lack of accessible 3D printing services in Egypt and MENA
                    region
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <p className="text-lg">
                    Expensive import costs for 3D printed products
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <p className="text-lg">
                    Limited expertise in 3D design and modeling
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                  <p className="text-lg">
                    No comprehensive platform connecting ideas to finished
                    products
                  </p>
                </div>
              </div>
            </div>
            <div className="surface-card p-8 rounded-2xl">
              <div className="text-center space-y-4">
                <div className="text-5xl font-bold text-destructive">85%</div>
                <p className="text-muted-foreground">
                  of regional businesses import 3D printed components
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "solution",
      title: "Our Solution",
      subtitle: "Complete Digital Platform for 3D Innovation",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold hero-text text-center">
            All-in-One 3D Platform
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="surface-card p-6 text-center space-y-4 animate-float">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Web & Mobile Apps</h3>
              <p className="text-muted-foreground">
                User-friendly platforms for seamless idea submission and project
                tracking
              </p>
            </Card>
            <Card
              className="surface-card p-6 text-center space-y-4 animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                <Box className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">3D Design & Printing</h3>
              <p className="text-muted-foreground">
                Professional design consultation and high-quality 3D printing
                services
              </p>
            </Card>
            <Card
              className="surface-card p-6 text-center space-y-4 animate-float"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Online Marketplace</h3>
              <p className="text-muted-foreground">
                Ready-made products and customizable 3D models for instant
                purchase
              </p>
            </Card>
          </div>
        </div>
      ),
    },

    {
      id: "services",
      title: "Services Offered",
      subtitle: "End-to-End 3D Solutions",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold hero-text text-center">
            Comprehensive Service Portfolio
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="surface-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  Design Consultation
                </h3>
                <p className="text-muted-foreground">
                  Transform concepts into professional 3D models with expert
                  guidance
                </p>
              </div>
              <div className="surface-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-secondary">
                  Professional Printing
                </h3>
                <p className="text-muted-foreground">
                  High-quality printing with various materials and finishing
                  options
                </p>
              </div>
              <div className="surface-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-accent">
                  Fast Delivery
                </h3>
                <p className="text-muted-foreground">
                  Nationwide delivery network ensuring quick turnaround times
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={marketplaceImage}
                alt="Modern Egyptian marketplace concept"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "applications",
      title: "Market Applications",
      subtitle: "3D Printing Across Industries",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold hero-text text-center">
            Diverse Industry Applications
          </h2>
          <div className="relative overflow-hidden rounded-2xl mb-8">
            <img
              src={applicationsImage}
              alt="3D printing applications showcase"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="surface-card p-4 rounded-xl text-center">
              <h3 className="font-semibold text-primary">Education</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Student projects & prototyping
              </p>
            </div>
            <div className="surface-card p-4 rounded-xl text-center">
              <h3 className="font-semibold text-secondary">Healthcare</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Medical models & prosthetics
              </p>
            </div>
            <div className="surface-card p-4 rounded-xl text-center">
              <h3 className="font-semibold text-accent">Architecture</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Design models & prototypes
              </p>
            </div>
            <div className="surface-card p-4 rounded-xl text-center">
              <h3 className="font-semibold text-primary">Manufacturing</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Rapid prototyping solutions
              </p>
            </div>
            <div className="surface-card p-4 rounded-xl text-center">
              <h3 className="font-semibold text-secondary">Creative Arts</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Art, jewelry & fashion
              </p>
            </div>
            <div className="surface-card p-4 rounded-xl text-center">
              <h3 className="font-semibold text-accent">Automotive</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Parts & customization
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "advantages",
      title: "Competitive Advantages",
      subtitle: "Why Choose Print3D Egypt",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold hero-text text-center">
            Our Competitive Edge
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Localized Egyptian Service
                  </h3>
                  <p className="text-muted-foreground">
                    Understanding local market needs with fast, reliable
                    delivery
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Affordable Pricing</h3>
                  <p className="text-muted-foreground">
                    Competitive rates compared to expensive import alternatives
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Complete Journey</h3>
                  <p className="text-muted-foreground">
                    End-to-end service from initial idea to finished product
                    delivery
                  </p>
                </div>
              </div>
            </div>
            <div className="surface-card p-8 rounded-2xl text-center space-y-6">
              <div className="text-4xl font-bold text-primary">50%</div>
              <p className="text-muted-foreground">Cost savings vs. imports</p>
              <div className="text-4xl font-bold text-secondary">72h</div>
              <p className="text-muted-foreground">Average turnaround time</p>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "revenue",
      title: "Revenue Model",
      subtitle: "Sustainable Business Growth",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold hero-text text-center">
            Revenue Streams
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="surface-card p-6 text-center space-y-4 glow-effect">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Box className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Service Fees</h3>
              <p className="text-muted-foreground">
                Revenue from 3D design consultation and printing services
              </p>
              <div className="text-2xl font-bold text-primary">40%</div>
            </Card>
            <Card className="surface-card p-6 text-center space-y-4 glow-effect">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Product Sales</h3>
              <p className="text-muted-foreground">
                Direct sales of ready-made 3D printed products and designs
              </p>
              <div className="text-2xl font-bold text-secondary">35%</div>
            </Card>
            <Card className="surface-card p-6 text-center space-y-4 glow-effect">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Marketplace Commission</h3>
              <p className="text-muted-foreground">
                Commission from third-party sellers on our platform
              </p>
              <div className="text-2xl font-bold text-accent">25%</div>
            </Card>
          </div>
        </div>
      ),
    },

    {
      id: "target",
      title: "Target Audience",
      subtitle: "Our Customer Segments",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold hero-text text-center">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="surface-card p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">
                    Students & Researchers
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  University students and academic researchers needing
                  prototypes and educational models
                </p>
              </div>
              <div className="surface-card p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-semibold">Startups & SMEs</h3>
                </div>
                <p className="text-muted-foreground">
                  Small to medium enterprises requiring rapid prototyping and
                  product development
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="surface-card p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Box className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold">
                    Design Professionals
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Architects, engineers, and designers needing physical model
                  representations
                </p>
              </div>
              <div className="surface-card p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Play className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Makers & Innovators</h3>
                </div>
                <p className="text-muted-foreground">
                  Hobbyists, inventors, and creative professionals bringing
                  ideas to life
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "vision",
      title: "Future Vision",
      subtitle: "Expanding Across MENA",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold hero-text text-center">
            Our Roadmap
          </h2>
          <div className="space-y-6">
            <div className="surface-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Phase 1: Egypt Market Leadership
              </h3>
              <p className="text-muted-foreground">
                Establish dominant position in Egyptian 3D printing market with
                comprehensive service offerings
              </p>
            </div>
            <div className="surface-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                Phase 2: MENA Expansion
              </h3>
              <p className="text-muted-foreground">
                Scale operations across Middle East and North Africa region with
                strategic partnerships
              </p>
            </div>
            <div className="surface-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-accent">
                Phase 3: Advanced Technologies
              </h3>
              <p className="text-muted-foreground">
                Integrate AI-powered design assistance and 3D scanning
                capabilities for enhanced user experience
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 surface-card p-4 rounded-full">
              <Rocket className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold">
                Projected to serve 10,000+ customers by 2026
              </span>
            </div>
          </div>
        </div>
      ),
    },
    
    {
      id: "contact",
      title: "Let's Shape the Future",
      subtitle: "Contact Print3D Egypt",
      content: (
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold hero-text">
              Shaping Ideas into Reality
            </h1>
            <p className="text-xl text-secondary font-semibold">
              with 3D Printing Innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="surface-card p-6 rounded-xl text-center space-y-3">
              <Mail className="w-8 h-8 text-primary mx-auto" />
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground">hello@print3degypt.com</p>
            </div>
            <div className="surface-card p-6 rounded-xl text-center space-y-3">
              <Phone className="w-8 h-8 text-secondary mx-auto" />
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground">+20 100 123 4567</p>
            </div>
            <div className="surface-card p-6 rounded-xl text-center space-y-3">
              <Globe className="w-8 h-8 text-accent mx-auto" />
              <h3 className="font-semibold">Website</h3>
              <p className="text-muted-foreground">www.print3degypt.com</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary-hover"
            >
              Download Mobile App
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-background via-surface to-surface-variant">
      <div className="min-h-screen min-w-screen flex flex-col bg-gradient-to-br from-background via-surface to-surface-variant">
        {/* Header Navigation */}
        <header className="border-b border-border/50 backdrop-blur-md bg-background/80 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Box className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold hero-text">
                  Print3D Egypt
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">
                  {currentSlide + 1} / {slides.length}
                </span>
                <div className="flex space-x-1">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex justify-center w-full container mx-auto px-6 py-12">
          <div className="slide-transition">{slides[currentSlide].content}</div>
        </main>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-4 surface-card p-4 rounded-full shadow-lg">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm font-medium px-4">
            {slides[currentSlide].title}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;