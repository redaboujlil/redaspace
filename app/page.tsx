"use client"

import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Mail, Phone, Play, BarChart3, Users, Trophy, Download, ChevronUp, Menu, X } from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedinIcon as Linkedin } from "@/components/social-icons"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    }

    // Back to top button visibility
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    }) 
  }  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#4B0082] rounded-full flex items-center justify-center">
              <Image
              src="\newlogo.png"
              alt="Analytics Logo"
              width={50}
              height={50}
              
            />
            </div>
            <a href="https://redaboujlil.space/"><span className="font-bold text-xl dark:text-white">Reda BOUJLIL</span></a> 
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-[#4B0082] dark:hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-600 dark:text-gray-300 hover:text-[#4B0082] dark:hover:text-purple-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-gray-600 dark:text-gray-300 hover:text-[#4B0082] dark:hover:text-purple-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-[#4B0082] dark:hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
            </nav>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-800" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-800" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <nav className="px-4 py-4 space-y-4">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-600 dark:text-gray-300 hover:text-[#4B0082] dark:hover:text-purple-400 transition-colors py-2"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-600 dark:text-gray-300 hover:text-[#4B0082] dark:hover:text-purple-400 transition-colors py-2"
              >
                Skills
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-600 dark:text-gray-300 hover:text-[#4B0082] dark:hover:text-purple-400 transition-colors py-2"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-600 dark:text-gray-300 hover:text-[#4B0082] dark:hover:text-purple-400 transition-colors py-2"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="py-20 px-4 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/bgimage.png')" }}
      >
        <div className="absolute inset-0 bg-opacity-40 bg-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Image
              src="/rblogo.jpeg"
              alt="Professional headshot"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">Reda BOUJLIL</h1>
            <p className="text-3xl text-[#4B0082] font-semibold mb-6">Soccer Performance Analyst</p>
            <p className="text-xl font-bold text-gray-800 dark:text-gray-800 max-w-3xl mx-auto mb-8">
              Turning match footage and performance data into tactical insights, opponent reports, and player
              development plans that help coaches win on the pitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#4B0082] hover:bg-purple-800">
                <a href="/my-cv 26 27.pdf" className="inline-flex items-center no-underline">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="mailto:redaboujlil99@gmail.com" className="inline-flex items-center no-underline">
                  <Mail className="w-4 h-4 mr-2"/>
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center ">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I am a soccer performance analyst working with the Royal Moroccan Football Federation (FRMF) youth
                national categories. I break down matches and training sessions to help coaches understand how their
                team plays, how opponents will play, and where each player can improve.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Before focusing on soccer, I spent over 5 years as a video analyst and assistant coach in professional
                basketball, winning titles at the highest level in Morocco. That background gives me a sharp eye for
                tactical patterns, spacing, and transitions, which I now apply to the 11-a-side game.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-purple-100">Match Analysis</Badge>
                <Badge variant="secondary" className="bg-purple-100">Opponent Scouting</Badge>
                <Badge variant="secondary" className="bg-purple-100">Performance Data</Badge>
                <Badge variant="secondary" className="bg-purple-100">Set Pieces</Badge>
                <Badge variant="secondary" className="bg-purple-100">Player Development</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Trophy className="w-8 h-8 text-[#4B0082] mx-auto mb-2" />
                  <div className="text-2xl font-bold">60+</div>
                  <div className="text-sm text-gray-600">Teams Analyzed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Play className="w-8 h-8 text-[#4B0082] mx-auto mb-2" />
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-gray-600">Matches Analyzed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <BarChart3 className="w-8 h-8 text-[#4B0082] mx-auto mb-2" />
                  <div className="text-2xl font-bold">30%</div>
                  <div className="text-sm text-gray-600">Avg Performance Boost</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-[#4B0082] mx-auto mb-2" />
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-gray-600">Players Coached</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Skills & Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Play className="w-10 h-10 text-[#4B0082] mb-2" />
                <CardTitle>Tactical Match Analysis</CardTitle>
                <CardDescription>
                  Coding and breaking down matches to reveal how a team builds, presses, and defends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Build-up & Attacking Patterns</li>
                  <li>• Pressing & Defensive Shape</li>
                  <li>• Transitions (Attack ↔ Defense)</li>
                  <li>• Set-Piece Analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-[#4B0082] mb-2" />
                <CardTitle>Performance Data</CardTitle>
                <CardDescription>
                  Turning event and physical data into clear reports and visuals for staff
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Team & Player KPIs</li>
                  <li>• Shot Maps & Chance Creation</li>
                  <li>• Post-Match Reports</li>
                  <li>• Trend & Season Tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-[#4B0082] mb-2" />
                <CardTitle>Scouting & Development</CardTitle>
                <CardDescription>Preparing the staff for the next opponent and tracking player progress</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Opponent Scouting Reports</li>
                  <li>• Individual Player Clips</li>
                  <li>• Youth Player Development</li>
                  <li>• Match & Training Filming</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="px-4 bg-white py-[50px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See My Work in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch this demo showcasing my video analysis process, from raw match footage to actionable insights that
              help coaching staff improve team performance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              {/* Replace the YouTube video ID in the src URL below */}
              <iframe
                className="w-full h-64 md:h-96"
                src="https://www.youtube.com/embed/2OKTaa67VyA"
                title="Performance Analysis Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Play className="w-6 h-6 text-[#4B0082]" />
                  </div>
                  <h4 className="font-semibold mb-2">Game Footage Analysis</h4>
                  <p className="text-sm text-gray-600">
                    See how I break down raw game footage to identify key patterns and strategic opportunities
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6 text-[#4B0082]" />
                  </div>
                  <h4 className="font-semibold mb-2">Statistical Insights</h4>
                  <p className="text-sm text-gray-600">
                    Watch as I transform video data into meaningful statistics and performance metrics
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-[#4B0082]" />
                  </div>
                  <h4 className="font-semibold mb-2">Coaching Recommendations</h4>
                  <p className="text-sm text-gray-600">
                    Learn how I present actionable insights and strategic recommendations to coaching staff
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Soccer Performance Analyst</CardTitle>
                    <CardDescription className="text-lg">FRMF / CODM Training Center </CardDescription>
                  </div>
                  <Badge>2025 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Supporting youth categories (from U13 to U21) through tactical video analysis, data visualization, and performance reporting. 
                  Responsible for preparing match breakdowns, tracking defensive and offensive trends, and delivering actionable insights 
                  to coaches for player development and team improvement.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Opponent analysis</li>
                  <li>Game and Training recordings</li>
                  <li>Match breakdown</li>
                  <li>Player Development Tracking</li>
                  <li>Provide tactical recommendations to staff based on video analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Basketball Video Analyst</CardTitle>
                    <CardDescription className="text-lg">Itihad Riadhi De Tanger - IRT Basketball </CardDescription>
                  </div>
                  <Badge variant="outline">2024 - 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Lead video analyst for professional basketball team with both mens and womens, responsible for comprehensive game analysis,
                  opponent scouting, and player development insights.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Men team :Semi Final of Morocco championship & Throne Cup</li>
                  <li>Women :Throne Cup Winners & Championship Finalists</li>
                  <li>Analyzed 100+ games, providing detailed breakdowns for coaching staff</li>
                  <li>Collaborated with coaching staff on game planning and strategy</li>
                  <li>Supported coaching staff with basic statistical analysis in live game</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Basketball Video Analyst</CardTitle>
                    <CardDescription className="text-lg">Fath Union Sportif - FUS Basketball</CardDescription>
                  </div>
                  <Badge variant="outline">2023 - 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Provided video analysis support for Division I of Moroccan championship, focusing on game strategy developing.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>2023-24 Championship Winners</li>
                  <li>Quarter Final of Basketball Africa League - BAL</li>
                  <li>Analyzed 60+ games, providing detailed breakdowns for coaching staff</li>
                  <li>Supported coaching staff with basic statistical analysis in live game</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Basketball Assistant Coach</CardTitle>
                    <CardDescription className="text-lg">Maghreb Sportif de Rabat -MSR Basketball U19</CardDescription>
                  </div>
                  <Badge variant="outline">2021 - 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Entry-level position supporting video analysis operations for youth basketball team.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>2nd Place in Rabat Salé Kenitra Regional League</li>
                  <li>Helped the head coach in game and trainings</li>
                  <li>Supported coaching staff with basic statistical analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Basketball Assistant Coach</CardTitle>
                    <CardDescription className="text-lg">Association Sportive De Salé - ASS U19</CardDescription>
                  </div>
                  <Badge variant="outline">2020 - 2021</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Entry-level position supporting video analysis operations for youth and amateur basketball programs.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>2nd Place in Rabat Salé Kenitra Regional League</li>
                  <li>Helped the head coach in game and trainings</li>
                  <li>Supported coaching staff with basic statistical analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            Looking for a performance analyst for your club, academy, or national team? Get in touch to discuss how
            match analysis and data can give your team an edge.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-[#4B0082] mb-2" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-600">redaboujlil99@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-[#4B0082] mb-2" />
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-600">{"+212 6 15 88 33 04"}</p>
            </div>
            <div className="flex flex-col items-center">
              <Linkedin className="w-8 h-8 text-[#4B0082] mb-2" />
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <p className="text-gray-600">@redaboujlil</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <a href="https://www.facebook.com/reda.boujlil.1/"><FacebookIcon className="w-4 h-4"/></a> 
            </Button>
            <Button variant="outline" size="icon" >
              <a href="https://www.instagram.com/_reda.boujlil/"><InstagramIcon className="w-4 h-4" /></a> 
            </Button>
          </div>
        </div>
      </section>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#4B0082] hover:bg-purple-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2026 <a href="https://redaboujlil.space/"> Reda Boujlil </a> - Soccer Performance Analyst. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )

}
