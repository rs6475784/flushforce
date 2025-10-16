import React, { useState, useEffect } from 'react';
import { Droplets, MapPin, Calendar, Smartphone, DollarSign, BarChart3, Zap, Users, Menu, X, ArrowRight, CheckCircle, Shield } from 'lucide-react';

export default function PumpForceLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Track Every Load",
      subtitle: "Customer Management That Doesn't Stink",
      description: "Remember when you forgot Mrs. Henderson's tank was overdue? Yeah, us neither—because PumpForce doesn't forget. Auto-schedules, service history, and reminders so you never miss a beat.",
      highlights: ["Never forget a pump date", "Auto-remind overdue customers", "Complete service history tracking"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Stop Driving in Circles",
      subtitle: "Smart Route Planning (Finally)",
      description: "Our AI plans routes so efficient, you'll actually get home for dinner. Color-coded map shows who's backing up (literally), and drag-and-drop lets you shuffle stops faster than your morning coffee kicks in.",
      highlights: ["Routes that don't suck", "Less gas, more cash", "Color-coded urgency (red = panic mode)"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Like You Give a Crap",
      subtitle: "Because You Actually Do",
      description: "Drag, drop, done. Visual calendar that shows you're booked solid (flex on your competitors). Recurring schedules mean you set it once and forget it—just like that porta-potty at the construction site.",
      highlights: ["Set it and forget it scheduling", "\"Due this month\" panic button", "Drag-and-drop (no spreadsheet nightmares)"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Even Your Drivers Will Use It",
      subtitle: "Mobile App (Idiot-Proof)",
      description: "Big buttons. Simple interface. Works offline when you're in the middle of nowhere pumping the Johnson farm. Take pics, mark complete, move on. Your drivers will actually thank you. Probably.",
      highlights: ["Works when cell service doesn't", "Big \"I'm Done\" button", "Photo proof you actually showed up"]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Get Paid (No Really)",
      subtitle: "Stop Chasing Checks",
      description: "Job done? Invoice sent. Payment link included. Customer clicks, you get paid. It's almost too easy. Auto-reminders for deadbeats who \"forgot\" to pay. Again.",
      highlights: ["Auto-invoice on job completion", "Click-to-pay links (so easy it's scary)", "Shame reminders for late payers"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Know Your Numbers",
      subtitle: "Real Numbers, Real Time",
      description: "Dashboard shows exactly how much you're crushing it (or not). Revenue, jobs completed, who owes you money. No more \"I think we did good this month\"—you'll KNOW you did.",
      highlights: ["Live revenue counter (cha-ching)", "See who's dodging your calls", "Driver leaderboards (for bragging rights)"]
    }
  ];

  const pricingTiers = [
    {
      name: "Porta-Potty",
      tagline: "Just Getting Your Crap Together",
      price: "$79",
      period: "/month",
      features: [
        "Up to 500 customers (that's a lot of tanks)",
        "2 driver accounts",
        "Basic route planning (better than guessing)",
        "Mobile app (works on flip phones, probably)",
        "Email invoicing",
        "Support (we'll actually answer)"
      ],
      popular: false
    },
    {
      name: "Honey Wagon",
      tagline: "The Full-Service Experience",
      price: "$149",
      period: "/month",
      features: [
        "Unlimited customers (go crazy)",
        "5 driver accounts",
        "AI route optimization (yes, really)",
        "Payment processing (cha-ching)",
        "SMS reminders (automated nagging)",
        "Priority support (we like you best)",
        "Custom branding (put your logo on it)",
        "QuickBooks sync (for your accountant)"
      ],
      popular: true
    },
    {
      name: "Vacuum Commander",
      tagline: "For When You're Running an Empire",
      price: "Let's Talk",
      period: "",
      features: [
        "Everything in Honey Wagon",
        "Unlimited drivers (hire the whole town)",
        "Multi-location support (regional domination)",
        "API access (for the nerds)",
        "Custom integrations (we'll build it)",
        "Personal account manager (your new best friend)",
        "White-label options (rebrand it as yours)",
        "We'll probably buy you lunch"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "I used to spend 3 hours every Sunday planning routes. Now I spend 3 minutes. What do I do with the other 2 hours and 57 minutes? Literally anything else.",
      name: "Dave M.",
      company: "Dave's Septic Service",
      metric: "177min saved weekly"
    },
    {
      quote: "My drivers used to call me 47 times a day asking 'where next?' Now? Zero calls. I didn't know silence could be this beautiful.",
      name: "Sarah K.",
      company: "Crystal Clear Pumping",
      metric: "47 → 0 daily interruptions"
    },
    {
      quote: "The automated invoicing alone pays for PumpForce. Everything else is just gravy. Delicious, profitable gravy.",
      name: "Mike T.",
      company: "No. 1 Septic Solutions",
      metric: "95% faster payment collection"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Droplets className="w-8 h-8 text-blue-400" />
                <Zap className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                PUMP<span className="text-blue-400">FORCE</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-blue-400 transition font-medium">Features</a>
              <a href="#pricing" className="hover:text-blue-400 transition font-medium">Pricing</a>
              <a href="#testimonials" className="hover:text-blue-400 transition font-medium">War Stories</a>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold transition shadow-lg shadow-blue-500/30">
                Reserve Your Spot
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block hover:text-blue-400 font-medium">Features</a>
              <a href="#pricing" className="block hover:text-blue-400 font-medium">Pricing</a>
              <a href="#testimonials" className="block hover:text-blue-400 font-medium">War Stories</a>
              <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold shadow-lg shadow-blue-500/30">
                Reserve Your Spot
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl">💧</div>
          <div className="absolute top-40 right-20 text-5xl">🚽</div>
          <div className="absolute bottom-20 left-1/4 text-4xl">🚛</div>
          <div className="absolute top-60 right-1/3 text-5xl">💸</div>
          <div className="absolute bottom-40 right-10 text-4xl">⚡</div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
            <span className="text-blue-300 font-semibold">💧 Finally, Software That Doesn't Stink</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Built for Septic Pumpers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Who Are Done Dealing With Crap Software
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Number 1 software for the Number 2 business. Schedule jobs, route trucks, send invoices—all without stepping in it.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 px-6 py-4 rounded-lg bg-slate-800 border-2 border-slate-700 focus:border-blue-500 focus:outline-none text-white placeholder-slate-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl shadow-blue-500/30 whitespace-nowrap">
                Join Waitlist
              </button>
            </div>
            <p className="text-slate-400 mt-4 text-sm">
              Be first in line when we launch • We promise not to spam you (we have crap to build)
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">3 hrs</div>
            <div className="text-slate-400 text-sm">Saved Per Week<br/>(that's a lot of beer)</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
            <div className="text-slate-400 text-sm">More Jobs Per Day<br/>(cha-ching)</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">$0</div>
            <div className="text-slate-400 text-sm">Forgotten Appointments<br/>(for real)</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
            <div className="text-slate-400 text-sm">Less Stress<br/>(priceless)</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
              <span className="text-blue-300 font-semibold">🚽 THE GOOD STUFF</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> None of the Crap</span>
            </h2>
            <p className="text-xl text-slate-400">Seriously, we built this for people who actually pump septic tanks</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:scale-105 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-blue-400 text-sm font-semibold mb-3">{feature.subtitle}</p>
                  <p className="text-slate-300 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
              <span className="text-blue-300 font-semibold">💬 WAR STORIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Pumpers,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Real Results</span>
            </h2>
            <p className="text-xl text-slate-400">Don't take our word for it—these folks deal with actual crap all day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
                <div className="text-6xl mb-4 opacity-20">💧</div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.company}</p>
                  <p className="text-xs text-blue-400 mt-2 font-semibold">{testimonial.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
              <span className="text-blue-300 font-semibold">💸 PRICING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Level of Awesome</span>
            </h2>
            <p className="text-xl text-slate-400">30-day free trial • No credit card • Seriously, just try it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border-2 transition-all hover:scale-105 ${
                  tier.popular ? 'border-blue-500 shadow-2xl shadow-blue-500/20' : 'border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR (obviously)
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-blue-400 text-sm font-semibold mb-4">{tier.tagline}</p>
                  <div className="flex items-end justify-center">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    <span className="text-slate-400 ml-2">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-bold transition ${
                  tier.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30' 
                    : 'border-2 border-blue-500 hover:bg-blue-500/10'
                }`}>
                  Join Waitlist
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="text-9xl absolute top-10 left-10">💧</div>
          <div className="text-7xl absolute bottom-10 right-10">🚀</div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Get Left in the Tank
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the waitlist and be among the first septic pros to experience software that actually works. 
            Early adopters get <span className="font-bold text-white">50% off for life</span>. (Yeah, for life.)
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur border-2 border-white/20 focus:border-white focus:outline-none text-white placeholder-white/50"
              />
              <button className="bg-white text-blue-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl whitespace-nowrap">
                Get Early Access
              </button>
            </div>
            <p className="text-blue-200 mt-4 text-sm">
              No spam, no crap—just updates on when we launch • 847 pumpers already in line
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Droplets className="w-7 h-7 text-blue-400" />
                  <Zap className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1" />
                </div>
                <span className="text-xl font-bold">
                  PUMP<span className="text-blue-400">FORCE</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Making septic pumping businesses run smoother since... well, very recently actually.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-blue-400">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Features (the good stuff)</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Pricing (won't break the bank)</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Demo (just watch it already)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">About (we're cool, promise)</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Contact (say hi)</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Support (we actually respond)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-blue-400">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Privacy (we don't sell your data)</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Terms (the boring stuff)</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            © 2025 PumpForce. All rights reserved. Built by people who understand that septic pumping is a noble profession. 💧⚡
          </div>
        </div>
      </footer>
    </div>
  );
}
