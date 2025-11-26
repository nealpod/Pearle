"use client";

import React, { useRef, useState, useEffect } from "react";

// --- HOOK: Track Scroll Intensity ---
// Returns a value between 0 (far from center) and 1 (at center)
function useScrollGlow(ref: React.RefObject<HTMLDivElement>) {
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const center = viewportHeight / 2;
      const elementCenter = rect.top + rect.height / 2;

      // Calculate distance from center
      const distance = Math.abs(center - elementCenter);

      // Define the "active" range (e.g., within 500px of center)
      const range = 500;

      // Calculate intensity
      let newIntensity = 1 - distance / range;

      // Clamp between 0 and 1
      newIntensity = Math.max(0, Math.min(1, newIntensity));

      setIntensity(newIntensity);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref]);

  return intensity;
}

// --- FULL-BACKGROUND GLOW FOR EACH FEATURE ROW ---
interface GlowFeatureRowProps {
  children: React.ReactNode;
  edgeColor: string; // e.g. "rgba(79, 70, 229, 0.9)"
}

function GlowFeatureRow({ children, edgeColor }: GlowFeatureRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const intensity = useScrollGlow(ref);

  // When intensity = 0 → color sits at very outer edge
  // When intensity = 1 → color pushes further toward center
  const innerStop = 95 - intensity * 30; // 70% → 30%

  return (
    <div ref={ref} className="relative">
      {/* FULL-WIDTH BACKGROUND BLOOM BEHIND THE ROW */}
      <div className="pointer-events-none fixed inset-y-0 left-1/2 -translate-x-1/2 w-screen z-0">
        <div
          className="h-full"
          style={{
            // Transparent in the middle, color at edges.
            background: `radial-gradient(circle at center, transparent 0%, transparent ${innerStop}%, ${edgeColor} 100%)`,
            opacity: intensity * 0.40,
          }}
        />
      </div>

      {/* Row content stays above background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// --- COMPONENT: Glowing Feature Card ---
interface FeatureCardProps {
  children: React.ReactNode;
  borderGradient: string;
  bloomColor: string; // e.g., "rgba(99, 102, 241, 0.6)"
}

function FeatureCard({
  children,
  borderGradient,
  bloomColor,
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const intensity = useScrollGlow(ref);

  return (
    <div ref={ref} className="relative group">
      {/* Main Wrapper with Static Border Gradient (p-[1px] creates the border width) */}
      <div className={`relative rounded-[2rem] p-[1px] ${borderGradient}`}>
        {/* DYNAMIC BORDER GLOW */}
        <div
          className="absolute inset-0 rounded-[2rem] transition-opacity duration-100 will-change-opacity"
          style={{
            background: `linear-gradient(180deg, ${bloomColor} 0%, transparent 60%)`,
            opacity: intensity * 0.9,
          }}
        />

        {/* Inner Card Content */}
        <div className="relative z-10 rounded-[2rem] bg-black overflow-hidden aspect-[4/3] flex flex-col justify-center items-center">
          {/* 1. Static Ambient Glow (Subtle permanent background) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${bloomColor} 0%, transparent 60%)`,
              opacity: 0.15,
            }}
          />

          {/* 2. Dynamic Scroll Bloom (Intense center glow) */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full pointer-events-none transition-opacity duration-75 will-change-opacity mix-blend-screen"
            style={{
              background: `radial-gradient(circle closest-side, ${bloomColor} 0%, transparent 100%)`,
              opacity: intensity * 0.6,
            }}
          />

          {/* Card Content (UI Mockup) */}
          <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-6 transition-transform duration-500 group-hover:scale-105">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Platform() {
  return (
    <section
      id="product-suite"
      className="bg-black py-24 lg:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 lg:mb-32 relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500 mb-4">
            Product Suite
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
            The unified operating system <br className="hidden md:block" />
            for modern eye care.
          </h2>
          <p className="text-lg md:text-xl text-[#8a8f98] leading-relaxed">
            Replace your fragmented software stack with one seamless platform
            designed to capture revenue at every step.
          </p>
        </div>

        <div className="flex flex-col gap-y-24 lg:gap-y-[20vh] relative z-10">
          {/* FEATURE 1: INTAKE (Indigo Theme) */}
          <GlowFeatureRow edgeColor="rgba(79, 70, 229, 0.75)">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FeatureCard
                borderGradient="bg-gradient-to-b from-indigo-500/40 via-purple-500/10 to-transparent"
                bloomColor="rgba(99, 102, 241, 0.5)" // Indigo-500
              >
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="font-bold text-white">Patient Intake</div>
                  <div className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full uppercase tracking-wide border border-emerald-500/30">
                    Eligible
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-2 w-1/3 bg-white/10 rounded" />
                    <div className="h-10 w-full bg-white/5 border border-white/10 rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-1/4 bg-white/10 rounded" />
                    <div className="h-10 w-full bg-white/10 border border-white/10 rounded-lg" />
                  </div>
                  <div className="pt-2">
                    <div className="h-10 w-full bg-indigo-600 rounded-lg shadow-lg shadow-indigo-900/20" />
                  </div>
                </div>
              </FeatureCard>

              <div className="lg:pl-10">
                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 leading-tight">
                  Capture details <br />
                  <span className="text-indigo-400">before they walk in.</span>
                </h3>
                <p className="text-lg text-[#8a8f98] mb-8 leading-relaxed">
                  Stop chasing clipboards. Send secure digital intake forms to
                  patients ahead of time. We automatically extract insurance
                  data and verify eligibility instantly, so your front desk can
                  focus on welcoming patients.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-indigo-400 font-bold hover:text-indigo-300 transition-colors group"
                >
                  Learn about Intake
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </GlowFeatureRow>

          {/* FEATURE 2: QUOTING (Blue Theme) */}
          <GlowFeatureRow edgeColor="rgba(37, 99, 235, 0.75)">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 lg:pr-10">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 leading-tight">
                  Transparent pricing <br />
                  <span className="text-blue-400">in seconds.</span>
                </h3>
                <p className="text-lg text-[#8a8f98] mb-8 leading-relaxed">
                  Build complex lens and frame quotes that patients actually
                  understand. Show them their insurance contribution,
                  out-of-pocket costs, and savings in real-time. Close more
                  sales with clarity.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors group"
                >
                  Explore Smart Quoting
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              <div className="order-1 lg:order-2">
                <FeatureCard
                  borderGradient="bg-gradient-to-b from-blue-500/40 via-cyan-500/10 to-transparent"
                  bloomColor="rgba(59, 130, 246, 0.5)" // Blue-500
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="font-bold text-white">Quote Summary</div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Retail Total</span>
                      <span className="font-semibold text-white line-through decoration-blue-400/50">
                        $450.00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Insurance Benefit</span>
                      <span className="font-semibold text-emerald-400">
                        -$250.00
                      </span>
                    </div>
                    <div className="h-px bg-white/10 my-2" />
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-white">Patient Owes</span>
                      <span className="text-blue-400">$200.00</span>
                    </div>
                  </div>
                  <div className="h-10 w-full bg-white text-black rounded-lg flex items-center justify-center font-bold text-sm shadow-lg hover:bg-slate-200 transition-colors">
                    Approve Quote
                  </div>
                </FeatureCard>
              </div>
            </div>
          </GlowFeatureRow>

          {/* FEATURE 3: ANALYTICS (Purple Theme) */}
          <GlowFeatureRow edgeColor="rgba(147, 51, 234, 0.75)">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FeatureCard
                borderGradient="bg-gradient-to-b from-purple-500/40 via-fuchsia-500/10 to-transparent"
                bloomColor="rgba(168, 85, 247, 0.5)" // Purple-500
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="font-bold text-white">Revenue Pulse</div>
                  <div className="text-xs font-bold text-purple-400 uppercase">
                    Last 30 Days
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-slate-400 mb-1">
                      Net Revenue
                    </div>
                    <div className="text-xl font-bold text-white">$24,138</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-slate-400 mb-1">
                      Claims Paid
                    </div>
                    <div className="text-xl font-bold text-purple-400">98%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-400">
                    <span>Monthly Goal</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-[85%] shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  </div>
                </div>
              </FeatureCard>

              <div className="lg:pl-10">
                <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 leading-tight">
                  Real-time insights <br />
                  <span className="text-purple-400">for your growth.</span>
                </h3>
                <p className="text-lg text-[#8a8f98] mb-8 leading-relaxed">
                  Visualize your practice&apos;s health with dashboards that
                  actually make sense. Track exams sold, frame inventory, and
                  claim status in real-time to make better business decisions.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-purple-400 font-bold hover:text-purple-300 transition-colors group"
                >
                  See Analytics features
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </GlowFeatureRow>
        </div>
      </div>
    </section>
  );
}
