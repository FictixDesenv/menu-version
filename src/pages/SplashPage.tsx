import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SplashPage = () => {
  const navigate = useNavigate();
  const [exiting, setExiting] = useState(false);

  const handleTap = () => {
    if (exiting) return;
    setExiting(true);
  };

  return (
    <AnimatePresence onExitComplete={() => navigate("/app")}>
      {!exiting ? (
        <motion.div
          key="splash"
          className="relative flex items-center justify-center h-screen w-full overflow-hidden cursor-pointer select-none"
          onClick={handleTap}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={() => { if (!exiting) { setExiting(true); } }}
          >
            <source src="/videos/splash.mp4" type="video/mp4" />
          </video>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SplashPage;
