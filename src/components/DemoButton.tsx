import { Button } from "@/components/ui/button";

interface DemoButtonProps {
  onClick?: () => void;
  variant?: "solid" | "outline";
}

const DemoButton = ({ onClick, variant = "solid" }: DemoButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`w-full rounded-full py-6 text-base font-semibold ${
        variant === "outline"
          ? "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
      }`}
    >
      Agendar uma Demo
    </Button>
  );
};

export default DemoButton;
