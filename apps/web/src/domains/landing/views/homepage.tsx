import { Button } from "@web/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@web/components/ui/card";
import { Badge } from "@web/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@web/components/ui/avatar";
import {
  Star,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "Leadership Development",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 150,
      image: "/placeholder.svg?height=80&width=80",
      badges: ["Top Rated", "Expert"],
    },
    {
      name: "Michael Chen",
      specialty: "Digital Transformation",
      rating: 4.8,
      reviews: 89,
      hourlyRate: 180,
      image: "/placeholder.svg?height=80&width=80",
      badges: ["Certified", "Enterprise"],
    },
    {
      name: "Emily Rodriguez",
      specialty: "Team Building",
      rating: 5.0,
      reviews: 156,
      hourlyRate: 120,
      image: "/placeholder.svg?height=80&width=80",
      badges: ["Top Rated", "Popular"],
    },
  ];

  const testimonials = [
    {
      quote:
        "Linkademy transformed our employee development program. The quality of trainers is exceptional.",
      author: "David Park",
      role: "HR Director",
      company: "TechCorp Solutions",
    },
    {
      quote:
        "We've seen a 40% improvement in team productivity after implementing training programs through this platform.",
      author: "Lisa Thompson",
      role: "Learning & Development Manager",
      company: "Global Industries",
    },
    {
      quote:
        "The platform makes it incredibly easy to find specialized trainers for our unique business needs.",
      author: "Robert Kim",
      role: "Chief People Officer",
      company: "Innovation Labs",
    },
  ];

  const clientLogos = [
    { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Google", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Amazon", logo: "/placeholder.svg?height=60&width=120" },
    { name: "IBM", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Oracle", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Salesforce", logo: "/placeholder.svg?height=60&width=120" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Linkademy
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/browse-trainers"
                className="text-gray-600 hover:text-gray-900"
              >
                Browse Trainers
              </Link>
              <Link
                href="/post-job"
                className="text-gray-600 hover:text-gray-900"
              >
                Post Training Job
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-600 hover:text-gray-900"
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900"
              >
                Pricing
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/browse-trainers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Browse Trainers
                </Link>
                <Link
                  href="/post-job"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Post Training Job
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-gray-600 hover:text-gray-900"
                >
                  How It Works
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="ghost" className="justify-start">
                    Sign In
                  </Button>
                  <Button className="justify-start">Get Started</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Trusted by 500+ Companies
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect with Expert Corporate Trainers
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your workforce with specialized training programs. Find
              certified trainers for leadership, digital skills, team building,
              and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Find Trainers
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-transparent"
              >
                Post Training Job
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Linkademy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make corporate training simple, effective, and results-driven
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vetted Experts</h3>
              <p className="text-gray-600">
                All trainers are thoroughly screened and certified professionals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Average 35% improvement in employee performance metrics
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Delivery</h3>
              <p className="text-gray-600">
                On-site, virtual, or hybrid training options available
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                100% satisfaction guarantee or your money back
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Trainers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top-Rated Trainers
            </h2>
            <p className="text-xl text-gray-600">
              Meet some of our highest-rated corporate training experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage
                      src={trainer.image || "/placeholder.svg"}
                      alt={trainer.name}
                    />
                    <AvatarFallback>
                      {trainer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{trainer.name}</CardTitle>
                  <CardDescription className="text-lg">
                    {trainer.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center items-center mb-3">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">{trainer.rating}</span>
                    <span className="ml-1 text-gray-600">
                      ({trainer.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {trainer.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} variant="secondary">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    ${trainer.hourlyRate}/hour
                  </p>
                  <Button className="w-full">View Profile</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Trainers
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from companies that have transformed their workforce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-blue-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that have already elevated their
            workforce with expert training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Sign Up as Company
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Join as Trainer
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Linkademy</h3>
              <p className="text-gray-400 mb-4">
                Connecting corporate firms with expert trainers to build better
                teams.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">For Companies</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Browse Trainers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Post Training Job
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Enterprise Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">For Trainers</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Join as Trainer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Find Training Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Trainer Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Linkademy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
