import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TrinioLogo from "./TrinioLogo";

const TrinioHeader = ({ showBack = true }: { showBack?: boolean }) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-5 py-4">
      {showBack ? (
        <button onClick={() => navigate(-1)} className="p-1 rounded-full hover:bg-muted transition">
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
      ) : (
        <div className="w-8" />
      )}
      <TrinioLogo size="sm" />
      <div className="w-8" />
    </header>
  );
};

export default TrinioHeader;
