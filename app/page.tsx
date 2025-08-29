"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Mail,
  Phone,
  MapPin,
  Play,
  ChevronDown,
  Clock,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function VariableTransitPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedRoute, setSelectedRoute] = useState(0);

  const routes = [
    {
      name: "Metropolitan Express",
      from: "Central Station",
      to: "Tech Hub",
      time: "12 min",
      distance: "85 km",
      dailyRiders: "15,000",
      color: "from-blue-400 to-cyan-500",
    },
    {
      name: "Coastal Connector",
      from: "Business District",
      to: "Innovation Park",
      time: "17 min",
      distance: "120 km",
      dailyRiders: "22,000",
      color: "from-cyan-400 to-indigo-500",
    },
    {
      name: "Regional Network",
      from: "City Center",
      to: "Economic Zone",
      time: "28 min",
      distance: "180 km",
      dailyRiders: "35,000",
      color: "from-indigo-400 to-purple-500",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "callout",
        "routes",
        "investment",
        "team",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const nextRoute = () => {
    setSelectedRoute((prev) => (prev + 1) % routes.length);
  };

  const prevRoute = () => {
    setSelectedRoute((prev) => (prev - 1 + routes.length) % routes.length);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white transition-colors duration-500">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-transparent to-slate-800/30"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <nav className="fixed top-3 left-3 right-3 z-50 bg-slate-900/40 backdrop-blur-3xl border border-slate-700/20 rounded-full shadow-2xl shadow-slate-900/60 liquid-glass transition-all duration-500 hover:bg-slate-900/50 hover:border-slate-600/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Variable%20Black%20Logo-2sbZybvUwwSyb9kmbY9NqLqfdmeQb4.png"
                alt="Variable Logo"
                className="h-6 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {[
                { name: "Routes", id: "routes" },
                { name: "Investment", id: "investment" },
                { name: "Team", id: "team" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 px-3 py-2 rounded-full backdrop-blur-sm ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-900/30 shadow-lg shadow-blue-900/20"
                      : "text-slate-300 hover:bg-slate-800/40"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-touch-feedback mobile-smooth rounded-full h-8 w-8 p-0 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="relative w-4 h-4">
                  <span
                    className={`hamburger-line absolute block h-0.5 w-4 bg-current ${
                      isMenuOpen ? "rotate-45 translate-y-1.5" : "translate-y-0"
                    }`}
                  />
                  <span
                    className={`hamburger-line absolute block h-0.5 w-4 bg-current translate-y-1.5 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`hamburger-line absolute block h-0.5 w-4 bg-current ${
                      isMenuOpen
                        ? "-rotate-45 translate-y-1.5"
                        : "translate-y-3"
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/30 rounded-b-3xl mx-2 mb-2 shadow-xl">
            <div className="px-4 py-4 space-y-2">
              {[
                { name: "Routes", id: "routes" },
                { name: "Investment", id: "investment" },
                { name: "Team", id: "team" },
                { name: "Contact", id: "contact" },
              ].map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-touch-feedback block w-full text-left text-base font-medium transition-all duration-500 px-4 py-3 rounded-xl hover:bg-slate-800/50 transform ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  } ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-900/30"
                      : "text-slate-300 hover:text-blue-400"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-cyan-900/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-slate-950/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <div className="flex flex-wrap justify-center gap-2 mb-6 mt-20">
              <Badge className="px-2 py-1 bg-blue-900/40 text-blue-300 border-blue-600/30 rounded-full backdrop-blur-sm text-xs font-medium">
                🚄 Revolutionary High-Speed Transit
              </Badge>
              <Badge className="px-2 py-1 bg-cyan-900/40 text-cyan-300 border-cyan-600/30 rounded-full backdrop-blur-sm text-xs font-medium">
                ⚡ 400km/h Max Speed
              </Badge>
              <Badge className="px-2 py-1 bg-indigo-900/40 text-indigo-300 border-indigo-600/30 rounded-full backdrop-blur-sm text-xs font-medium">
                🌍 Zero Emissions
              </Badge>
              <Badge className="px-2 py-1 bg-purple-900/40 text-purple-300 border-purple-600/30 rounded-full backdrop-blur-sm text-xs font-medium">
                🔮 Future Technology
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent leading-tight text-balance">
              The Future of
              <br />
              Transportation
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-pretty px-2">
              Experience revolutionary high-speed rail technology that connects
              cities in minutes, not hours. Join the transportation revolution
              that's reshaping how we travel.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-2">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium"
                onClick={() => scrollToSection("investment")}
              >
                Invest Now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-slate-600 hover:bg-blue-900/20 transition-all duration-300 bg-transparent text-slate-300 hover:text-white backdrop-blur-sm font-medium"
                onClick={() => scrollToSection("callout")}
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto px-2 py-4">
              {[
                {
                  label: "Max Speed",
                  value: "400",
                  unit: "km/h",
                  delay: "0ms",
                },
                {
                  label: "Cities Connected",
                  value: "50",
                  unit: "+",
                  delay: "200ms",
                },
                {
                  label: "Travel Time Saved",
                  value: "75",
                  unit: "%",
                  delay: "400ms",
                },
                {
                  label: "Carbon Reduction",
                  value: "90",
                  unit: "%",
                  delay: "600ms",
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="p-2 sm:p-3 bg-slate-800/60 backdrop-blur-xl border-slate-700/30 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-up shadow-lg"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                    {stat.unit}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400" />
        </div>
      </section>

      <section id="callout" className="py-12 sm:py-16 lg:py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-up">
            <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
              <Badge className="px-2 py-1 bg-red-900/30 text-red-300 border-red-700/50 rounded-full text-xs font-medium">
                🚨 Reality Check
              </Badge>
              <Badge className="px-2 py-1 bg-orange-900/30 text-orange-300 border-orange-700/50 rounded-full text-xs font-medium">
                💡 Time for Change
              </Badge>
              <Badge className="px-2 py-1 bg-yellow-900/30 text-yellow-300 border-yellow-700/50 rounded-full text-xs font-medium">
                🇨🇦 Canadian Innovation
              </Badge>
              <Badge className="px-2 py-1 bg-green-900/30 text-green-300 border-green-700/50 rounded-full text-xs font-medium">
                ✅ Actually Real
              </Badge>
            </div>
          </div>

          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
            {/* First Callout */}
            <div className="text-center animate-fade-up">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent leading-tight text-balance tracking-tight">
                Let's be honest
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-100 leading-relaxed text-pretty font-light max-w-4xl mx-auto px-2">
                Public transportation in Canada is{" "}
                <span className="font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  embarrassing
                </span>
                .
              </p>
            </div>

            {/* Second Callout */}
            <div
              className="text-center animate-fade-up space-y-4 sm:space-y-6"
              style={{ animationDelay: "200ms" }}
            >
              <div className="max-w-5xl mx-auto">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed text-pretty font-light mb-4 sm:mb-6 px-2">
                  People are tired of{" "}
                  <span className="text-red-400 font-medium">
                    stalled projects
                  </span>
                  ,{" "}
                  <span className="text-orange-400 font-medium">
                    slow construction
                  </span>
                  , and{" "}
                  <span className="text-yellow-400 font-medium">
                    fantasy tunnels
                  </span>
                  .
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-indigo-600/20 blur-3xl rounded-full"></div>
                <h3 className="relative text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent text-balance leading-tight tracking-tight px-2">
                  But it doesn't have to be this way.
                </h3>
              </div>
            </div>

            {/* Third Callout */}
            <Card
              className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl border-slate-700/30 rounded-3xl animate-fade-up shadow-2xl shadow-slate-900/50"
              style={{ animationDelay: "400ms" }}
            >
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
                  <Badge className="px-2 py-1 bg-blue-900/40 text-blue-300 border-blue-600/30 rounded-full text-xs font-medium">
                    🏗️ Private Funding
                  </Badge>
                  <Badge className="px-2 py-1 bg-cyan-900/40 text-cyan-300 border-cyan-600/30 rounded-full text-xs font-medium">
                    🚄 Toronto → Barrie
                  </Badge>
                  <Badge className="px-2 py-1 bg-indigo-900/40 text-indigo-300 border-indigo-600/30 rounded-full text-xs font-medium">
                    ⏱️ 20 Minutes
                  </Badge>
                  <Badge className="px-2 py-1 bg-purple-900/40 text-purple-300 border-purple-600/30 rounded-full text-xs font-medium">
                    🏎️ 350 km/h
                  </Badge>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-balance leading-tight tracking-tight px-2">
                    Variable is building Canada's first privately funded
                    high-speed passenger rail line
                  </h3>

                  <div className="max-w-4xl mx-auto space-y-2 sm:space-y-3">
                    <p className="text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed text-pretty font-light px-2">
                      Connecting Toronto to Barrie in{" "}
                      <span className="text-cyan-400 font-bold text-lg sm:text-2xl md:text-3xl">
                        20 minutes
                      </span>{" "}
                      at{" "}
                      <span className="text-blue-400 font-bold text-lg sm:text-2xl md:text-3xl">
                        350 km/h
                      </span>
                      .
                    </p>

                    <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed text-pretty max-w-3xl mx-auto px-2">
                      Our approach is{" "}
                      <span className="text-green-400 font-semibold">fast</span>
                      ,{" "}
                      <span className="text-blue-400 font-semibold">
                        transparent
                      </span>
                      , and{" "}
                      <span className="text-cyan-400 font-semibold">
                        actually real
                      </span>
                      , with a clear plan, proven technology, and strong
                      early-stage governance.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge className="px-2 py-1 bg-sky-900/30 text-sky-300 border-sky-700/50 rounded-full text-xs font-medium">
                🗺️ Interactive Network
              </Badge>
              <Badge className="px-2 py-1 bg-cyan-900/30 text-cyan-300 border-cyan-700/50 rounded-full text-xs font-medium">
                📊 Real-Time Data
              </Badge>
              <Badge className="px-2 py-1 bg-blue-900/30 text-blue-300 border-blue-700/50 rounded-full text-xs font-medium">
                🚀 Ultra-Fast Routes
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-balance">
              Interactive Route Network
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto text-pretty px-2">
              Connecting major metropolitan areas with unprecedented speed and
              reliability.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-xl border border-slate-700/30 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Side - Route Selection (Desktop) / Swipeable Cards (Mobile) */}
              <div className="animate-fade-up">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                  Select Route
                </h3>

                <div className="hidden sm:block space-y-3">
                  {routes.map((route, index) => (
                    <Card
                      key={index}
                      className={`route-transition p-4 cursor-pointer transition-all duration-700 ease-out hover:scale-[1.02] transform ${
                        selectedRoute === index
                          ? "bg-slate-700/80 border-blue-500/50 shadow-lg shadow-blue-500/20 scale-[1.01]"
                          : "bg-slate-800/60 border-slate-700/30 hover:bg-slate-700/40"
                      } backdrop-blur-xl rounded-2xl`}
                      onClick={() => setSelectedRoute(index)}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        transform:
                          selectedRoute === index ? "scale(1.01)" : "scale(1)",
                        transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2 transition-colors duration-300">
                            {route.name}
                          </h4>
                          <div className="flex items-center text-slate-400 text-sm mb-2 transition-colors duration-300">
                            <MapPin className="h-4 w-4 mr-1" />
                            {route.from} → {route.to}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-cyan-400 transition-colors duration-300">
                              <Clock className="h-4 w-4 mr-1" />
                              <span className="font-medium text-sm">
                                {route.time}
                              </span>
                            </div>
                            <div className="flex items-center text-indigo-400 transition-colors duration-300">
                              <User className="h-4 w-4 mr-1" />
                              <span className="font-medium text-sm">
                                {route.dailyRiders} daily
                              </span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight
                          className={`h-5 w-5 ml-4 transition-all duration-500 transform ${
                            selectedRoute === index
                              ? "text-blue-400 translate-x-1"
                              : "text-slate-500"
                          }`}
                        />
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="sm:hidden">
                  <div className="relative">
                    <Card className="route-transition p-4 bg-slate-700/80 border-blue-500/50 shadow-lg shadow-blue-500/20 backdrop-blur-xl rounded-2xl transition-all duration-700">
                      <div className="flex items-center justify-between mb-4">
                        <button
                          onClick={prevRoute}
                          className="mobile-touch-feedback p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                          <ChevronLeft className="h-4 w-4 text-slate-400 transition-colors duration-300 hover:text-white" />
                        </button>
                        <div className="flex space-x-1">
                          {routes.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all duration-700 ${
                                selectedRoute === index
                                  ? "bg-blue-400 scale-125"
                                  : "bg-slate-600"
                              }`}
                            />
                          ))}
                        </div>
                        <button
                          onClick={nextRoute}
                          className="mobile-touch-feedback p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                          <ChevronRight className="h-4 w-4 text-slate-400 transition-colors duration-300 hover:text-white" />
                        </button>
                      </div>

                      <div
                        className="route-content-transition text-center transition-all duration-700 transform"
                        key={selectedRoute}
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {routes[selectedRoute].name}
                        </h4>
                        <div className="flex items-center justify-center text-slate-400 text-sm mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          {routes[selectedRoute].from} →{" "}
                          {routes[selectedRoute].to}
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                          <div className="flex items-center text-cyan-400">
                            <Clock className="h-4 w-4 mr-1" />
                            <span className="font-medium text-sm">
                              {routes[selectedRoute].time}
                            </span>
                          </div>
                          <div className="flex items-center text-indigo-400">
                            <User className="h-4 w-4 mr-1" />
                            <span className="font-medium text-sm">
                              {routes[selectedRoute].dailyRiders} daily
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              <div
                className="animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <div
                  className="route-transition route-content-transition bg-slate-800/40 rounded-2xl p-4 backdrop-blur-sm border border-slate-700/20 transition-all duration-700"
                  key={`details-${selectedRoute}`}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 transition-all duration-500">
                    {routes[selectedRoute].name}
                  </h3>
                  <div className="flex items-center text-slate-400 text-sm mb-4 transition-all duration-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {routes[selectedRoute].from} → {routes[selectedRoute].to}
                  </div>

                  {/* Route Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400 font-medium transition-all duration-500">
                        {routes[selectedRoute].from}
                      </span>
                      <span className="text-sm text-slate-400 font-medium transition-all duration-500">
                        {routes[selectedRoute].to}
                      </span>
                    </div>
                    <div className="relative">
                      <div className="h-3 bg-slate-700 rounded-full">
                        <div
                          className={`h-3 bg-gradient-to-r ${routes[selectedRoute].color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: "100%",
                            animation: "progressFill 1s ease-out",
                          }}
                        ></div>
                      </div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full border-2 border-slate-800 transition-all duration-700 animate-pulse"></div>
                      <div
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full border-2 border-slate-800 transition-all duration-700 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-slate-700/30 rounded-xl">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        {routes[selectedRoute].time}
                      </div>
                      <div className="text-xs text-slate-400 font-medium">
                        Travel Time
                      </div>
                      <div className="text-xs text-cyan-300 mt-1">
                        {routes[selectedRoute].distance}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-xl">
                      <div className="text-2xl font-bold text-indigo-400 mb-1">
                        {routes[selectedRoute].dailyRiders}
                      </div>
                      <div className="text-xs text-slate-400 font-medium">
                        Daily Ridership
                      </div>
                      <div className="text-xs text-indigo-300 mt-1">
                        78% faster than car
                      </div>
                    </div>
                  </div>

                  {/* Comparison */}
                  <div className="border-t border-slate-700 pt-4">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      vs Traditional Transport
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2 p-2 bg-slate-700/20 rounded-xl">
                        <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-xs">
                          🚗
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">By Car</div>
                          <div className="text-white font-medium text-sm">
                            2h 45m
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 p-2 bg-slate-700/20 rounded-xl">
                        <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-xs">
                          ✈️
                        </div>
                        <div>
                          <div className="text-xs text-slate-400">By Plane</div>
                          <div className="text-white font-medium text-sm">
                            1h 30m
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Revenue */}
                  <div className="mt-4 p-3 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-700/20">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">$</span>
                      </div>
                      <span className="text-blue-300 font-medium text-sm">
                        Annual Revenue
                      </span>
                    </div>
                    <div className="text-xl font-bold text-cyan-400">
                      $2.4M annually
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investment" className="py-12 sm:py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-up">
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
              <Badge className="px-2 py-1 bg-green-900/30 text-green-300 border-green-700/50 rounded-full text-xs font-medium">
                💰 High Returns
              </Badge>
              <Badge className="px-2 py-1 bg-blue-900/30 text-blue-300 border-blue-700/50 rounded-full text-xs font-medium">
                📈 Growth Potential
              </Badge>
              <Badge className="px-2 py-1 bg-cyan-900/30 text-cyan-300 border-cyan-700/50 rounded-full text-xs font-medium">
                🌟 Market Leader
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-balance">
              Investment Opportunity
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto text-pretty px-4">
              Join the future of transportation with projected returns that
              match our revolutionary technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="animate-fade-up">
              <Card className="p-4 sm:p-6 bg-slate-900/80 backdrop-blur-xl border-slate-700/30 rounded-2xl shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                  Financial Projections
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    { year: "2025", revenue: "$2.5B", growth: "+150%" },
                    { year: "2026", revenue: "$6.2B", growth: "+148%" },
                    { year: "2027", revenue: "$12.8B", growth: "+106%" },
                    { year: "2028", revenue: "$22.4B", growth: "+75%" },
                  ].map((projection, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-2 sm:p-3 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-700/10"
                    >
                      <div className="font-semibold text-white text-sm sm:text-base">
                        {projection.year}
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-cyan-400 text-sm sm:text-base">
                          {projection.revenue}
                        </div>
                        <div className="text-xs sm:text-sm text-green-400">
                          {projection.growth}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div
              className="animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="space-y-3 sm:space-y-4">
                <Card className="p-3 sm:p-4 bg-slate-900/80 backdrop-blur-xl border-slate-700/30 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg sm:text-xl text-white">
                        $50B
                      </div>
                      <div className="text-xs text-slate-400">
                        Market Opportunity
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-3 sm:p-4 bg-slate-900/80 backdrop-blur-xl border-slate-700/30 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg sm:text-xl text-white">
                        100M+
                      </div>
                      <div className="text-xs text-slate-400">
                        Annual Passengers
                      </div>
                    </div>
                  </div>
                </Card>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium"
                >
                  Request Investment Package{" "}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-up">
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
              <Badge className="px-2 py-1 bg-indigo-900/30 text-indigo-300 border-indigo-700/50 rounded-full text-xs font-medium">
                👨‍💼 Visionary Leadership
              </Badge>
              <Badge className="px-2 py-1 bg-violet-900/30 text-violet-300 border-violet-700/50 rounded-full text-xs font-medium">
                🏆 Industry Expert
              </Badge>
              <Badge className="px-2 py-1 bg-purple-900/30 text-purple-300 border-purple-700/50 rounded-full text-xs font-medium">
                🚀 Innovation Pioneer
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-balance">
              Founder & Visionary
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto text-pretty px-4">
              Industry veteran and visionary driving the future of
              transportation technology.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="p-4 sm:p-6 bg-slate-900/80 backdrop-blur-xl border-slate-700/30 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-up max-w-sm shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-2xl overflow-hidden">
                  <img
                    src="/professional-woman-ceo-executive-portrait.png"
                    alt="Dr. Sarah Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                  Dr. Sarah Chen
                </h3>
                <p className="text-blue-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  Founder & CEO
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mb-3 sm:mb-4 leading-relaxed">
                  Former Tesla VP of Engineering with 15+ years in
                  transportation innovation
                </p>
                <div className="flex flex-wrap justify-center gap-1">
                  <Badge className="px-2 py-1 bg-blue-900/30 text-blue-300 border-blue-700/50 rounded-full text-xs">
                    MIT PhD
                  </Badge>
                  <Badge className="px-2 py-1 bg-cyan-900/30 text-cyan-300 border-cyan-700/50 rounded-full text-xs">
                    Tesla Veteran
                  </Badge>
                  <Badge className="px-2 py-1 bg-indigo-900/30 text-indigo-300 border-indigo-700/50 rounded-full text-xs">
                    Innovation Leader
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-up">
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
              <Badge className="px-2 py-1 bg-sky-900/30 text-sky-300 border-sky-700/50 rounded-full text-xs font-medium">
                📞 24/7 Support
              </Badge>
              <Badge className="px-2 py-1 bg-cyan-900/30 text-cyan-300 border-cyan-700/50 rounded-full text-xs font-medium">
                🤝 Partnership Ready
              </Badge>
              <Badge className="px-2 py-1 bg-blue-900/30 text-blue-300 border-blue-700/50 rounded-full text-xs font-medium">
                💼 Investment Focus
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-balance">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto text-pretty px-4">
              Ready to be part of the transportation revolution? Contact our
              investment team today.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="animate-fade-up max-w-2xl w-full">
              <Card className="p-6 sm:p-8 bg-slate-900/80 backdrop-blur-xl border-slate-700/30 rounded-2xl shadow-2xl text-center">
                <div className="space-y-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-white mb-2">
                        Email Us
                      </div>
                      <div className="text-xl text-blue-400 font-medium">
                        investors@variabletransit.com
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Variable%20Black%20Logo-2sbZybvUwwSyb9kmbY9NqLqfdmeQb4.png"
                  alt="Variable Logo"
                  className="h-5 sm:h-6 w-auto"
                />
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Revolutionizing transportation with cutting-edge high-speed rail
                technology.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-slate-400">
            <p>© 2025 Variable. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
