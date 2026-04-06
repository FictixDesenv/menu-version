import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrinioHeader from "@/components/TrinioHeader";
import DemoButton from "@/components/DemoButton";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useEffect } from "react";
import { X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const slides = [
  { id: 1, title: "Funcionalidade 1", desc: "Visão completa da plataforma Trinio OS e todas as suas funcionalidades integradas." },
  { id: 2, title: "Checkout otimizado", desc: "Processo de compra simplificado com conversão até 3x maior que checkouts tradicionais." },
  { id: 3, title: "Dashboard analítico", desc: "Acompanhe métricas em tempo real e tome decisões baseadas em dados." },
  { id: 4, title: "Integrações", desc: "Conecte com as principais plataformas de e-commerce e meios de pagamento." },
];

type CardView = "carousel" | "video" | "qrcode";

const OverviewPage = () => {
  const navigate = useNavigate();
  const [cardView, setCardView] = useState<CardView>("carousel");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TrinioHeader />

      <div className="px-5 flex-1 flex flex-col">
        <h2 className="text-2xl font-bold text-foreground mb-5 mt-10 text-center">Funcionalidade 1</h2>

        {cardView === "video" ? (
          <>
            <div className="bg-black rounded-2xl border border-border p-6 min-h-[320px] flex flex-col items-center justify-center text-center shadow-sm relative mb-4">
              <button
                onClick={() => setCardView("carousel")}
                className="absolute right-4 top-4 text-white/70 hover:text-white z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl aspect-video w-full overflow-hidden mb-4">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/9Hf4Mld2AUk?autoplay=1&mute=1&controls=1&rel=0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Demo video"
                />
              </div>

              <p className="text-xs text-white/80">
                Veja o Trinio OS em ação
              </p>
            </div>

            <div className="flex justify-center gap-2 mb-6">
              {slides.map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-border" />
              ))}
            </div>
          </>
        ) : cardView === "qrcode" ? (
          <>
            <div className="bg-card rounded-2xl border border-border p-6 min-h-[320px] flex flex-col items-center justify-center text-center shadow-sm relative mb-4">
              <button
                onClick={() => setCardView("carousel")}
                className="absolute right-4 top-4 text-muted-foreground hover:text-foreground z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-bold text-xl text-foreground mb-1">Agendar uma Demo</h3>
              <p className="text-muted-foreground text-sm mb-6">Escanei o QR Code</p>

              <div className="p-4 bg-card rounded-2xl border border-border mb-4">
                <QRCodeSVG
                  value="https://trinio.com.br/demo"
                  size={180}
                  bgColor="transparent"
                  fgColor="hsl(0, 0%, 10%)"
                />
              </div>

              <p className="text-xs text-muted-foreground">
                Aponte a câmera do seu celular para o código
              </p>
            </div>

            <div className="flex justify-center gap-2 mb-6">
              {slides.map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-border" />
              ))}
            </div>
          </>
        ) : (
          <>
            <Carousel setApi={setApi} className="w-full mb-4">
              <CarouselContent>
                {slides.map((slide) => (
                  <CarouselItem key={slide.id}>
                    <div className="bg-card rounded-2xl border border-border p-6 min-h-[320px] flex flex-col items-center justify-center text-center shadow-sm relative">
                      <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-transparent border-none shadow-none text-muted-foreground hover:text-foreground" />
                      <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-transparent border-none shadow-none text-muted-foreground hover:text-foreground" />
                      
                      <div className="flex flex-col items-center gap-2 mb-8 px-8">
                        <h3 className="font-bold text-xl text-foreground">{slide.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{slide.desc}</p>
                      </div>
                      
                      <Button
                        onClick={() => setCardView("video")}
                        className="rounded-full px-8 py-6 text-base font-semibold bg-foreground text-background hover:bg-foreground/90"
                      >
                        <span className="mr-2">▷</span> Assistir Demo
                      </Button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center gap-2 mb-6">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-foreground" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <DemoButton onClick={() => setCardView("qrcode")} variant="outline" />
      </div>
    </div>
  );
};

export default OverviewPage;
