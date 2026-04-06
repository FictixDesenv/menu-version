import { useNavigate } from "react-router-dom";
import TrinioLogo from "@/components/TrinioLogo";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background px-6">
      <div className="pt-12 pb-8">
        <TrinioLogo size="sm" />
      </div>

      <div className="flex-1 flex flex-col justify-center -mt-20">
        <h1 className="text-4xl font-extrabold leading-tight text-foreground mb-4">
          Checkout de<br />alta conversão
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-xs">
          Conheça a solução completa que vai transformar suas vendas online com tecnologia de ponta.
        </p>

        <Button
          onClick={() => navigate("/menu")}
          className="w-full rounded-full py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
        >
          Conhecer a Trinio OS
        </Button>
      </div>

      {/* Decorative dots */}
      <div className="flex justify-center gap-2 pb-8">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="w-2 h-2 rounded-full bg-border" />
        <div className="w-2 h-2 rounded-full bg-border" />
      </div>
    </div>
  );
};

export default LandingPage;
