import { useState } from "react";
import { useParams } from "react-router-dom";
import TrinioHeader from "@/components/TrinioHeader";
import DemoButton from "@/components/DemoButton";
import DemoModal from "@/components/DemoModal";
import { Play } from "lucide-react";

const DetailPage = () => {
  const { id } = useParams();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TrinioHeader />

      <div className="px-5 flex-1 flex flex-col">
        <h2 className="text-2xl font-bold text-foreground mb-5">Funcionalidade {id}</h2>

        {/* Video placeholder */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden mb-6 shadow-sm">
          <div className="aspect-video bg-muted flex items-center justify-center relative">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary transition">
              <Play className="w-7 h-7 text-primary-foreground ml-1" />
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
              <div className="h-1 flex-1 bg-border rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-primary rounded-full" />
              </div>
              <span className="text-xs text-muted-foreground">2:30</span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-foreground mb-1">Demo da funcionalidade</h3>
            <p className="text-sm text-muted-foreground">
              Veja como essa funcionalidade pode otimizar suas operações e aumentar suas conversões.
            </p>
          </div>
        </div>

        <div className="mt-auto pb-8">
          <DemoButton onClick={() => setDemoOpen(true)} />
        </div>
      </div>

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default DetailPage;
