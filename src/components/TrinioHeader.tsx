import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TrinioLogo from "./TrinioLogo";

const TrinioHeader = ({ showBack = true }: { showBack?: boolean }) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-12 pt-12 pb-4">
      {showBack ? (
        <button onClick={() => navigate(-1)} className="p-3 rounded-full hover:bg-muted transition">
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
      ) : (
        <div className="w-10" />
      )}
      <TrinioLogo size="sm" onClick={() => navigate("/menu")} />
      <div className="w-10" />
    </header>
  );
};

export default TrinioHeader;
