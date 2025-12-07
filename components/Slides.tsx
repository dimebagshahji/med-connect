import React from 'react';
import { SlideWrapper } from './SlideWrapper';
import { 
  AlertTriangle, DollarSign, Clock, CheckCircle, Shield, 
  Globe, Activity, TrendingUp, User, Briefcase, Mail, Phone, Layout, 
  ArrowRight, MapPin, Search, Check, Star, Zap, Layers, BarChart3, Plane,
  Smartphone, Cpu, X, Users, Target, Calendar, Award, Rocket, Building,
  FileText, PieChart as PieChartIcon, ArrowUpRight
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell,
  PieChart, Pie, Legend, LineChart, Line, AreaChart, Area
} from 'recharts';

// --- Shared Components ---
const BlobBackground = ({ theme = 'light' }: { theme?: 'light' | 'dark' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${theme === 'dark' ? 'bg-primary' : 'bg-offwhite'}`}>
    {/* Subtle Dot Grid */}
    <div 
      className="absolute inset-0" 
      style={{ 
        backgroundImage: theme === 'dark' 
          ? 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)' 
          : 'radial-gradient(#006D77 1px, transparent 1px)', 
        backgroundSize: '40px 40px', 
        opacity: theme === 'dark' ? 0.1 : 0.03 
      }} 
    />
    {/* Soft Gradients */}
    <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 mix-blend-multiply animate-pulse-slow ${theme === 'dark' ? 'bg-secondary/20' : 'bg-secondary/15'}`} />
    <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 mix-blend-multiply animate-pulse-slow ${theme === 'dark' ? 'bg-accent/20' : 'bg-accent/10'}`} style={{ animationDelay: '2s' }} />
  </div>
);

// --- SLIDE 1: Title ---
export const Slide1_Title: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <SlideWrapper isActive={isActive} className="bg-primary relative">
    {/* Abstract Illustration Background */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full border-[1px] border-white/5 animate-spin-slow" style={{ animationDuration: '60s' }} />
      <div className="absolute top-[-15%] right-[-5%] w-[60vw] h-[60vw] rounded-full border-[1px] border-white/10" />
      <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-accent rounded-full blur-[120px] opacity-20" />
      
      <Globe className="absolute top-1/2 right-[-10%] transform -translate-y-1/2 text-white/5 w-[800px] h-[800px]" strokeWidth={0.5} />
    </div>
    
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-center px-12 md:px-24 max-w-7xl mx-auto py-20">
      <div className="flex items-center gap-3 mb-8 text-secondary animate-fade-in-up">
          <Activity size={32} strokeWidth={1.5} />
          <span className="font-header font-semibold text-lg tracking-[0.2em]">MED CONNECT</span>
      </div>
      
      <h1 className="font-header font-bold text-6xl md:text-8xl text-white mb-8 leading-tight tracking-tight animate-fade-in-up-delay-1">
        Healthcare <br/>
        <span className="text-secondary/90">Beyond Borders.</span>
      </h1>
      
      <p className="font-sans text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed animate-fade-in-up-delay-2">
        Simplifying global medical travel with transparency, trust, and technology.
      </p>

      <div className="absolute bottom-12 left-12 md:left-24 text-white/40 text-sm font-sans tracking-wider flex gap-8 animate-fade-in">
        <span>Med Connect Inc.</span>
        <span>Investor Deck 2025</span>
      </div>
    </div>
  </SlideWrapper>
);

// --- SLIDE 2: Problem ---
export const Slide2_Problem: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <SlideWrapper isActive={isActive} className="bg-white p-6 md:p-12 relative flex items-center">
    {/* Tech Background - Light Mode */}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Light background */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Teal glow spots (Subtle) */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />

        {/* Main Illustration SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
                <pattern id="medical-grid-light" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#006D77" strokeOpacity="0.1" strokeWidth="1"/>
                </pattern>
            </defs>

            {/* Background Grid */}
            <rect width="100%" height="100%" fill="url(#medical-grid-light)" />

            {/* EKG Line - Teal */}
            <path d="M0,400 L100,400 L120,350 L140,450 L160,400 L200,400 L220,320 L240,480 L260,400 L400,400 L420,350 L440,450 L460,400 L600,400 L620,300 L650,500 L680,400 L1200,400" 
                  fill="none" stroke="#006D77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="animate-pulse" style={{animationDuration: '3s'}}>
                  <animate attributeName="stroke-dasharray" from="0, 3000" to="3000, 0" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
            </path>
        </svg>
    </div>

    <div className="max-w-7xl w-full relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center my-auto">
      
      {/* Left: Headline */}
      <div className="lg:w-5/12 text-left animate-fade-in-up">
         {/* SYSTEM FAILURE TAG - RED */}
         <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 text-red-600 rounded-full text-xs font-mono uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(220,38,38,0.1)]">
            <Activity size={12} className="animate-pulse" />
            System Failure
         </div>
         <h2 className="font-header text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-[0.95] tracking-tight">
            Global <br/> Healthcare is <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
               Critical.
            </span>
         </h2>
         <p className="text-xl text-gray-500 font-light leading-relaxed mb-8 pl-1 border-l-2 border-red-500/50">
            Patients are trapped in a system that is <strong className="text-gray-900 font-medium">expensive</strong>, <strong className="text-gray-900 font-medium">opaque</strong>.
         </p>
      </div>

      {/* Right: The 3 Pain Points (Light Cards) */}
      <div className="lg:w-7/12 flex flex-col gap-6 w-full">
         
         {/* Card 1: Cost */}
         <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-red-300 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 w-full animate-fade-in-up-delay-1 group shadow-sm">
            <div className="flex items-start gap-6 relative z-10">
               <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 text-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <DollarSign size={28} />
               </div>
               <div>
                  <h3 className="font-header text-xl font-bold text-gray-900 mb-2 group-hover:text-red-500 transition-colors">The Cost Crisis</h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                     US treatments cost <span className="font-bold text-gray-900 bg-red-50 px-1.5 py-0.5 rounded border border-red-100">3–8x more</span> than comparable global markets.
                  </p>
               </div>
            </div>
         </div>

         {/* Card 2: Access */}
         <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 w-full lg:ml-8 lg:w-[calc(100%-2rem)] animate-fade-in-up-delay-2 group shadow-sm">
            <div className="flex items-start gap-6 relative z-10">
               <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 text-orange-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Clock size={28} />
               </div>
               <div>
                  <h3 className="font-header text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">The Access Gap</h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                     High deductibles and <span className="font-bold text-gray-900 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100">6+ month wait times</span> delay essential care.
                  </p>
               </div>
            </div>
         </div>

         {/* Card 3: Trust */}
         <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 w-full lg:ml-16 lg:w-[calc(100%-4rem)] animate-fade-in-up-delay-3 group shadow-sm">
            <div className="flex items-start gap-6 relative z-10">
               <div className="w-14 h-14 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Shield size={28} />
               </div>
               <div>
                  <h3 className="font-header text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">The Trust Deficit</h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                     Patients lack a reliable way to verify international safety standards or doctor credentials.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  </SlideWrapper>
);

// --- SLIDE 3: Solution ---
export const Slide3_Solution: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <SlideWrapper isActive={isActive} className="bg-white relative flex items-center justify-center p-8 md:p-0">
    {/* Subtle Background Elements */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
    
    {/* Grid Pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#006D77 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

    <div className="max-w-7xl w-full min-h-[500px] flex flex-col md:flex-row items-center relative z-10 px-8 md:px-12 my-auto">
      
      {/* Left: Content */}
      <div className="md:w-1/2 flex flex-col justify-center h-full pr-0 md:pr-16 animate-fade-in-up mb-12 md:mb-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest w-fit mb-6">
          <Star size={12} fill="currentColor" />
          The Solution
        </div>
        
        <h2 className="font-header text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          The End-to-End <br/>
          <span className="text-primary">Medical Travel Ecosystem</span>
        </h2>
        
        <p className="text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-lg">
          We combine accredited care, travel logistics, and transparent pricing into one seamless experience.
        </p>

        <div className="space-y-6">
          {[
             { title: "Curated Network", desc: "Top 1% facilities only.", icon: Shield },
             { title: "Transparent Pricing", desc: "Bundled quotes. No hidden fees.", icon: DollarSign },
             { title: "Concierge Logistics", desc: "Visa, flights & recovery handling.", icon: Briefcase }
          ].map((item, idx) => (
             <div key={idx} className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-offwhite border border-gray-100 flex items-center justify-center mr-5 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                   <item.icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                   <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{item.title}</h3>
                   <p className="text-sm text-gray-500 leading-snug mt-1">{item.desc}</p>
                </div>
             </div>
          ))}
        </div>
      </div>

      {/* Right: Modern Mobile App Mockup */}
      <div className="md:w-1/2 h-full flex items-center justify-center relative animate-fade-in-up-delay-2 perspective-1000 py-12 max-[480px]:hidden">
         {/* Background Decoration */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] border border-gray-100 rounded-full opacity-50 animate-pulse-slow"></div>
            <div className="w-[350px] h-[350px] border border-gray-100 rounded-full opacity-50"></div>
         </div>

         {/* Phone Frame */}
         <div className="relative w-[320px] h-[650px] bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[8px] border-gray-900 overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-20"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full bg-gray-50 pt-10 flex flex-col">
               
               {/* Header */}
               <div className="px-6 mb-6 flex justify-between items-center">
                  <div>
                     <div className="text-xs text-gray-400">Welcome back</div>
                     <div className="text-xl font-bold text-gray-900">Sarah</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                     <img src="https://ui-avatars.com/api/?name=Sarah&background=random" alt="Profile" />
                  </div>
               </div>

               {/* Search */}
               <div className="px-6 mb-6">
                  <div className="bg-white p-3 rounded-2xl shadow-sm flex items-center gap-3 border border-gray-100">
                     <Search size={18} className="text-primary" />
                     <span className="text-sm text-gray-400">Search treatments...</span>
                  </div>
               </div>

               {/* Categories */}
               <div className="pl-6 mb-6 overflow-hidden">
                  <div className="flex gap-3">
                     {['Cardiac', 'Dental', 'Ortho', 'Cosmetic'].map((cat, i) => (
                        <div key={i} className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white text-gray-500 border border-gray-100'}`}>
                           {cat}
                        </div>
                     ))}
                  </div>
               </div>

               {/* Featured Card */}
               <div className="px-6 mb-6">
                  <div className="bg-white p-4 rounded-3xl shadow-xl shadow-gray-100 border border-gray-50 relative overflow-hidden group">
                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-green-600 flex items-center gap-1 shadow-sm z-10">
                        <Shield size={10} /> VERIFIED
                     </div>
                     
                     <div className="h-32 bg-gray-200 rounded-2xl mb-4 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hospital" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-white">
                           <div className="text-xs font-medium opacity-90">New Delhi, India</div>
                           <div className="font-bold text-sm">Apollo Heart Institute</div>
                        </div>
                     </div>

                     <div className="flex justify-between items-end mb-4">
                        <div>
                           <div className="text-xs text-gray-400 mb-1">Total Package</div>
                           <div className="text-lg font-bold text-primary">$5,200</div>
                           <div className="text-[10px] text-gray-400 line-through">US Price: $45,000</div>
                        </div>
                        <div className="text-right">
                           <div className="flex items-center gap-1 mb-1 justify-end">
                              <Star size={12} className="text-yellow-400 fill-yellow-400" />
                              <span className="text-xs font-bold text-gray-700">4.9</span>
                           </div>
                           <div className="text-[10px] text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                              Save 88%
                           </div>
                        </div>
                     </div>

                     <button className="w-full py-3 bg-gray-900 text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition-colors">
                        View Package Details
                     </button>
                  </div>
               </div>
               
               {/* Bottom Nav Placeholder */}
               <div className="mt-auto bg-white border-t border-gray-50 p-4 flex justify-around text-gray-300">
                  <div className="text-primary"><Layout size={20} /></div>
                  <div><Search size={20} /></div>
                  <div><User size={20} /></div>
               </div>

            </div>
         </div>
         
         {/* Floating Elements around phone */}
         <div className="absolute top-[20%] right-[10%] bg-white p-3 rounded-2xl shadow-lg animate-bounce z-20 flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
               <Check size={16} />
            </div>
            <div>
               <div className="text-[10px] text-gray-400 font-bold uppercase">Visa Status</div>
               <div className="text-xs font-bold text-gray-900">Approved</div>
            </div>
         </div>

      </div>
    </div>
  </SlideWrapper>
);

// --- SLIDE 4: Market Opportunity ---
export const Slide4_Market: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const data = [
    { name: '2024', value: 21.2 },
    { name: '2030', value: 45 },
  ];

  // Precise coordinates for 1000x500 map viewbox
  const coords = {
    usa: { x: 260, y: 160, label: "USA" },
    mexico: { x: 255, y: 210, label: "Mexico" },
    india: { x: 660, y: 210, label: "India" },
  };

  return (
    <SlideWrapper isActive={isActive} className="bg-white p-6 md:p-12 relative flex flex-col">
      {/**<div className="absolute inset-0 z-0 bg-offwhite/50 pointer-events-none"></div>**/}
      
      {/* Header */}
      <div className="relative z-20 max-w-7xl mx-auto w-full mb-4">
         <h2 className="font-header text-4xl md:text-5xl font-bold text-gray-900 mb-2">Market & Corridor Strategy.</h2>
         <p className="text-xl text-gray-500 font-light">Targeting high-volume corridors for maximum impact.</p>
      </div>

      <div className="flex-1 relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 min-h-[500px] my-auto">
        
        {/* Left: Stats Card (Floating) */}
        <div className="lg:absolute lg:top-8 lg:left-0 z-20 lg:w-72 animate-fade-in-up">
           <div className="bg-white/90 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-xl shadow-gray-200/50">
             <div className="flex gap-8 mb-6">
               <div>
                 <p className="text-3xl font-light text-primary mb-1">$21.2B</p>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">TAM 2024</p>
               </div>
               <div>
                 <p className="text-3xl font-light text-accent mb-1">12%</p>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">CAGR</p>
               </div>
             </div>
             <div className="h-32 w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                   <XAxis dataKey="name" tick={{fill: '#9CA3AF', fontSize: 10}} axisLine={false} tickLine={false} />
                   <YAxis tickFormatter={(val) => `$${val}B`} tick={{fill: '#9CA3AF', fontSize: 10}} axisLine={false} tickLine={false} />
                   <Bar dataKey="value" radius={[4, 4, 4, 4]} barSize={40}>
                    <Cell fill="#83C5BE" />
                    <Cell fill="#006D77" />
                   </Bar>
                 </BarChart>
               </ResponsiveContainer>
             </div>
           </div>
        </div>

        {/* Center: Map Visualization */}
        <div className="w-full h-full min-h-[400px] relative rounded-3xl overflow-visible animate-fade-in">
           
           <svg className="w-full drop-shadow-2xl" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
              <defs>
                 <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E29578" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#E29578" stopOpacity="1" />
                    <stop offset="100%" stopColor="#E29578" stopOpacity="0.2" />
                 </linearGradient>
                 <linearGradient id="routeGradientIndia" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#006D77" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#006D77" stopOpacity="1" />
                    <stop offset="100%" stopColor="#006D77" stopOpacity="0.2" />
                 </linearGradient>
                 <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
                 <clipPath id="mapClip">
                    <rect width="1000" height="500" />
                 </clipPath>
              </defs>
              
              {/* Realistic World Map Silhouettes */}
              <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2560px-World_map_-_low_resolution.svg.png" x="0" y="0" width="1000" height="500" opacity="0.2" filter="grayscale(100%)" />

              {/* Radar Scan Effect */}
              <circle cx="260" cy="160" r="0" fill="none" stroke="#006D77" strokeWidth="1" opacity="0.5">
                <animate attributeName="r" from="0" to="400" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="4s" repeatCount="indefinite" />
              </circle>

              {/* Route: USA -> Mexico (Nearshore) */}
              <g>
                 <path id="route-mexico" 
                       d={`M${coords.usa.x},${coords.usa.y} Q${coords.usa.x - 20},${(coords.usa.y + coords.mexico.y)/2} ${coords.mexico.x},${coords.mexico.y}`} 
                       fill="none" stroke="url(#routeGradient)" strokeWidth="3" strokeDasharray="8 4" strokeLinecap="round" opacity="0.8">
                     <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                 </path>
                 {/* Moving Plane */}
                 <g>
                    <Plane size={20} fill="#E29578" stroke="white" strokeWidth={1} transform="rotate(90)">
                        <animateMotion dur="2.5s" repeatCount="indefinite" rotate="auto">
                           <mpath href="#route-mexico"/>
                        </animateMotion>
                    </Plane>
                 </g>
              </g>

              {/* Route: USA -> India (Offshore) */}
              <g>
                 {/* Curve going via Atlantic/Europe */}
                 <path id="route-india"
                       d={`M${coords.usa.x},${coords.usa.y} Q500,80 ${coords.india.x},${coords.india.y}`} 
                       fill="none" stroke="url(#routeGradientIndia)" strokeWidth="3" strokeDasharray="8 4" strokeLinecap="round" opacity="0.8">
                     <animate attributeName="stroke-dashoffset" from="200" to="0" dur="4s" repeatCount="indefinite" />
                 </path>
                 {/* Moving Plane */}
                 <g>
                    <Plane size={20} fill="#006D77" stroke="white" strokeWidth={1} transform="rotate(90)">
                        <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                           <mpath href="#route-india"/>
                        </animateMotion>
                    </Plane>
                 </g>
              </g>

              {/* Location Markers */}
              {Object.entries(coords).map(([key, val]) => (
                 <g key={key}>
                    <circle cx={val.x} cy={val.y} r="5" fill={key === 'usa' ? '#0F172A' : (key === 'mexico' ? '#E29578' : '#006D77')} className="drop-shadow-md z-10" />
                    {/* Ripple */}
                    <circle cx={val.x} cy={val.y} r="10" fill="none" stroke={key === 'usa' ? '#0F172A' : (key === 'mexico' ? '#E29578' : '#006D77')} strokeWidth="1" opacity="0.5">
                       <animate attributeName="r" from="5" to="25" dur="2s" repeatCount="indefinite" />
                       <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x={val.x} y={val.y + 25} textAnchor="middle" fontSize="12" fontWeight="800" fill="#334155" style={{textShadow: '0 2px 4px white', fontFamily: 'Montserrat'}}>
                       {val.label}
                    </text>
                 </g>
              ))}

              {/* HUD Style Labels for Strategy */}
              {/* Nearshore Label */}
              <g transform="translate(60, 250)">
                 <path d="M 170, -20 L 190, -20" stroke="#E29578" strokeWidth="1" strokeDasharray="2 2" />
                 <rect x="0" y="0" width="170" height="60" rx="8" fill="white" stroke="#E29578" strokeWidth="2" className="drop-shadow-lg" />
                 <text x="15" y="22" fontSize="12" fontWeight="bold" fill="#E29578" style={{fontFamily: 'Montserrat'}}>NEARSHORE (Mexico)</text>
                 <text x="15" y="40" fontSize="10" fill="#64748B">Dental, Bariatric, Cosmetic</text>
                 <text x="15" y="52" fontSize="10" fill="#000" fontWeight="bold">Avg Savings: 60%</text>
              </g>

              {/* Offshore Label */}
              <g transform="translate(680, 80)">
                 <path d="M 10, 60 L 10, 110" stroke="#006D77" strokeWidth="1" strokeDasharray="2 2" />
                 <rect x="0" y="0" width="170" height="60" rx="8" fill="white" stroke="#006D77" strokeWidth="2" className="drop-shadow-lg" />
                 <text x="15" y="22" fontSize="12" fontWeight="bold" fill="#006D77" style={{fontFamily: 'Montserrat'}}>OFFSHORE (India)</text>
                 <text x="15" y="40" fontSize="10" fill="#64748B">Cardiac, Ortho, Oncology</text>
                 <text x="15" y="52" fontSize="10" fill="#000" fontWeight="bold">Avg Savings: 85%</text>
              </g>

           </svg>
        </div>
      </div>
    </SlideWrapper>
  );
};

// --- SLIDE 5: Why Now (Redesigned) ---
export const Slide5_WhyNow: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <SlideWrapper isActive={isActive} className="bg-white flex flex-col relative">
     {/* Background - Clean & Professional */}
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-50 via-white to-white z-0 pointer-events-none"></div>
     <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

     <div className="relative z-10 w-full min-h-screen max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 gap-12 my-auto">
        
        {/* Left Column: Narrative */}
        <div className="lg:w-5/12 flex flex-col justify-center items-start text-left animate-fade-in-up">
           <div className="flex items-center gap-2 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Market Timing</span>
           </div>
           
           <h2 className="font-header text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8">
              The Perfect <br/> 
              <span className="text-primary">Convergence.</span>
           </h2>
           
           <p className="text-xl text-gray-500 font-light leading-relaxed mb-10">
              Healthcare isn't just changing; it's being forced to evolve by three unstoppable forces.
           </p>

           <div className="space-y-6 w-full">
              <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                    <TrendingUp size={24} />
                 </div>
                 <div>
                    <div className="font-bold text-gray-900">Economic Pressure</div>
                    <div className="text-sm text-gray-500">Costs in the US are at an all-time high.</div>
                 </div>
              </div>

              <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <Smartphone size={24} />
                 </div>
                 <div>
                    <div className="font-bold text-gray-900">Digital Trust</div>
                    <div className="text-sm text-gray-500">Post-COVID comfort with remote care.</div>
                 </div>
              </div>

              <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                 </div>
                 <div>
                    <div className="font-bold text-gray-900">AI Readiness</div>
                    <div className="text-sm text-gray-500">Technology now allows total transparency.</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: The Visual Core */}
        <div className="max-[480px]:hidden lg:w-7/12 w-full h-[500px] relative flex items-center justify-center animate-fade-in delay-200">
            {/* Center Circle */}
            <div className="relative z-20 w-40 h-40 bg-white rounded-full shadow-[0_20px_50px_rgba(0,109,119,0.3)] flex flex-col items-center justify-center border-[6px] border-gray-50 animate-fade-in-up">
               <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
               <Activity size={40} className="text-primary mb-2" />
               <div className="text-xs font-bold text-gray-900 uppercase tracking-wider">Med Connect</div>
            </div>

            {/* Connecting Rings/Orbit */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-[300px] h-[300px] border border-dashed border-gray-300 rounded-full opacity-50 animate-spin-slow" style={{ animationDuration: '60s' }}></div>
               <div className="w-[450px] h-[450px] border border-gray-100 rounded-full opacity-50"></div>
            </div>

            {/* Floating Cards positioned absolutely */}
            {/* Card 1: Top Right */}
            <div className="absolute top-[10%] right-[10%] bg-white p-5 rounded-2xl shadow-xl shadow-red-100/50 border border-red-100 w-56 animate-fade-in-up-delay-1 hover:-translate-y-2 transition-transform cursor-default">
               <div className="text-xs font-bold text-red-500 uppercase mb-2">Market Force</div>
               <div className="text-2xl font-bold text-gray-900 mb-1">400%</div>
               <div className="text-xs text-gray-500 leading-snug">Price difference vs. global alternatives.</div>
               <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center shadow-lg">
                  <TrendingUp size={16} />
               </div>
            </div>

            {/* Card 2: Left */}
            <div className="absolute top-[40%] left-[0%] bg-white p-5 rounded-2xl shadow-xl shadow-blue-100/50 border border-blue-100 w-56 animate-fade-in-up-delay-2 hover:-translate-y-2 transition-transform cursor-default z-30">
               <div className="text-xs font-bold text-blue-500 uppercase mb-2">Behavior</div>
               <div className="text-2xl font-bold text-gray-900 mb-1">72%</div>
               <div className="text-xs text-gray-500 leading-snug">Patients willing to travel for care.</div>
               <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center shadow-lg">
                  <Smartphone size={16} />
               </div>
            </div>

            {/* Card 3: Bottom Right */}
            <div className="absolute bottom-[10%] right-[15%] bg-white p-5 rounded-2xl shadow-xl shadow-amber-100/50 border border-amber-100 w-56 animate-fade-in-up-delay-3 hover:-translate-y-2 transition-transform cursor-default">
               <div className="text-xs font-bold text-amber-500 uppercase mb-2">Technology</div>
               <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
               <div className="text-xs text-gray-500 leading-snug">Price & outcome transparency via AI.</div>
               <div className="absolute -top-3 -left-3 w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center shadow-lg">
                  <Zap size={16} />
               </div>
            </div>

            {/* Connecting Lines SVG */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
               {/* Center to Top Right */}
               <path d="M 50% 50% Q 65% 35% 75% 25%" fill="none" stroke="#EF4444" strokeWidth="2" strokeOpacity="0.1" strokeDasharray="4 4" />
               {/* Center to Left */}
               <path d="M 50% 50% Q 35% 50% 20% 50%" fill="none" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.1" strokeDasharray="4 4" />
               {/* Center to Bottom Right */}
               <path d="M 50% 50% Q 65% 75% 70% 80%" fill="none" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.1" strokeDasharray="4 4" />
             </svg>
        </div>
     </div>
  </SlideWrapper>
);

// --- SLIDE 6: Product Overview ---
export const Slide6_Product: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <SlideWrapper isActive={isActive} className="bg-offwhite p-12 md:p-16 flex flex-col">
    {/**<BlobBackground />**/}
    <div className="text-center mb-16 relative z-10 animate-fade-in-up mt-12 md:mt-0">
      <h2 className="font-header text-4xl font-bold text-primary mb-2">How It Works</h2>
      <p className="text-gray-500">From search to surgery in 3 simple steps</p>
    </div>
    
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full items-start relative z-10 my-auto pb-12 md:pb-0">
      
      {/* Step 1 */}
      <div className="flex flex-col gap-6 group animate-fade-in-up-delay-1">
        <div className="text-center px-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">Search</h3>
          <p className="text-sm text-gray-500 font-light">Filter by treatment, budget, or destination.</p>
        </div>
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-gray-200/50 h-[317px] border border-gray-100 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
           {/* Minimal UI: Search */}
           <div className="w-full h-12 bg-gray-50 rounded-2xl mb-6 flex items-center px-4 border border-gray-100">
             <Search size={16} className="text-gray-400 mr-3" />
             <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
           </div>
           <div className="space-y-3">
             {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-3 items-center p-3 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gray-100"></div>
                  <div className="flex-1">
                     <div className="h-2 w-20 bg-gray-200 rounded-full mb-2"></div>
                     <div className="h-1.5 w-12 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
             ))}
           </div>
           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
        </div>
        
      </div>

      {/* Step 2 */}
      <div className="flex flex-col gap-6 group animate-fade-in-up-delay-2">
        <div className="text-center px-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">Compare</h3>
          <p className="text-sm text-gray-500 font-light">View credentials, accreditation, and total cost.</p>
        </div>
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-gray-200/50 h-[317px] border border-gray-100 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
           {/* Minimal UI: Compare */}
           <div className="flex gap-2 mb-6">
              <div className="flex-1 bg-primary text-white rounded-2xl p-4 shadow-lg shadow-primary/20">
                 <div className="h-10 w-10 rounded-full bg-white/20 mb-3"></div>
                 <div className="h-2 w-16 bg-white/40 rounded-full mb-2"></div>
                 <div className="h-3 w-10 bg-white rounded-full"></div>
              </div>
              <div className="flex-1 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                 <div className="h-10 w-10 rounded-full bg-gray-200 mb-3"></div>
                 <div className="h-2 w-16 bg-gray-300 rounded-full mb-2"></div>
                 <div className="h-3 w-10 bg-gray-800 rounded-full"></div>
              </div>
           </div>
           <div className="w-full bg-secondary/10 p-4 rounded-2xl">
             <div className="flex justify-between items-center mb-3">
               <div className="h-2 w-20 bg-secondary/40 rounded-full"></div>
               <div className="h-2 w-8 bg-secondary/40 rounded-full"></div>
             </div>
             <div className="space-y-1.5">
               <div className="h-1.5 w-full bg-secondary/20 rounded-full"></div>
               <div className="h-1.5 w-5/6 bg-secondary/20 rounded-full"></div>
             </div>
           </div>
        </div>
        
      </div>

      {/* Step 3 */}
      <div className="flex flex-col gap-6 group animate-fade-in-up-delay-3">
        <div className="text-center px-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">Book</h3>
          <p className="text-sm text-gray-500 font-light">Secure appointment, flights, and hotel instantly.</p>
        </div>
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-gray-200/50 h-[317px] border border-gray-100 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
           {/* Minimal UI: Book */}
           <div className="h-full flex flex-col items-center justify-center text-center">
             <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6 animate-bounce">
               <Check size={40} className="text-green-500" />
             </div>
             <div className="h-3 w-32 bg-gray-800 rounded-full mb-3"></div>
             <div className="h-2 w-20 bg-gray-300 rounded-full mb-8"></div>
             
             <div className="w-full bg-gray-50 rounded-2xl p-4 flex items-center gap-3 border border-gray-100">
               <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-300">
                  <Briefcase size={16} />
               </div>
               <div className="flex-1 text-left">
                  <div className="h-2 w-20 bg-gray-800 rounded-full mb-1.5"></div>
                  <div className="h-1.5 w-12 bg-gray-400 rounded-full"></div>
               </div>
             </div>
           </div>
        </div>
        
      </div>
    </div>
  </SlideWrapper>
);

// --- SLIDE 7: Competition ---
export const Slide7_Competition: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <SlideWrapper isActive={isActive} className="bg-white p-6 md:p-12 relative flex flex-col items-center justify-center">
    <BlobBackground />
    <div className="max-w-7xl w-full relative z-10 animate-fade-in-up my-auto">
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-gray-100 text-gray-600 text-xs font-bold tracking-widest uppercase">
          Competitive Landscape
        </div>
        <h2 className="font-header text-4xl md:text-5xl font-bold text-gray-900">Why We Win</h2>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-4 bg-gray-50/50 border-b border-gray-100 p-6 text-sm font-bold text-gray-400 uppercase tracking-wider">
          <div className="col-span-1"></div>
          <div className="col-span-1 text-center text-primary">Med Connect</div>
          <div className="col-span-1 text-center">Agencies</div>
          <div className="col-span-1 text-center">Direct Booking</div>
        </div>
        {[
          { feature: "Verified Accreditation", medConnect: true, agency: "Mixed", direct: false },
          { feature: "Transparent Pricing", medConnect: true, agency: "Hidden Fees", direct: false },
          { feature: "Instant Booking", medConnect: true, agency: false, direct: false },
          { feature: "Post-Op Insurance", medConnect: true, agency: false, direct: false },
        ].map((row, idx) => (
          <div key={idx} className="grid grid-cols-4 items-center p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
            <div className="col-span-1 font-bold text-gray-900">{row.feature}</div>
            <div className="col-span-1 flex justify-center">
              {row.medConnect === true ? (
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check size={20} />
                </div>
              ) : (
                 <span className="text-gray-500 font-medium">{row.medConnect}</span>
              )}
            </div>
            <div className="col-span-1 flex justify-center text-gray-400 font-medium">
               {row.agency === false ? <X size={20} /> :<p className="text-center" > {row.agency} </p>}
            </div>
            <div className="col-span-1 flex justify-center text-gray-400 font-medium">
               {row.direct === false ? <X size={20} /> : row.direct}
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

// --- SLIDE 8: Business Model (Redesigned) ---
export const Slide8_BusinessModel: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <SlideWrapper isActive={isActive} className="bg-white p-6 md:p-12 flex flex-col items-center relative">
    {/* Dynamic Background */}
    <div className="absolute inset-0 bg-offwhite pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#006D77 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
    </div>

    <div className="max-w-7xl w-full relative z-10 animate-fade-in-up my-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-4 border border-green-100">
           <DollarSign size={12} />
           Monetization
        </div>
        <h2 className="font-header text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Multiple Revenue Streams.
        </h2>
        <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
          A balanced mix of transactional, recurring, and service-based revenue models.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Stream 1: Marketplace (Teal) */}
        <div className="group relative bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>
           <div className="absolute -right-6 -top-6 w-24 h-24 bg-teal-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
           
           <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                 <Building size={28} />
              </div>
              
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Core Business</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Marketplace Fee</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 h-10">
                 Commission charged to hospitals for every completed procedure booked.
              </p>
              
              <div className="flex items-baseline gap-1">
                 <span className="text-5xl font-bold text-gray-900 tracking-tight">15%</span>
                 <span className="text-lg text-gray-400 font-medium">avg.</span>
              </div>
              <div className="mt-2 text-sm text-gray-400 font-medium">Per Transaction (GMV)</div>
           </div>
        </div>

        {/* Stream 2: Concierge (Coral/Accent) - Highlighted */}
        <div className="group relative bg-gray-900 rounded-[2rem] p-8 shadow-2xl shadow-gray-900/20 border border-gray-800 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl overflow-hidden transform md:-mt-4">
           {/* Gradient background */}
           <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
           <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                 <div className="w-14 h-14 rounded-2xl bg-white/10 text-accent flex items-center justify-center shadow-inner group-hover:bg-accent group-hover:text-white transition-colors duration-300 backdrop-blur-md">
                    <Star size={28} fill="currentColor" />
                 </div>
                 <div className="bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider shadow-lg shadow-accent/20">
                    High Margin
                 </div>
              </div>
              
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">B2C Premium</div>
              <h3 className="text-2xl font-bold text-white mb-3">Concierge Access</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 h-10">
                 Premium packages including visa handling, flights, and recovery hotels.
              </p>
              
              <div className="flex items-baseline gap-1">
                 <span className="text-5xl font-bold text-white tracking-tight">$$</span>
                 <span className="text-lg text-gray-500 font-medium">+</span>
              </div>
              <div className="mt-2 text-sm text-gray-500 font-medium">Per Patient / Trip</div>
              
              <button className="mt-8 w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest transition-colors border border-white/5">
                 View Packages
              </button>
           </div>
        </div>

        {/* Stream 3: SaaS (Blue) */}
        <div className="group relative bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
           <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
           
           <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                 <Briefcase size={28} />
              </div>
              
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-600">B2B Partnership</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise SaaS</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 h-10">
                 Subscription for self-insured employers to reduce healthcare spend.
              </p>
              
              <div className="flex items-baseline gap-1">
                 <span className="text-5xl font-bold text-gray-900 tracking-tight">$$</span>
                 <span className="text-lg text-gray-400 font-medium">+</span>
              </div>
              <div className="mt-2 text-sm text-gray-400 font-medium">Annual Contract Value</div>
           </div>
        </div>

      </div>
      
      {/* Bottom Summary */}
      <div className="mt-16 flex justify-center animate-fade-in-up-delay-3">
         <div className="bg-gray-50 px-8 py-4 rounded-full border border-gray-200 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-teal-500"></div>
               <span>Transactional</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-accent"></div>
               <span>Services</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-blue-500"></div>
               <span>Recurring SaaS</span>
            </div>
         </div>
      </div>
    </div>
  </SlideWrapper>
);

// --- SLIDE 9: Traction (Updated) ---
// export const Slide9_Traction: React.FC<{ isActive: boolean }> = ({ isActive }) => (
//   <SlideWrapper isActive={isActive} className="bg-primary text-white p-6 md:p-12 flex items-center justify-center">
//     {/* Background Elements */}
//     <div className="absolute inset-0 opacity-10 pointer-events-none">
//        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-white rounded-full blur-[150px]"></div>
//        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[100px]"></div>
//     </div>
//     <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

//     <div className="max-w-7xl w-full relative z-10 animate-fade-in-up my-auto">
//       {/* Header */}
//       <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur border border-white/20">
//              <Rocket size={12} />
//              Current Status
//           </div>
//           <h2 className="font-header text-5xl md:text-7xl font-bold mb-4 leading-tight">
//              Laying the <span className="text-secondary">Foundation.</span>
//           </h2>
//           <p className="text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
//              Building a robust infrastructure across supply, demand, and technology.
//           </p>
//       </div>

//       {/* 3 Columns */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
//         {/* Supply Side */}
//         <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 group">
//            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//               <Globe size={28} className="text-secondary" />
//            </div>
//            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Supply Side</h3>
           
//            <div className="space-y-6">
//               <div>
//                  <div className="text-4xl font-bold text-white mb-1">500+</div>
//                  <div className="text-sm text-white/60 font-medium">Provider profiles researched</div>
//               </div>
//               <div className="flex items-start gap-3">
//                  <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5">
//                     <Check size={12} strokeWidth={3} />
//                  </div>
//                  <div className="text-sm text-white/80">
//                     Active discussions with facilitators in <span className="text-white font-bold">India & Mexico</span>.
//                  </div>
//               </div>
//            </div>
//         </div>

//         {/* Demand Side */}
//         <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 group">
//            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//               <Users size={28} className="text-accent" />
//            </div>
//            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Demand Side</h3>
           
//            <div className="space-y-6">
//               <div>
//                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-2">
//                     <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
//                     Active
//                  </div>
//                  <div className="text-lg font-bold text-white">Patient Waitlist</div>
//               </div>
//               <div className="flex items-start gap-3">
//                  <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5">
//                     <Check size={12} strokeWidth={3} />
//                  </div>
//                  <div className="text-sm text-white/80">
//                     Early interest confirmed from <span className="text-white font-bold">2 partner facilities</span>.
//                  </div>
//               </div>
//            </div>
//         </div>

//         {/* Tech */}
//         <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 group">
//            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//               <Smartphone size={28} className="text-blue-400" />
//            </div>
//            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Technology</h3>
           
//            <div className="space-y-6">
//                <div>
//                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
//                     <CheckCircle size={12} />
//                     Ready
//                  </div>
//                  <div className="text-lg font-bold text-white">High-Fidelity Prototype</div>
//               </div>
//               <div className="p-4 bg-white/5 rounded-xl border border-white/5">
//                  <div className="flex gap-2 mb-2">
//                     <div className="w-2 h-2 rounded-full bg-red-400"></div>
//                     <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
//                     <div className="w-2 h-2 rounded-full bg-green-400"></div>
//                  </div>
//                  <div className="h-2 w-16 bg-white/20 rounded-full mb-2"></div>
//                  <div className="h-2 w-full bg-white/10 rounded-full mb-1"></div>
//                  <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
//               </div>
//            </div>
//         </div>

//       </div>
//     </div>
//   </SlideWrapper>
// );

// --- SLIDE 10: Go-To-Market ---
export const Slide10_GTM: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <SlideWrapper isActive={isActive} className="bg-white p-6 md:p-12 relative flex flex-col">
    <BlobBackground />
    <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col justify-center my-auto">
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100">
           <Rocket size={12} />
           Growth Engine
        </div>
        <h2 className="font-header text-4xl md:text-5xl font-bold text-gray-900">Dual-Channel Strategy</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* B2C Channel */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up-delay-1">
          <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6">
            <Users size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Direct to Patient</h3>
          <p className="text-gray-500 mb-6">Capture high-intent search traffic for specific procedures.</p>
          
          <ul className="space-y-4">
            {[
              { label: 'SEO/Content Dominance', sub: 'Targeting "cost of [procedure]" keywords' },
              { label: 'Patient Communities', sub: 'Trust building via FB Groups & Reddit' },
              { label: 'Influencer Marketing', sub: 'Recovery vlogs & testimonials' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.sub}</div>
                </div>
              </div>
            ))}
          </ul>
        </div>

        {/* B2B Channel */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up-delay-2">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
            <Building size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">B2B Partnerships</h3>
          <p className="text-gray-500 mb-6">Integration with self-insured employers and payers.</p>
          
          <ul className="space-y-4">
            {[
              { label: 'Self-Insured Employers', sub: 'Cost-saving benefit add-ons' },
              { label: 'Insurance Riders', sub: 'Global care coverage options' },
              { label: 'Medical Financing', sub: 'Point-of-sale lending partnerships' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.sub}</div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

// --- SLIDE 11: Team (Updated) ---
export const Slide11_Team: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <SlideWrapper isActive={isActive} className="bg-white p-6 md:p-12 relative flex flex-col">
    {/**<BlobBackground />**/}
    <div className="max-w-7xl w-full mx-auto relative z-10 px-4 my-auto">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="font-header text-4xl md:text-5xl font-bold text-gray-900 mb-4">Leadership Structure</h2>
        <p className="text-xl text-gray-500 font-light">Anchored by experience, scaling for the future.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        {/* CTO - TBD */}
        <div className="order-2 md:order-1 bg-white/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors flex flex-col items-center text-center animate-fade-in-up-delay-1 group">
           <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors">
              <Cpu size={32} className="text-gray-400" />
           </div>
           <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">
              Strategic Hire
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-1">Chief Technology Officer</h3>
           <p className="text-sm text-primary font-medium mb-6">TBD</p>
           
           <div className="space-y-3 w-full text-left">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 text-center">Required Expertise</div>
              {[
                 "Platform Development", "API Integrations", "AI Scoring Models", "HIPAA/GDPR Compliance"
              ].map((skill, i) => (
                 <div key={i} className="flex items-center gap-3 text-sm text-gray-600 bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    {skill}
                 </div>
              ))}
           </div>
        </div>

        {/* CEO - Active */}
        <div className="order-1 md:order-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-2xl shadow-primary/10 flex flex-col items-center text-center transform md:-translate-y-4 md:scale-105 z-10 animate-fade-in-up relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
           <div className="w-32 h-32 rounded-full mb-6 p-1 border-2 border-primary/20">
              <img src="https://ui-avatars.com/api/?name=Vivek+Kumar&background=006D77&color=fff&size=128" alt="Vivek Kumar" className="w-full h-full rounded-full object-cover" />
           </div>
           <h3 className="text-2xl font-bold text-gray-900 mb-1">Vivek Kumar</h3>
           <p className="text-sm text-primary font-bold uppercase tracking-widest mb-6">CEO & Founder</p>
           
           <p className="text-gray-600 leading-relaxed mb-6 italic">
              "Building the infrastructure for the next generation of global healthcare."
           </p>

           <div className="w-full pt-6 border-t border-gray-100">
               <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                     <div className="text-xs text-gray-400 font-bold uppercase">Experience</div>
                     <div className="font-bold text-gray-900">10+ Years</div>
                  </div>
                   <div>
                     <div className="text-xs text-gray-400 font-bold uppercase">Focus</div>
                     <div className="font-bold text-gray-900">Tech & Staffing</div>
                  </div>
                  <div className="col-span-2">
                     <div className="text-xs text-gray-400 font-bold uppercase">Track Record</div>
                     <div className="font-bold text-gray-900">Scaling Marketplace (Spottal)</div>
                  </div>
               </div>
           </div>
        </div>

        {/* COO - TBD */}
        <div className="order-3 bg-white/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors flex flex-col items-center text-center animate-fade-in-up-delay-2 group">
           <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors">
              <Building size={32} className="text-gray-400" />
           </div>
           <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">
              Strategic Hire
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-1">COO / Medical Partnerships</h3>
           <p className="text-sm text-primary font-medium mb-6">TBD</p>
           
           <div className="space-y-3 w-full text-left">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 text-center">Required Expertise</div>
              {[
                 "Hospital Network Growth", "Care Coordination", "Tourism Relations", "Operational Scale"
              ].map((skill, i) => (
                 <div key={i} className="flex items-center gap-3 text-sm text-gray-600 bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    {skill}
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  </SlideWrapper>
);

// --- SLIDE 12: Finance (Updated) ---
export const Slide12_Finance: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const allocationData = [
    { name: 'Platform Dev', value: 50, color: '#006D77' },
    { name: 'Marketing', value: 30, color: '#83C5BE' },
    { name: 'Operations', value: 20, color: '#E29578' },
  ];

  return (
    <SlideWrapper isActive={isActive} className="bg-white p-6 md:p-12 relative flex flex-col">
      {/**<BlobBackground />**/}
      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col my-auto min-h-[500px]">
        
        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
              <DollarSign size={12} />
              The Ask
           </div>
           <h2 className="font-header text-5xl md:text-6xl font-bold text-gray-900 mb-4">Investment Opportunity.</h2>
           <p className="text-xl text-gray-500 font-light">Fueling the next phase of growth.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           
           {/* Left Column: The Ask & Details */}
           <div className="lg:col-span-5 flex flex-col gap-6 animate-fade-in-up-delay-1">
              
              {/* Big Number Card */}
              <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                 <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Angel Round Ask</div>
                 <div className="text-7xl font-header font-bold text-primary tracking-tight mb-2">$25,000</div>
                 <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Open for commitment
                 </div>
              </div>

              {/* Instrument Details */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-between">
                 <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Instrument</div>
                    <div className="text-lg font-bold text-gray-900">SAFE Note / Equity</div>
                 </div>
                 <div className="text-right">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Terms</div>
                    <div className="text-lg font-bold text-primary">12-20%</div>
                 </div>
              </div>

              {/* Milestone Banner */}
              <div className="bg-gradient-to-r from-primary to-primary/90 p-6 rounded-2xl shadow-lg text-white flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm">
                    <Rocket size={24} className="text-white" />
                 </div>
                 <div>
                    <div className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">Target Milestone</div>
                    <div className="text-xl font-bold">MVP Launch in 4-6 Months</div>
                 </div>
              </div>

           </div>

           {/* Right Column: Use of Funds */}
           <div className="lg:col-span-7 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col md:flex-row items-center gap-8 animate-fade-in-up-delay-2 h-full">
              
              <div className="relative w-64 h-64 shrink-0">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                       <Pie
                          data={allocationData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          stroke="none"
                       >
                          {allocationData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                       </Pie>
                       <RechartsTooltip />
                    </PieChart>
                 </ResponsiveContainer>
                 {/* Center Text */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <div className="text-xs text-gray-400 font-bold uppercase">Use of</div>
                    <div className="text-lg font-bold text-gray-900">Funds</div>
                 </div>
              </div>

              <div className="flex-1 w-full">
                 <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Use of Funds</h3>
                 <div className="space-y-4">
                    {allocationData.map((item, idx) => (
                       <div key={idx} className="flex items-center justify-between group">
                          <div className="flex items-center gap-3">
                             <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                             <span className="font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                                {item.name}
                                {item.name === "Platform Dev" && <span className="hidden md:inline text-xs text-gray-400 font-normal ml-2">- Core product build</span>}
                                {item.name === "Marketing" && <span className="hidden md:inline text-xs text-gray-400 font-normal ml-2">- & Supply Onboarding</span>}
                             </span>
                          </div>
                          <span className="font-bold text-gray-900">{item.value}%</span>
                       </div>
                    ))}
                 </div>
                 
                 <div className="mt-8 p-4 bg-gray-50 rounded-xl text-xs text-gray-500 leading-relaxed border border-gray-100">
                    <div className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                       <ArrowUpRight size={14} className="text-primary" />
                       Strategy
                    </div>
                    Heavily weighted towards product development to ensure a robust, scalable MVP that converts early demand.
                 </div>
              </div>

           </div>

        </div>
      </div>
    </SlideWrapper>
  );
};

// --- SLIDE 13: Roadmap ---
export const Slide13_Roadmap: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <SlideWrapper isActive={isActive} className="bg-primary relative flex flex-col justify-center">
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
    </div>

    <div className="max-w-7xl w-full mx-auto relative z-10 px-12 my-auto">
      <div className="text-center mb-16 animate-fade-in-up">
         <h2 className="font-header text-5xl text-white font-bold mb-4">Path to Profitability.</h2>
         <p className="text-xl text-white/60 font-light">Strategic milestones from launch to sustainability.</p>
      </div>

      <div className="relative">
         {/* Line - Adjusted alignment to top-4 to match dot center (32px height / 2 = 16px = top-4) */}
         <div className="absolute top-4 left-0 w-full h-1 bg-white/10 rounded-full -translate-y-1/2 hidden md:block"></div>
         
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
               { q: "Q1", title: "MVP Launch", items: ["Web Platform Launch", "Core Search"], status: "current" },
               { q: "Q2", title: "Supply Onboarding", items: ["10 Accredited Hospitals", "Contract Finalization"], status: "next" },
               { q: "Year 1", title: "Validation", items: ["Process 100 Patients", "Initial Revenue"], status: "future" },
               { q: "Year 2", title: "Sustainability", items: ["Operational Break-even", "Scale Operations"], status: "future" },
            ].map((milestone, i) => (
               <div key={i} className={`relative flex flex-col md:items-center text-left md:text-center animate-fade-in-up`} style={{ animationDelay: `${i * 200}ms` }}>
                  {/* Dot */}
                  <div className={`w-8 h-8 rounded-full border-4 z-10 mb-6 shrink-0 ${milestone.status === 'current' ? 'bg-secondary border-secondary shadow-[0_0_20px_rgba(226,149,120,0.5)]' : 'bg-primary border-white/20'}`}></div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl w-full hover:bg-white/10 transition-colors">
                     <div className="text-secondary font-bold text-xs uppercase tracking-widest mb-2">{milestone.q}</div>
                     <h3 className="text-xl font-bold text-white mb-4">{milestone.title}</h3>
                     <ul className="space-y-2">
                        {milestone.items.map((item, idx) => (
                           <li key={idx} className="text-sm text-white/60 flex items-center md:justify-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  </SlideWrapper>
);

// --- SLIDE 14: Closing ---
export const Slide14_Closing: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <SlideWrapper isActive={isActive} className="bg-white relative flex flex-col items-center justify-center text-center">
    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 pointer-events-none"></div>
    {/* Animated background elements */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow"></div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 animate-fade-in-up my-auto">
       <div className="w-24 h-24 bg-primary text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/30">
          <Activity size={48} />
       </div>
       
       <h2 className="font-header text-6xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
          Join the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Revolution.</span>
       </h2>

       {/**<p className="text-2xl text-gray-500 font-light mb-12 max-w-2xl mx-auto">
          We are raising <span className="text-gray-900 font-bold">$3M Seed</span> to democratize access to global healthcare.
       </p>**/}

       <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-lg shadow-gray-200/50 border border-gray-100 hover:scale-105 transition-transform cursor-pointer">
             <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900">
                <Mail size={20} />
             </div>
             <div className="text-left">
                <div className="text-xs text-gray-400 font-bold uppercase">Email Us</div>
                <div className="text-gray-900 font-medium">invest@medconnect.com</div>
             </div>
          </div>

          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-lg shadow-gray-200/50 border border-gray-100 hover:scale-105 transition-transform cursor-pointer">
             <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900">
                <Globe size={20} />
             </div>
             <div className="text-left">
                <div className="text-xs text-gray-400 font-bold uppercase">Website</div>
                <div className="text-gray-900 font-medium">medconnect.com</div>
             </div>
          </div>
       </div>
       
       <div className="mt-20 text-gray-300 text-sm font-light">
          &copy; 2025 Med Connect Inc. Confidential.
       </div>
    </div>
  </SlideWrapper>
);