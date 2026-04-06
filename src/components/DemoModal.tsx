import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Video } from "lucide-react";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm mx-auto rounded-3xl bg-card border-0 shadow-2xl p-6">
        <DialogHeader className="sr-only">
          <DialogTitle>Assistir Demo</DialogTitle>
        </DialogHeader>

        {/* Video area */}
        <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center mb-4">
          <Video className="w-12 h-12 text-muted-foreground" />
        </div>

        <p className="text-center text-base text-foreground font-medium">
          Descubra como podemos
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
