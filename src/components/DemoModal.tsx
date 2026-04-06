import { X } from "lucide-react";
import qrCodeImage from "@/assets/frame.svg";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="bg-card rounded-3xl p-8 mx-5 max-w-sm w-full flex flex-col items-center text-center relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-bold text-xl text-foreground mb-1 mt-2">Agendar uma Demo</h3>
        <p className="text-muted-foreground text-sm mb-6">Escanei o QR Code</p>

        <div className="p-4 bg-card rounded-2xl border border-border mb-4">
          <img src={qrCodeImage} alt="QR Code para agendar demo" className="w-[180px] h-[180px]" />
        </div>

        <p className="text-xs text-muted-foreground">
          Aponte a câmera do seu celular para o código
        </p>
      </div>
    </div>
  );
};

export default DemoModal;
