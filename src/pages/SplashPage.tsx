import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logoTrino from "@/assets/logo_trinio.png";

const wavePaths = [
  // Linhas próximas ao topo
  {
    d: "M-100,40 C50,-20 150,120 300,60 S500,-20 650,40 S850,120 1000,60",
    color: "hsl(270, 60%, 85%)",
    duration: 15.6,
    strokeWidth: 16,
    offset: 0,
  },
  {
    d: "M-80,100 C80,30 200,170 350,100 S520,20 680,100 S880,180 1050,100",
    color: "hsl(340, 60%, 88%)",
    strokeWidth: 12,
    duration: 18,
    offset: 0.8,
  },
  // Linhas próximas à esquerda/direita (meio-superior)
  {
    d: "M-100,200 C50,100 150,350 300,250 S500,100 650,200 S850,350 1000,250",
    color: "hsl(270, 60%, 85%)",
    duration: 15.6,
    strokeWidth: 20,
    offset: 0,
  },
  {
    d: "M-80,280 C80,180 200,400 350,300 S520,150 680,280 S880,420 1050,300",
    color: "hsl(340, 60%, 85%)",
    strokeWidth: 15,
    duration: 19.5,
    offset: 1,
  },
  // Centro
  {
    d: "M-120,400 C60,300 180,500 330,380 S500,250 670,400 S870,530 1050,400",
    color: "hsl(270, 50%, 88%)",
    strokeWidth: 22,
    duration: 23.4,
    offset: 2,
  },
  {
    d: "M-60,550 C100,450 220,620 370,520 S540,380 700,550 S900,680 1080,520",
    color: "hsl(270, 55%, 82%)",
    strokeWidth: 14,
    duration: 18.2,
    offset: 0.5,
  },
  {
    d: "M-90,680 C70,580 190,750 340,650 S510,500 680,680 S880,800 1060,650",
    color: "hsl(340, 50%, 88%)",
    strokeWidth: 18,
    duration: 20.8,
    offset: 1.5,
  },
  // Linhas próximas à parte inferior
  {
    d: "M-80,800 C70,730 200,870 340,800 S510,710 680,800 S880,890 1060,800",
    color: "hsl(270, 55%, 86%)",
    strokeWidth: 14,
    duration: 17,
    offset: 0.3,
  },
  {
    d: "M-100,870 C50,800 180,940 320,870 S490,790 660,870 S860,950 1040,870",
    color: "hsl(340, 55%, 86%)",
    strokeWidth: 18,
    duration: 21,
    offset: 1.2,
  },
  {
    d: "M-60,920 C90,860 210,980 350,920 S530,840 700,920 S890,1000 1080,920",
    color: "hsl(270, 60%, 83%)",
    strokeWidth: 12,
    duration: 16,
    offset: 2.2,
  },
];

const SplashPage = () => {
  const navigate = useNavigate();
  const [logoVisible, setLogoVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden cursor-pointer select-none"
      style={{ backgroundColor: "hsl(270, 40%, 96%)" }}
      onClick={() => navigate("/landing")}
    >
      {/* Animated wave lines */}
      <svg
        className="absolute w-[200%] h-[200%]"
        style={{ top: "-50%", left: "-50%", transform: "rotate(-60deg)", transformOrigin: "center center" }}
        viewBox="0 0 430 932"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {wavePaths.map((wave, i) => (
          <motion.path
            key={i}
            d={wave.d}
            stroke={wave.color}
            strokeWidth={wave.strokeWidth}
            strokeLinecap="round"
            fill="none"
            opacity={0.7}
            initial={{ pathOffset: 0, translateY: 0, translateX: 0 }}
            animate={{
              translateY: [0, -30, 20, -10, 0],
              translateX: [0, 15, -10, 5, 0],
              rotate: [0, 0.5, -0.3, 0.2, 0],
            }}
            transition={{
              duration: wave.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: wave.offset,
            }}
          />
        ))}
      </svg>

      {/* Logo with delayed fade-in */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{
          opacity: [0, 1, 1, 1, 1, 0, 0],
          scale: [0.92, 1, 1.01, 1.02, 1, 0.96, 0.92],
        }}
        transition={{
          delay: 3,
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.1, 0.3, 0.5, 0.8, 0.95, 1],
        }}
        onAnimationComplete={() => setLogoVisible(true)}
      >
        <img
          src={logoTrino}
          alt="Trinio"
          className="h-16 object-contain"
        />
      </motion.div>

      {/* Tap hint - appears after logo */}
      <motion.p
        className="absolute bottom-12 text-sm font-medium"
        style={{ color: "hsl(270, 20%, 60%)" }}
        initial={{ opacity: 0 }}
        animate={logoVisible ? { opacity: [0, 0.6, 0.3, 0.6] } : { opacity: 0 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Toque para continuar
      </motion.p>
    </div>
  );
};

export default SplashPage;
