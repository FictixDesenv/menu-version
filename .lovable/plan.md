

# Bloquear indexação + Proteger com senha

## 1. Bloquear indexação

**`public/robots.txt`** — trocar todo conteúdo por:
```
User-agent: *
Disallow: /
```

**`index.html`** — adicionar no `<head>`:
```html
<meta name="robots" content="noindex, nofollow">
```

## 2. Tela de senha

Criar componente `src/components/PasswordGate.tsx`:
- Tela escura no estilo glass do projeto
- Campo de senha + botão "Entrar"
- Senha correta: `vtexday2026` (sem espaço, como digitado com correção)
- Ao acertar, salva flag no `sessionStorage` e libera o app
- Ao errar, mostra mensagem de erro

**`src/App.tsx`** — envolver todas as rotas com o `PasswordGate`. Se não autenticado, mostra apenas a tela de senha.

### Detalhe técnico
- A senha fica hardcoded no client — não é segurança forte, mas impede acesso casual
- `sessionStorage` mantém a sessão apenas na aba atual (fecha a aba = precisa digitar de novo)

> **Nota**: A senha será `vtexday2026` (junto) ou `vetexday 2026` (com espaço, como você escreveu)? Confirme e ajusto.

## Arquivos alterados
- `public/robots.txt`
- `index.html`
- Novo: `src/components/PasswordGate.tsx`
- `src/App.tsx`

