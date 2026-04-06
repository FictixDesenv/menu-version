import { useEffect, useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface IdleOverlayProps {
  timeoutMs?: number;
  onContinue?: () => void;
}

const IdleOverlay = ({ timeoutMs = 60000, onContinue }: IdleOverlayProps) => {
  const [idle, setIdle] = useState(false);

  const resetTimer = useCallback(() => {
    setIdle(false);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const startTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setIdle(true), timeoutMs);
    };

    const handleActivity = () => {
      if (!idle) startTimer();
    };

    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"];
    events.forEach((e) => window.addEventListener(e, handleActivity));
    startTimer();

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, handleActivity));
    };
  }, [timeoutMs, idle]);

  const handleContinue = () => {
    resetTimer();
    onContinue?.();
  };

  return (
    <Dialog open={idle} onOpenChange={(open) => { if (!open) handleContinue(); }}>
      <DialogContent className="sm:max-w-sm rounded-2xl">
        <DialogHeader className="items-center text-center">
          <div className="text-4xl mb-2">👋</div>
          <DialogTitle className="text-foreground">Você ainda está aí?</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Parece que você ficou um tempo sem interagir. Deseja continuar navegando?
          </DialogDescription>
        </DialogHeader>
        <Button onClick={handleContinue} className="w-full mt-2">
          Sim, continuar navegando
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default IdleOverlay;
