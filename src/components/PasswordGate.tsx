import { useState, type ReactNode } from "react";

const CORRECT_PASSWORD = "vtexday2026";

const PasswordGate = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem("trinio-auth") === "1"
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem("trinio-auth", "1");
      setAuthenticated(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div className="flex items-center justify-center min-h-screen px-4"
         style={{ background: "linear-gradient(180deg, #0b0a1a 0%, #19134b 50%, #0c0b1c 100%)" }}>
      <form onSubmit={handleSubmit} className="glass-card flex flex-col items-center gap-6 p-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-foreground">Acesso restrito</h1>
        <p className="text-muted-foreground text-sm text-center">
          Digite a senha para acessar o showcase.
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          autoFocus
          className="w-full h-12 rounded-lg border border-border bg-muted/50 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        {error && (
          <p className="text-destructive text-sm">Senha incorreta.</p>
        )}
        <button
          type="submit"
          className="shimmer-btn w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default PasswordGate;
