import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logoTrino from "@/assets/logo_trinio.png";

const wavePaths = [
  {
    d: "M-100,200 C50,100 150,350 300,250 S500,100 650,200 S850,350 1000,250",
    color: "hsl(270, 60%, 85%)",
    duration: 12,
    strokeWidth: 28,
    offset: 0,
  },
  {
    d: "M-80,280 C80,180 200,400 350,300 S520,150 680,280 S880,420 1050,300",
    color: "hsl(340, 60%, 85%)",
    strokeWidth: 22,
    duration: 15,
    offset: 1,
  },
  {
    d: "M-120,400 C60,300 180,500 330,380 S500,250 670,400 S870,530 1050,400",
    color: "hsl(270, 50%, 88%)",
    strokeWidth: 32,
    duration: 18,
    offset: 2,
  },
  {
    d: "M-60,550 C100,450 220,620 370,520 S540,380 700,550 S900,680 1080,520",
    color: "hsl(270, 55%, 82%)",
    strokeWidth: 20,
    duration: 14,
    offset: 0.5,
  },
  {
    d: "M-90,680 C70,580 190,750 340,650 S510,500 680,680 S880,800 1060,650",
    color: "hsl(340, 50%, 88%)",
    strokeWidth: 26,
    duration: 16,
    offset: 1.5,
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 3,
          duration: 1.2,
          ease: "easeOut",
        }}
        onAnimationComplete={() => setLogoVisible(true)}
      >
        <img
          src={logoTrino}
          alt="Trinio"
          className="h-12 object-contain"
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
