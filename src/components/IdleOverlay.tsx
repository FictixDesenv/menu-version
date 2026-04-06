import { useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface IdleOverlayProps {
  timeoutMs?: number;
}

const IdleOverlay = ({ timeoutMs = 60000 }: IdleOverlayProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleIdle = useCallback(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, [navigate, location.pathname]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const startTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(handleIdle, timeoutMs);
    };

    const handleActivity = () => {
      startTimer();
    };

    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"];
    events.forEach((e) => window.addEventListener(e, handleActivity));
    startTimer();

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, handleActivity));
    };
  }, [timeoutMs, handleIdle]);

  return null;
};

export default IdleOverlay;
