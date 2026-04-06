import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TrinioLogo from "@/components/TrinioLogo";
import DemoButton from "@/components/DemoButton";
import DemoModal from "@/components/DemoModal";
import { Scissors, ShoppingCart, DollarSign, Antenna } from "lucide-react";

const MenuPage = () => {
  const navigate = useNavigate();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white px-5 pb-8">
      {/* Logo */}
      <div className="pt-10 pb-8 flex justify-center">
        <TrinioLogo size="md" />
      </div>

      {/* Title */}
      <h2 className="text-[1.65rem] font-bold text-foreground text-center leading-tight">
        Conheça a Trinio OS
      </h2>
      <p className="text-muted-foreground text-base text-center mt-2 mb-6 leading-relaxed">
        Descubra como podemos<br />transformar seus resultado
      </p>

      {/* Full-width card */}
      <button
        onClick={() => navigate("/overview")}
        className="w-full bg-white rounded-2xl p-5 mb-3 border border-border text-center shadow-sm hover:shadow-md transition-shadow"
      >
        <Antenna className="w-7 h-7 text-primary mx-auto mb-2" />
        <h3 className="font-semibold text-primary text-base">O que é o Trinio OS?</h3>
        <p className="text-muted-foreground text-sm mt-0.5">Vendas & Conversão</p>
      </button>

      {/* 2x2 grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <button
          onClick={() => navigate("/overview")}
          className="bg-white rounded-2xl p-4 border border-border text-center shadow-sm hover:shadow-md transition-shadow"
        >
          <ShoppingCart className="w-6 h-6 text-primary mx-auto mb-2" />
          <h3 className="font-semibold text-primary text-sm">Mais receita</h3>
          <p className="text-muted-foreground text-xs mt-0.5">Vendas & Conversão</p>
        </button>

        <button
          onClick={() => navigate("/overview")}
          className="bg-white rounded-2xl p-4 border border-border text-center shadow-sm hover:shadow-md transition-shadow"
        >
          <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
          <h3 className="font-semibold text-primary text-sm">Mais margem</h3>
          <p className="text-muted-foreground text-xs mt-0.5">Finanças & Resultado</p>
        </button>

        <button
          onClick={() => navigate("/overview")}
          className="bg-white rounded-2xl p-4 border border-border text-center shadow-sm hover:shadow-md transition-shadow"
        >
          <Scissors className="w-6 h-6 text-primary mx-auto mb-2" />
          <h3 className="font-semibold text-primary text-sm">Mais experiência</h3>
          <p className="text-muted-foreground text-xs mt-0.5">Experiência & Inovação</p>
        </button>

        <button
          onClick={() => navigate("/overview")}
          className="bg-white rounded-2xl p-4 border border-border text-center shadow-sm hover:shadow-md transition-shadow"
        >
          <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
          <h3 className="font-semibold text-primary text-sm">Cases</h3>
          <p className="text-muted-foreground text-xs mt-0.5">Tecnologia & Arquitetura</p>
        </button>
      </div>

      {/* Demo button */}
      <DemoButton onClick={() => setDemoOpen(true)} />

      {/* Bottom text */}
      <p className="text-muted-foreground text-sm text-center mt-4">
        Toque para começar
      </p>

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default MenuPage;
