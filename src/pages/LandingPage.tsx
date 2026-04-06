import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-[1.2rem] text-center"
      style={{ backgroundColor: "hsl(270, 40%, 92%)" }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-[2.4rem] leading-[1.05] font-normal text-foreground -mb-[0.8px]">
          Checkout de
        </h1>
        <h1 className="text-[2.4rem] leading-[1.05] font-extrabold text-foreground mb-[1.2rem]">
          alta conversão
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Descubra como o Trinio OS pode<br />transformar seus resultado
        </p>

        <button
          onClick={() => navigate("/menu")}
          className="w-full max-w-xs rounded-full py-4 text-lg font-semibold text-primary-foreground shadow-lg bg-primary hover:bg-primary/90 transition-colors"
        >
          Toque para começar
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
