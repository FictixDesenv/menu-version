import logoTrino from "@/assets/logo_trinio.png";

interface TrinioLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "color" | "footer";
  onClick?: () => void;
}

const TrinioLogo = ({ size = "md", variant = "color", onClick }: TrinioLogoProps) => {
  const heights = { sm: 21, md: 32, lg: 42 };
  const widths = { sm: 68, md: 100, lg: 135 };

  return (
    <img
      src={logoTrino}
      alt="Trinio"
      style={{
        width: widths[size],
        height: heights[size],
        opacity: variant === "footer" ? 0.5 : 1,
        filter: variant === "footer" ? "brightness(0) invert(1)" : "none",
      }}
      className={`object-contain ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    />
  );
};

export default TrinioLogo;
