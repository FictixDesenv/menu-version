

## Trinio OS - Mobile Prototype

Based on the 9 uploaded screens, here is the flow and build plan for this mobile-first prototype.

### Screen Flow

```text
Splash (logo + waves) → Landing (hero CTA) → Menu (5 cards) → Overview (carousel) → Detail (video) → Demo modal (QR)
```

### Screens Breakdown

1. **Splash** - Trinio logo centered, decorative purple/pink wave curves on light purple bg
2. **Hero/Landing** - "Checkout de alta conversao" heading, subtitle, orange rounded CTA button
3. **Menu** - Logo top, "Conheca a Trinio OS" heading, 5 feature cards (1 full-width + 2x2 grid), purple "Agendar uma Demo" button
4. **Overview (carousel x4)** - Back arrow + logo header, "Overview geral" title, card carousel with prev/next arrows, dot indicators, "Assistir Demo" black button, purple "Agendar uma Demo" outline button
5. **Feature Detail** - Header with back + logo, "Funcionalidade 1" title, video placeholder card, "Agendar uma Demo" button
6. **Demo Modal** - Dialog overlay with QR code, "Escanei o QR Code" subtitle, close X button

### Design Tokens

- **Background**: light purple (~#EDE7F6 / lavender)
- **Primary accent**: orange-red (#F4511E) for CTAs and icons
- **Secondary accent**: purple (#7E57C2) for "Agendar" buttons
- **Cards**: white with subtle border/rounded corners
- **Text**: black headings, gray subtitles
- **Mobile-first**: max-width ~430px centered

### Implementation Plan

1. **Update CSS variables** in `index.css` for the Trinio color palette
2. **Create shared components**: `TrinioHeader` (back arrow + logo), `DemoButton` (purple outline)
3. **Build pages**:
   - `SplashPage` - animated logo with wave SVG bg, auto-navigates after 2s
   - `LandingPage` - hero text + orange CTA, navigates to Menu
   - `MenuPage` - feature cards grid, each card links to Overview with category param
   - `OverviewPage` - carousel (using existing shadcn Carousel), navigates to Detail on "Assistir Demo"
   - `DetailPage` - video placeholder + demo button
4. **Add `DemoModal`** component using shadcn Dialog with placeholder QR code
5. **Update `App.tsx`** with routes: `/`, `/landing`, `/menu`, `/overview`, `/detail/:id`
6. **Add QR code** generation via `qrcode.react` library

### Technical Details

- Use React Router for navigation between screens
- Carousel built with existing shadcn/ui `Carousel` component
- Wave decorations on splash as inline SVG paths
- All screens wrapped in a mobile container (max-w-md, mx-auto, min-h-screen)
- Trinio logo rendered as text + styled SVG icon (the "T" symbol)

