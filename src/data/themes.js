/**
 * Theme & Color Palette System
 *
 * All colors, opacities, gradients, radii, motion, and shadows across the entire
 * portfolio are strictly defined here. Editing a variable here updates the site globally.
 *
 * VARIABLE GROUPS:
 * 1. Base Colors & Triplets: Raw hex codes and space-separated RGB triplets for alpha channels.
 * 2. Semantic Surfaces: Translucent glass bases, solid surfaces, overlays, and input styling.
 * 3. Semantic Borders, Lines & Fills: Accent borders, white hairlines, and translucent fills.
 * 4. Main Tints & Text: Brand color-mix tints and typography helpers.
 * 5. Radius Tokens: Unified geometric corner radii (sm, md, lg, xl, pill).
 * 6. Shadows & Elevations: Insets, card drop shadows, luminous brand glows, and overlays.
 * 7. Gradients & FX: Specular highlights, hero glows, and background vignettes.
 * 8. Blur & Motion: Standardized backdrop blurs, transition curves, and durations.
 * 9. Scrollbar Tokens: Thumb colors and hover states.
 */

const createThemeVariables = ({
  mainColor,
  mainRgb,
  accentColor,
  accentRgb,
  bgPrimary = "#000000",
  blackRgb = "0 0 0",
  whiteColor = "#ffffff",
  whiteRgb = "255 255 255",
  pColor = "#aad2e6",
  pRgb = "170 210 230",
  warningColor = "#F0EDCF",
  surfaceRgb = "6 13 26",
  inputBgRgb = "4 9 18",
  textOnMain = "#000000",
  particleRgb = null,
  particleDotAlpha = "0.55",
  particleLineAlpha = "0.22",
}) => {
  const pRgbVal = particleRgb || mainRgb;

  return {
    // -------------------------------------------------------------------------
    // 1. BASE COLORS & RGB TRIPLETS
    // -------------------------------------------------------------------------
    "--bg-primary": bgPrimary,
    "--black_rgb": blackRgb,
    "--white_color": whiteColor,
    "--white_rgb": whiteRgb,
    "--main_color": mainColor,
    "--main_rgb": mainRgb,
    "--accent": accentColor,
    "--accent_rgb": accentRgb,
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

    // -------------------------------------------------------------------------
    // 2. SEMANTIC SURFACES
    // -------------------------------------------------------------------------
    "--surface-glass": "rgb(var(--surface_rgb) / 0.34)",
    "--surface-solid": "rgb(var(--surface_rgb) / 0.65)",
    "--surface-overlay": "rgb(var(--surface_rgb) / 0.92)",
    "--surface-input": "rgb(var(--input_bg_rgb) / 0.45)",
    "--surface-input-focus": "rgb(var(--input_bg_rgb) / 0.7)",
    "--navbar_bg": "rgb(var(--surface_rgb) / 0.72)",
    "--overlay-backdrop": "rgb(var(--black_rgb) / 0.72)",
    "--overlay-backdrop-faded": "rgb(var(--black_rgb) / 0)",
    "--vignette": "rgb(var(--black_rgb) / 0.55)",

    // -------------------------------------------------------------------------
    // 3. SEMANTIC BORDERS, LINES & FILLS
    // -------------------------------------------------------------------------
    "--border-subtle": "rgb(var(--accent_rgb) / 0.12)",
    "--border": "rgb(var(--accent_rgb) / 0.22)",
    "--border-strong": "rgb(var(--accent_rgb) / 0.3)",
    "--border-hover": "rgb(var(--accent_rgb) / 0.42)",
    "--border-card": "rgb(var(--accent_rgb) / 0.18)",

    "--line-1": "rgb(var(--white_rgb) / 0.04)",
    "--line-2": "rgb(var(--white_rgb) / 0.08)",
    "--line-3": "rgb(var(--white_rgb) / 0.14)",

    "--fill-1": "rgb(var(--white_rgb) / 0.03)",
    "--fill-2": "rgb(var(--white_rgb) / 0.05)",
    "--fill-3": "rgb(var(--white_rgb) / 0.08)",

    // -------------------------------------------------------------------------
    // 4. MAIN TINTS & SEMANTIC TEXT
    // -------------------------------------------------------------------------
    "--tint-1": "color-mix(in srgb, var(--main_color) 8%, transparent)",
    "--tint-2": "color-mix(in srgb, var(--main_color) 14%, transparent)",
    "--tint-3": "color-mix(in srgb, var(--main_color) 22%, transparent)",
    "--tint-border": "color-mix(in srgb, var(--main_color) 30%, transparent)",
    "--text-muted": "rgb(var(--p_rgb) / 0.75)",
    "--text-glow-letter":
      "0 0 calc(var(--p) * 0.4em) color-mix(in srgb, var(--main_color) 55%, transparent)",

    // -------------------------------------------------------------------------
    // 5. RADIUS
    // -------------------------------------------------------------------------
    "--radius-sm": "8px",
    "--radius-md": "12px",
    "--radius-lg": "16px",
    "--radius-xl": "20px",
    "--radius-pill": "9999px",

    // -------------------------------------------------------------------------
    // 6. SHADOWS
    // -------------------------------------------------------------------------
    "--shadow-none": "none",
    "--shadow-inset": "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.08)",
    "--shadow-card":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.09), 0 20px 50px rgb(var(--black_rgb) / 0.55), 0 0 32px -4px rgb(var(--accent_rgb) / 0.16)",
    "--shadow-card-hover":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.14), 0 24px 54px rgb(var(--black_rgb) / 0.65), 0 0 36px -4px rgb(var(--accent_rgb) / 0.24)",
    "--shadow-sm":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.08), 0 4px 14px rgb(var(--black_rgb) / 0.25)",
    "--shadow-glow":
      "0 4px 14px color-mix(in srgb, var(--main_color) 25%, transparent)",
    "--shadow-glow-hover":
      "0 8px 24px color-mix(in srgb, var(--main_color) 38%, transparent)",
    "--shadow-overlay":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.1), 0 28px 60px -15px rgb(var(--black_rgb) / 0.75), 0 0 45px -6px color-mix(in srgb, var(--main_color) 22%, transparent)",
    "--shadow-navbar":
      "0 4px 18px rgb(var(--black_rgb) / 0.2), inset 0 1px 0 rgb(var(--white_rgb) / 0.2)",
    "--shadow-focus": "0 0 0 3px rgb(var(--accent_rgb) / 0.12)",
    "--shadow-dot": "0 0 6px var(--main_color)",

    // -------------------------------------------------------------------------
    // 7. GRADIENTS
    // -------------------------------------------------------------------------
    "--gradient-specular":
      "linear-gradient(90deg, transparent 0%, rgb(var(--white_rgb) / 0.12) 30%, rgb(var(--accent_rgb) / 0.3) 50%, rgb(var(--white_rgb) / 0.12) 70%, transparent 100%)",
    "--hero-glow-gradient":
      "radial-gradient(ellipse at center, color-mix(in srgb, var(--main_color) 14%, transparent) 0%, transparent 70%)",
    "--navbar-sheen":
      "linear-gradient(180deg, rgb(var(--white_rgb) / 0.06) 0%, rgb(var(--white_rgb) / 0.01) 40%, transparent 100%)",
    "--gradient-service-icon":
      "linear-gradient(135deg, rgb(var(--accent_rgb) / 0.2) 0%, rgb(var(--main_rgb) / 0.28) 100%)",
    "--bg-fx-gradient":
      "radial-gradient(ellipse 60% 45% at 50% 0%, color-mix(in srgb, var(--main_color) 5%, transparent), transparent 70%), radial-gradient(ellipse 80% 80% at 50% 50%, transparent 55%, var(--vignette) 100%)",

    // -------------------------------------------------------------------------
    // 8. BLUR & MOTION
    // -------------------------------------------------------------------------
    "--blur-glass": "blur(16px) saturate(150%)",
    "--blur-soft": "blur(8px)",
    "--blur-overlay": "blur(20px) saturate(150%)",
    "--ease-out": "cubic-bezier(0.16, 1, 0.3, 1)",
    "--dur-fast": "0.2s",
    "--dur-base": "0.25s",

    // -------------------------------------------------------------------------
    // 9. SCROLLBAR
    // -------------------------------------------------------------------------
    "--scrollbar-thumb": "rgb(var(--accent_rgb) / 0.3)",
    "--scrollbar-thumb-hover": "var(--accent)",
  };
};

export const colorThemes = {
  // Primary: Obsidian Jet & Electric Cerulean (Default Theme)
  obsidianCerulean: {
    id: "obsidianCerulean",
    name: "Obsidian & Electric Cerulean",
    nameAr: "أسود فحمي وأزرق سيروليان",
    previewColor: "#40A2D8",
    bgPreview: "#000000",
    variables: createThemeVariables({
      mainColor: "#00ff37",
      mainRgb: "0 255 55",
      accentColor: "#40A2D8",
      accentRgb: "64 162 216",
      bgPrimary: "#000000",
      blackRgb: "0 0 0",
      whiteColor: "#ffffff",
      whiteRgb: "255 255 255",
      pColor: "#aad2e6",
      pRgb: "170 210 230",
      warningColor: "#F0EDCF",
      surfaceRgb: "6 13 26",
      inputBgRgb: "4 9 18",
      textOnMain: "#000000",
      particleRgb: "0 255 55",
      particleDotAlpha: "0.55",
      particleLineAlpha: "0.22",
    }),
  },

  // Secondary: Emerald Night
  emeraldNight: {
    id: "emeraldNight",
    name: "Emerald Night",
    nameAr: "زمردي ليلي",
    previewColor: "#10b981",
    bgPreview: "#030712",
    variables: createThemeVariables({
      mainColor: "#10b981",
      mainRgb: "16 185 129",
      accentColor: "#34d399",
      accentRgb: "52 211 153",
      bgPrimary: "#030712",
      blackRgb: "0 0 0",
      whiteColor: "#ffffff",
      whiteRgb: "255 255 255",
      pColor: "#9ca3af",
      pRgb: "156 163 175",
      warningColor: "#fef08a",
      surfaceRgb: "10 20 28",
      inputBgRgb: "5 12 18",
      textOnMain: "#000000",
      particleRgb: "16 185 129",
      particleDotAlpha: "0.55",
      particleLineAlpha: "0.22",
    }),
  },
};

export const defaultThemeId = "obsidianCerulean";
