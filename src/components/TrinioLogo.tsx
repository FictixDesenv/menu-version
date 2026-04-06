import logoTrino from "@/assets/logo_trinio.png";

const TrinioLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const heights = { sm: 37, md: 58, lg: 77 };

  return (
    <img
      src={logoTrino}
      alt="Trinio"
      style={{ height: heights[size] }}
      className="object-contain"
    />
  );
};

export default TrinioLogo;
