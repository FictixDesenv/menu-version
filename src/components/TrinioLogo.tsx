import logoTrino from "@/assets/logo_trinio.png";

const TrinioLogo = ({ size = "md", onClick }: { size?: "sm" | "md" | "lg"; onClick?: () => void }) => {
  const heights = { sm: 39, md: 58, lg: 77 };

  return (
    <img
      src={logoTrino}
      alt="Trinio"
      style={{ width: 160, height: 50 }}
      className={`object-contain ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    />
  );
};

export default TrinioLogo;
