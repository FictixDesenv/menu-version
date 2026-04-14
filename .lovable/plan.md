

## Bypass da senha em localhost

Alterar `src/components/PasswordGate.tsx` para detectar se o app está rodando em `localhost` (ou `127.0.0.1`) e pular a autenticação automaticamente.

### Mudança

**`src/components/PasswordGate.tsx`** — no estado inicial de `authenticated`:

```tsx
const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

const [authenticated, setAuthenticated] = useState(
  () => isLocalhost || sessionStorage.getItem("trinio-auth") === "1"
);
```

Se `hostname` for `localhost` ou `127.0.0.1`, o gate é ignorado e o app abre direto. Em qualquer outro domínio (preview Lovable, domínio publicado, TV), a senha continua sendo exigida.

