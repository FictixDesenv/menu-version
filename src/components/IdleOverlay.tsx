import { useEffect, useCallback, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface IdleOverlayProps {
  idleMs?: number;
  countdownSec?: number;
}

const IdleOverlay = ({ idleMs = 60000, countdownSec = 30 }: IdleOverlayProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [seconds, setSeconds] = useState(countdownSec);
  const idleTimer = useRef<ReturnType<typeof setTimeout>>();

  const goToSplash = useCallback(() => {
    setVisible(false);
    if (location.pathname !== "/") navigate("/");
  }, [navigate, location.pathname]);

  const dismiss = useCallback(() => {
    setVisible(false);
    setSeconds(countdownSec);
  }, [countdownSec]);

  // idle detection
  useEffect(() => {
    if (visible) return;

    const start = () => {
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        setSeconds(countdownSec);
        setVisible(true);
      }, idleMs);
    };

    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"];
    events.forEach((e) => window.addEventListener(e, start));
    start();

    return () => {
      clearTimeout(idleTimer.current);
      events.forEach((e) => window.removeEventListener(e, start));
    };
  }, [idleMs, countdownSec, visible]);

  // countdown
  useEffect(() => {
    if (!visible) return;
    if (seconds <= 0) {
      goToSplash();
      return;
    }
    const t = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [visible, seconds, goToSplash]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative mx-6 w-full max-w-[340px] rounded-[24px] bg-[hsl(var(--card))] border border-[rgba(164,168,255,0.21)] p-8 flex flex-col items-center"
          >
            {/* Close */}
            <button onClick={dismiss} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>

            {/* Timer circle */}
            <div className="w-16 h-16 rounded-full bg-transparent border-2 border-[#8F59DF] flex items-center justify-center mb-5">
              <span className="text-2xl font-bold text-white">{seconds}</span>
            </div>

            <h2 className="text-xl font-bold text-foreground mb-2">Ainda está aqui?</h2>
            <p className="text-muted-foreground text-sm text-center mb-8 leading-relaxed">
              Sem interação por alguns segundos, voltaremos à tela inicial automaticamente.
            </p>

            {/* Continuar */}
            <button
              onClick={dismiss}
              className="w-full py-3.5 rounded-[12px] bg-[#FF5733] text-white font-semibold text-base mb-3 hover:opacity-90 transition-opacity"
            >
              Continuar aqui
            </button>

            {/* Sair */}
            <button
              onClick={goToSplash}
              className="w-full py-3.5 rounded-[12px] border border-primary text-primary font-semibold text-base hover:bg-primary/10 transition-colors"
            >
              Sair
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IdleOverlay;
