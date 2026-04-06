import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { personas, Persona } from "@/data/personas";
import { Monitor, ShoppingCart, DollarSign, Rocket } from "lucide-react";
import logoTrino from "@/assets/logo_trinio.png";

const personaIcons: Record<string, React.ReactNode> = {
  cto: <Monitor className="w-6 h-6" />,
  ecommerce: <ShoppingCart className="w-6 h-6" />,
  cfo: <DollarSign className="w-6 h-6" />,
  produto: <Rocket className="w-6 h-6" />,
};

const SplashPage = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleClick = (persona: Persona) => {
    setSelectedId(persona.id);
    setTimeout(() => {
      navigate("/landing", { state: { persona } });
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top Zone (~20%) — logo */}
      <div className="flex items-center justify-center pt-12 pb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={logoTrino} alt="Trinio" className="h-10 object-contain" />
        </motion.div>
      </div>

      {/* Middle Zone (~60%) — ALL interactive content */}
      <div className="flex-1 flex flex-col px-6">
        {/* Header */}
        <div className="mb-6">
          <motion.h1
            className="text-3xl font-extrabold text-foreground mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Quem você é?
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Descubra como o Trinio OS pode transformar seus resultados
          </motion.p>
        </div>

        {/* Persona Cards */}
        <div className="flex flex-col gap-3 mb-8">
          {personas.map((persona, index) => {
            const isSelected = selectedId === persona.id;
            return (
              <motion.button
                key={persona.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: isSelected ? 0.97 : 1,
                }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                onClick={() => handleClick(persona)}
                className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-colors ${
                  isSelected
                    ? "bg-primary/10 border-primary shadow-md"
                    : "bg-card border-border hover:border-primary/40 hover:shadow-sm"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {personaIcons[persona.id]}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {persona.name}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {persona.subtitle}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={() => navigate("/landing")}
          className="w-full rounded-full py-4 text-base font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
        >
          Agendar uma Demo
        </motion.button>
      </div>

      {/* Bottom Zone (~20%) — non-interactive */}
      <div className="flex items-center justify-center py-8">
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.3, 0.5] }}
          transition={{ delay: 1.5, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Toque para começar
        </motion.p>
      </div>
    </div>
  );
};

export default SplashPage;
