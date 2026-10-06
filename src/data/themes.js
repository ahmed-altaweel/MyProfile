const createThemeVariables = ({
  mainColor,
  mainRgb,
  accentColor,
  accentRgb,
  brandColor = "#00ff37",
  brandRgb = "0 255 55",
  secondaryColor = "#6cc3cf",
  secondaryRgb = "108 195 207",
  bgPrimary = "#000000",
  blackRgb = "0 0 0",
  whiteColor = "#ffffff",
  whiteRgb = "255 255 255",
  pColor = "#8ea397",
  pRgb = "142 163 151",
  warningColor = "#F0EDCF",
  surfaceRgb = "64 162 216",
  inputBgRgb = "3 8 5",
  textOnMain = "#000000",
  particleRgb = null,
  particleDotAlpha = "0.55",
  particleLineAlpha = "0.22",
}) => {
  const pRgbVal = particleRgb || mainRgb;

  return {
    "--bg-primary": bgPrimary,
    "--black_rgb": blackRgb,
    "--white_color": whiteColor,
    "--white_rgb": whiteRgb,

    "--main_color": mainColor,
    "--main_rgb": mainRgb,

    "--accent": accentColor,
    "--accent_rgb": accentRgb,

    "--brand": brandColor,
    "--brand_rgb": brandRgb,

    "--secondary": secondaryColor,
    "--secondary_rgb": secondaryRgb,

    "--p_color": pColor,
    "--p_rgb": pRgb,

    "--warning": warningColor,

    "--surface_rgb": surfaceRgb,
    "--input_bg_rgb": inputBgRgb,

    "--text-on-main": textOnMain,
    "--transparent": "transparent",

    "--particle_rgb": pRgbVal,
    "--particle_dot_alpha": particleDotAlpha,
    "--particle_line_alpha": particleLineAlpha,

    /* Surfaces */
    "--surface-glass": "rgb(var(--surface_rgb) / 0.01)",
    "--surface-solid": "rgb(var(--surface_rgb) / 0.03)",
    "--surface-overlay": "rgb(0 0 0 / 0.92)",
    "--surface-input": "rgb(var(--input_bg_rgb) / 0.45)",
    "--surface-input-focus": "rgb(var(--input_bg_rgb) / 0.7)",

    "--navbar_bg": "rgb(var(--surface_rgb) / 0.72)",

    /* Overlays */
    "--overlay-backdrop": "rgb(var(--black_rgb) / 0.72)",
    "--overlay-backdrop-faded": "rgb(var(--black_rgb) / 1)",
    "--vignette": "rgb(var(--black_rgb) / 0.7)",

    /* Borders */
    "--border-subtle": "rgb(var(--white_rgb) / 0.06)",
    "--border": "rgb(var(--white_rgb) / 0.11)",
    "--border-strong": "rgb(var(--white_rgb) / 0.18)",
    "--border-hover": "color-mix(in srgb, var(--main_color) 20%, transparent)",
    "--border-card": "rgb(var(--white_rgb) / 0.09)",

    /* Lines */
    "--line-1": "rgb(var(--white_rgb) / 0.03)",
    "--line-2": "rgb(var(--white_rgb) / 0.06)",
    "--line-3": "rgb(var(--white_rgb) / 0.10)",

    /* Fills */
    "--fill-1": "rgb(var(--white_rgb) / 0.02)",
    "--fill-2": "rgb(var(--white_rgb) / 0.035)",
    "--fill-3": "rgb(var(--white_rgb) / 0.055)",

    /* Tints */
    "--tint-1": "color-mix(in srgb, var(--secondary) 10%, transparent)",
    "--tint-2": "color-mix(in srgb, var(--main_color) 12%, transparent)",
    "--tint-3": "color-mix(in srgb, var(--main_color) 19%, transparent)",
    "--tint-border": "color-mix(in srgb, var(--main_color) 28%, transparent)",

    /* Text */
    "--text-muted": "rgb(var(--p_rgb) / 0.75)",
    "--text-glow-letter":
      "0 0 calc(var(--p) * 0.4em) color-mix(in srgb, var(--main_color) 45%, transparent)",

    /* Radius */
    "--radius-sm": "8px",
    "--radius-md": "12px",
    "--radius-lg": "16px",
    "--radius-xl": "20px",
    "--radius-pill": "9999px",

    /* Shadows */
    "--shadow-none": "none",

    "--shadow-inset": "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.3)",

    "--shadow-card":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.20), 0 20px 50px rgb(var(--black_rgb) / 0.55)",

    "--shadow-card-hover":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.09), 0 24px 54px rgb(var(--black_rgb) / 0.65), 0 0 36px -6px color-mix(in srgb, var(--main_color) 14%, transparent)",

    "--shadow-sm":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.08), 0 4px 14px rgb(var(--black_rgb) / 0.25)",

    "--shadow-glow":
      "0 4px 14px color-mix(in srgb, var(--brand) 20%, transparent)",

    "--shadow-glow-hover":
      "0 8px 24px color-mix(in srgb, var(--brand) 30%, transparent)",

    "--shadow-overlay":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.1), 0 28px 60px -15px rgb(var(--black_rgb) / 0.75), 0 0 45px -6px color-mix(in srgb, var(--main_color) 16%, transparent)",

    "--shadow-navbar":
      "0 4px 18px rgb(var(--black_rgb) / 0.2), inset 0 1px 0 rgb(var(--white_rgb) / 0.2)",

    "--shadow-focus": "0 0 0 3px rgb(var(--accent_rgb) / 0.12)",

    "--shadow-dot": "0 0 6px var(--brand)",

    /* Gradients */
    "--gradient-specular":
      "linear-gradient(90deg, transparent 0%, rgb(var(--white_rgb) / 0.08) 30%, rgb(var(--white_rgb) / 0.14) 50%, rgb(var(--white_rgb) / 0.08) 70%, transparent 100%)",

    "--hero-glow-gradient":
      "radial-gradient(ellipse at center, color-mix(in srgb, var(--main_color) 5%, transparent) 0%, transparent 70%)",

    "--navbar-sheen":
      "linear-gradient(180deg, rgb(var(--white_rgb) / 0.06) 0%, rgb(var(--white_rgb) / 0.01) 40%, transparent 100%)",

    "--gradient-service-icon":
      "linear-gradient(135deg, rgb(var(--secondary_rgb) / 0.14) 0%, rgb(var(--main_rgb) / 0.16) 100%)",

    "--bg-fx-gradient":
      "radial-gradient(ellipse 60% 45% at 50% 0%, transparent, transparent 70%), radial-gradient(ellipse 80% 80% at 50% 50%, transparent 55%, var(--vignette) 100%)",

    /* Blur */
    "--blur-glass": "blur(16px) saturate(150%)",
    "--blur-soft": "blur(8px)",
    "--blur-overlay": "blur(20px) saturate(150%)",

    /* Animation */
    "--ease-out": "cubic-bezier(0.16, 1, 0.3, 1)",
    "--dur-fast": "0.2s",
    "--dur-base": "0.25s",

    /* Scrollbar */
    "--scrollbar-thumb": "rgb(var(--accent_rgb) / 0.35)",
    "--scrollbar-thumb-hover": "var(--accent)",
  };
};

export const colorThemes = {
  obsidianCerulean: {
    id: "obsidianCerulean",

    name: "Obsidian & Green",
    nameAr: "أسود فحمي وأخضر",

    previewColor: "#34d36b",
    bgPreview: "#000000",

    variables: createThemeVariables({
      // Primary
      mainColor: "#00ff37",
      mainRgb: "0 255 55",

      // Accent
      accentColor: "#40A2D8",
      accentRgb: "64 162 216",

      // Brand
      brandColor: "#00ff37",
      brandRgb: "0 255 55",

      // Secondary
      secondaryColor: "#6cc3cf",
      secondaryRgb: "108 195 207",

      // Background
      bgPrimary: "#000000",
      blackRgb: "0 0 0",

      // White
      whiteColor: "#f5f5f5",
      whiteRgb: "255 255 255",

      // Paragraph / Muted text
      pColor: "#a0a0a0",
      pRgb: "160 160 160",

      // Warning
      warningColor: "#F0EDCF",

      // Surface
      surfaceRgb: "64 162 216",

      // Input
      inputBgRgb: "0 0 0",

      // Text on primary color
      textOnMain: "#000000",

      // Particles
      particleRgb: "0 255 55",
      particleDotAlpha: "0.35",
      particleLineAlpha: "0.12",
    }),
  },
};

export const defaultThemeId = "obsidianCerulean";
