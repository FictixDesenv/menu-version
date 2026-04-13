import { Button } from "@/components/ui/button";

interface DemoButtonProps {
  onClick?: () => void;
  variant?: "solid" | "outline";
}

const DemoButton = ({ onClick, variant = "solid" }: DemoButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`w-full rounded-md py-6 text-base font-semibold ${
        variant === "outline"
          ? "bg-transparent border-2 border-primary text-primary hover:bg-primary/10"
          : "bg-primary text-primary-foreground hover:bg-primary/90"
      }`}
    >
      Agendar uma Demo
    </Button>
  );
};

export default DemoButton;
