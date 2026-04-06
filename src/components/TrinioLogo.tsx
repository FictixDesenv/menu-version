const TrinioLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 40, text: "text-2xl" },
    lg: { icon: 56, text: "text-4xl" },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2">
      <div
        className="rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-extrabold"
        style={{ width: s.icon, height: s.icon, fontSize: s.icon * 0.5 }}
      >
        T
      </div>
      <span className={`font-bold tracking-tight text-foreground ${s.text}`}>
        trinio<span className="text-primary">.</span>
      </span>
    </div>
  );
};

export default TrinioLogo;
