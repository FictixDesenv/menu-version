import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { QRCodeSVG } from "qrcode.react";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm mx-auto rounded-3xl bg-card border-0 shadow-2xl">
        <DialogHeader className="items-center pt-4">
          <DialogTitle className="text-xl font-bold text-foreground">Agendar uma Demo</DialogTitle>
          <p className="text-muted-foreground text-sm mt-1">Escaneie o QR Code abaixo</p>
        </DialogHeader>
        <div className="flex justify-center py-8">
          <div className="p-4 bg-card rounded-2xl border border-border">
            <QRCodeSVG
              value="https://trinio.com.br/demo"
              size={200}
              bgColor="transparent"
              fgColor="hsl(0, 0%, 10%)"
            />
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground pb-4">
          Aponte a câmera do seu celular para o QR Code
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
