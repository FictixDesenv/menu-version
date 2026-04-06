import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrinioHeader from "@/components/TrinioHeader";
import DemoButton from "@/components/DemoButton";
import DemoModal from "@/components/DemoModal";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useEffect } from "react";

const slides = [
  { id: 1, title: "Overview geral", desc: "Visão completa da plataforma Trinio OS e todas as suas funcionalidades integradas." },
  { id: 2, title: "Checkout otimizado", desc: "Processo de compra simplificado com conversão até 3x maior que checkouts tradicionais." },
  { id: 3, title: "Dashboard analítico", desc: "Acompanhe métricas em tempo real e tome decisões baseadas em dados." },
  { id: 4, title: "Integrações", desc: "Conecte com as principais plataformas de e-commerce e meios de pagamento." },
];

const OverviewPage = () => {
  const navigate = useNavigate();
  const [demoOpen, setDemoOpen] = useState(false);
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
        <h2 className="text-2xl font-bold text-foreground mb-5 mt-10">Overview geral</h2>

        <Carousel setApi={setApi} className="w-full mb-4">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="bg-card rounded-2xl border border-border p-6 min-h-[220px] flex flex-col justify-between shadow-sm">
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{slide.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{slide.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-xs">{slide.id}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Slide {slide.id} de {slides.length}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-3 w-8 h-8 bg-card border-border shadow" />
          <CarouselNext className="-right-3 w-8 h-8 bg-card border-border shadow" />
        </Carousel>

        {/* Dot indicators */}
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

        <Button
          onClick={() => navigate("/detail/1")}
          className="w-full rounded-full py-6 text-base font-semibold bg-foreground text-background hover:bg-foreground/90 mb-3"
        >
          Assistir Demo
        </Button>

        <DemoButton onClick={() => setDemoOpen(true)} variant="outline" />
      </div>

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default OverviewPage;
