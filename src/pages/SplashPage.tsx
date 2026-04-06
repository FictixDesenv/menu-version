import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TrinioLogo from "@/components/TrinioLogo";

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/landing"), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-background overflow-hidden">
      {/* Decorative wave curves */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 430 932"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-50 300 Q100 250 200 350 Q300 450 430 380 L430 932 L-50 932Z"
          fill="hsl(270, 50%, 90%)"
          opacity="0.5"
        />
        <path
          d="M-50 400 Q80 350 220 420 Q360 490 480 400 L480 932 L-50 932Z"
          fill="hsl(330, 60%, 90%)"
          opacity="0.3"
        />
        <path
          d="M-50 500 Q150 450 250 530 Q350 610 480 520 L480 932 L-50 932Z"
          fill="hsl(14, 90%, 90%)"
          opacity="0.25"
        />
      </svg>

      <div className="relative z-10 animate-fade-in">
        <TrinioLogo size="lg" />
      </div>
    </div>
  );
};

export default SplashPage;
