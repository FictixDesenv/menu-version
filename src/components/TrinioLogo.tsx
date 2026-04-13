import logoTrino from "@/assets/logo_trinio.png";
import logoTrinioHeader from "@/assets/logo_trinio_header.png";

interface TrinioLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "header" | "footer";
  onClick?: () => void;
}

const TrinioLogo = ({ size = "md", variant = "header", onClick }: TrinioLogoProps) => {
  const heights = { sm: 21, md: 32, lg: 42 };
  const widths = { sm: 68, md: 100, lg: 135 };

  const isFooter = variant === "footer";

  return (
    <img
      src={isFooter ? logoTrino : logoTrinioHeader}
      alt="Trinio"
      style={{
        width: widths[size],
        height: heights[size],
        opacity: isFooter ? 0.5 : 1,
      }}
      className={`object-contain ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    />
  );
};

export default TrinioLogo;
