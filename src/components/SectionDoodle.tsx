"use client";

/**
 * Per-section SVG doodle backgrounds.
 * Each variant has its own hand-drawn-style illustration + tint.
 * All are purely decorative: aria-hidden, pointer-events-none, very low opacity.
 */

type DoodleVariant =
  | "hero"
  | "about"
  | "projects"
  | "experience"
  | "tech"
  | "contact"
  | "social";

interface SectionDoodleProps {
  variant: DoodleVariant;
}

export default function SectionDoodle({ variant }: SectionDoodleProps) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none overflow-hidden -z-10"
    >
      {variant === "hero" && <HeroDoodle />}
      {variant === "about" && <AboutDoodle />}
      {variant === "projects" && <ProjectsDoodle />}
      {variant === "experience" && <ExperienceDoodle />}
      {variant === "tech" && <TechDoodle />}
      {variant === "contact" && <ContactDoodle />}
      {variant === "social" && <SocialDoodle />}
    </div>
  );
}

/* ── Hero — mountain range horizon ─────────────────────────────────────── */
function HeroDoodle() {
  return (
    <>
      {/* green mountain wash bottom-left */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-emerald-500/5 dark:from-emerald-400/4 to-transparent" />
      <svg
        viewBox="0 0 1200 260"
        className="absolute bottom-0 left-0 w-full opacity-[0.07] dark:opacity-[0.06]"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Far peaks */}
        <path
          d="M0 260 L180 80 L310 170 L470 30 L600 130 L730 20 L860 110 L1020 55 L1200 150 L1200 260 Z"
          fill="#10b981"
        />
        {/* Near ridge */}
        <path
          d="M0 260 L120 180 L250 210 L400 140 L540 200 L680 130 L820 185 L950 145 L1100 190 L1200 160 L1200 260 Z"
          fill="#059669"
        />
      </svg>
      {/* Floating tent top-right */}
      <svg
        viewBox="0 0 120 90"
        className="absolute top-28 right-[8%] w-28 opacity-[0.06] dark:opacity-[0.05] rotate-3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="60,5 5,85 115,85" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinejoin="round" />
        <line x1="60" y1="5" x2="60" y2="85" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="6 4" />
        <path d="M35 85 Q60 60 85 85" fill="#f59e0b" opacity="0.5" />
      </svg>
      {/* Pine tree top-left */}
      <svg
        viewBox="0 0 70 110"
        className="absolute top-24 left-[6%] w-16 opacity-[0.07] dark:opacity-[0.05] -rotate-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="35,5 5,50 65,50" fill="#10b981" />
        <polygon points="35,25 8,65 62,65" fill="#10b981" />
        <polygon points="35,45 10,85 60,85" fill="#10b981" />
        <rect x="30" y="85" width="10" height="22" rx="2" fill="#92400e" />
      </svg>
    </>
  );
}

/* ── About — compass + wavy trail ──────────────────────────────────────── */
function AboutDoodle() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/3 via-transparent to-emerald-500/3 dark:from-amber-400/3 dark:to-emerald-400/3" />
      {/* Large faint compass rose top-right */}
      <svg
        viewBox="0 0 160 160"
        className="absolute -top-8 -right-8 w-56 opacity-[0.055] dark:opacity-[0.045] rotate-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="80" cy="80" r="74" fill="none" stroke="#f59e0b" strokeWidth="3" />
        <circle cx="80" cy="80" r="6" fill="#f59e0b" />
        {/* N S E W ticks */}
        {[0, 90, 180, 270].map((deg) => (
          <line
            key={deg}
            x1="80" y1="12" x2="80" y2="24"
            stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"
            transform={`rotate(${deg} 80 80)`}
          />
        ))}
        {/* Arrow N */}
        <polygon points="80,14 74,46 80,40 86,46" fill="#f59e0b" />
        {/* Arrow S */}
        <polygon points="80,146 74,114 80,120 86,114" fill="#f59e0b" opacity="0.5" />
        {/* diagonals */}
        {[45, 135, 225, 315].map((deg) => (
          <line
            key={deg}
            x1="80" y1="20" x2="80" y2="30"
            stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"
            transform={`rotate(${deg} 80 80)`}
          />
        ))}
      </svg>
      {/* Wavy trail bottom-left */}
      <svg
        viewBox="0 0 400 80"
        className="absolute bottom-8 left-0 w-96 opacity-[0.06] dark:opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 40 C50 10, 100 70, 150 40 C200 10, 250 70, 300 40 C350 10, 380 55, 400 40"
          fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round"
        />
        {/* dots along trail */}
        {[0, 75, 150, 225, 300, 375].map((cx) => (
          <circle key={cx} cx={cx} cy="40" r="4" fill="#10b981" opacity="0.7" />
        ))}
      </svg>
    </>
  );
}

/* ── Projects — code brackets + mountain outline ────────────────────────── */
function ProjectsDoodle() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-bl from-emerald-600/4 via-transparent to-green-500/3" />
      {/* Bracket { top-left */}
      <svg
        viewBox="0 0 80 200"
        className="absolute top-12 -left-4 w-16 opacity-[0.05] dark:opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M60 10 Q20 10 20 50 L20 88 Q20 100 8 100 Q20 100 20 112 L20 150 Q20 190 60 190"
          fill="none" stroke="#2d6a4f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Bracket } bottom-right */}
      <svg
        viewBox="0 0 80 200"
        className="absolute bottom-12 -right-4 w-16 opacity-[0.05] dark:opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 10 Q60 10 60 50 L60 88 Q60 100 72 100 Q60 100 60 112 L60 150 Q60 190 20 190"
          fill="none" stroke="#40916c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Small mountain peak mid-right */}
      <svg
        viewBox="0 0 200 120"
        className="absolute top-1/2 -translate-y-1/2 right-[3%] w-40 opacity-[0.055] dark:opacity-[0.045]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="0,120 80,20 130,70 200,10"
          fill="none" stroke="#10b981" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
        {/* snow caps */}
        <polyline points="68,38 80,20 92,38" fill="none" stroke="#10b981" strokeWidth="2" />
        <polyline points="192,26 200,10 208,26" fill="none" stroke="#10b981" strokeWidth="2" />
      </svg>
    </>
  );
}

/* ── Experience — dotted trail / path ───────────────────────────────────── */
function ExperienceDoodle() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/3 via-transparent to-amber-500/3" />
      {/* Winding dotted path right side */}
      <svg
        viewBox="0 0 120 600"
        className="absolute top-0 right-[5%] h-full w-24 opacity-[0.06] dark:opacity-[0.05]"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 0 C100 60, 20 120, 60 200 C100 280, 20 340, 60 420 C100 500, 20 560, 60 600"
          fill="none" stroke="#2d6a4f" strokeWidth="2.5" strokeDasharray="8 6" strokeLinecap="round"
        />
        {/* Milestone dots */}
        {[80, 200, 340, 460].map((cy) => (
          <circle key={cy} cx="60" cy={cy} r="5" fill="#40916c" opacity="0.6" />
        ))}
      </svg>
      {/* Bootprint stamp top-left */}
      <svg
        viewBox="0 0 60 90"
        className="absolute top-16 left-[4%] w-12 opacity-[0.05] dark:opacity-[0.04] -rotate-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="30" cy="55" rx="22" ry="32" fill="#f59e0b" />
        <ellipse cx="20" cy="22" rx="10" ry="14" fill="#f59e0b" />
        <ellipse cx="38" cy="18" rx="8" ry="11" fill="#f59e0b" />
      </svg>
    </>
  );
}

/* ── Tech — circuit board + leaf ────────────────────────────────────────── */
function TechDoodle() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/3 via-transparent to-green-400/3" />
      {/* Circuit lines top-right */}
      <svg
        viewBox="0 0 280 200"
        className="absolute -top-4 -right-4 w-72 opacity-[0.055] dark:opacity-[0.045]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M280 0 L200 0 L200 40 L140 40 L140 80 L80 80 L80 140 L30 140"
          fill="none" stroke="#2d6a4f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M280 60 L240 60 L240 100 L180 100 L180 160 L100 160"
          fill="none" stroke="#40916c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* pads */}
        {[[200,40],[140,80],[80,140],[240,100],[180,160]].map(([cx,cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="none" stroke="#40916c" strokeWidth="2" />
        ))}
      </svg>
      {/* Leaf bottom-left */}
      <svg
        viewBox="0 0 100 120"
        className="absolute bottom-8 left-[3%] w-20 opacity-[0.06] dark:opacity-[0.05] rotate-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 110 C50 110 10 70 10 40 C10 15 30 5 50 5 C70 5 90 15 90 40 C90 70 50 110 50 110 Z"
          fill="none" stroke="#10b981" strokeWidth="3" strokeLinejoin="round" />
        <path d="M50 110 L50 20" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        {[35,55,70,85].map((cy)=>(
          <path key={cy} d={`M50 ${cy} Q${cy < 60 ? 25 : 28} ${cy-12} ${cy < 60 ? 18 : 20} ${cy-8}`}
            fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        ))}
      </svg>
    </>
  );
}

/* ── Contact — envelope + map pin + stars ───────────────────────────────── */
function ContactDoodle() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-tl from-rose-500/3 via-transparent to-orange-500/3" />
      {/* Map pin top-right */}
      <svg
        viewBox="0 0 60 80"
        className="absolute top-10 right-[8%] w-12 opacity-[0.07] dark:opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30 5 C15 5 5 15 5 28 C5 48 30 75 30 75 C30 75 55 48 55 28 C55 15 45 5 30 5 Z"
          fill="none" stroke="#f43f5e" strokeWidth="3.5" strokeLinejoin="round" />
        <circle cx="30" cy="28" r="8" fill="none" stroke="#f43f5e" strokeWidth="3" />
      </svg>
      {/* Scattered stars */}
      {[[15,20],[85,35],[60,70],[30,80],[90,65]].map(([cx,cy],i)=>(
        <svg key={i} viewBox="0 0 20 20"
          style={{ position:'absolute', left:`${cx}%`, top:`${cy}%`, width: 14+i*3 }}
          className="opacity-[0.07] dark:opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="10,1 12.9,7 19.5,7.6 14.8,11.9 16.4,18.5 10,15 3.6,18.5 5.2,11.9 0.5,7.6 7.1,7"
            fill="#f59e0b" />
        </svg>
      ))}
    </>
  );
}

/* ── Social — wavy underline strips ────────────────────────────────────── */
function SocialDoodle() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/3 via-transparent to-green-500/3" />
      <svg
        viewBox="0 0 1200 60"
        className="absolute bottom-0 left-0 w-full opacity-[0.06] dark:opacity-[0.05]"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 30 C150 5, 300 55, 450 30 C600 5, 750 55, 900 30 C1050 5, 1150 45, 1200 30"
          fill="none" stroke="#2d6a4f" strokeWidth="3" />
        <path d="M0 45 C150 20, 300 70, 450 45 C600 20, 750 70, 900 45 C1050 20, 1150 60, 1200 45"
          fill="none" stroke="#52b788" strokeWidth="2" opacity="0.6" />
      </svg>
    </>
  );
}
