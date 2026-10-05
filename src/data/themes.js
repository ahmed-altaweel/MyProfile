/**
 * Theme & Color Palette System
 *
 * All colors, opacities, gradients, and shadows across the entire portfolio
 * are strictly defined here. Editing a variable here updates the site globally.
 *
 * VARIABLE GROUPS:
 * 1. Base Colors & Triplets: Raw hex codes and space-separated RGB triplets for alpha channels.
 * 2. Semantic Surfaces: Translucent glass bases, card backgrounds, modal backdrops, and input surfaces.
 * 3. Semantic Borders & Hairlines: Borders, hovers, dividers, and specular hairline highlights.
 * 4. Semantic Text & Tints: Typographic colors and tinted accent overlays.
 * 5. Gradients: Specular light sheens, icon gradients, and background vignettes.
 * 6. Shadows: Inset highlights, atmospheric card drop shadows, button glows, and modal elevations.
 * 7. Particle FX: RGB triplet and alpha parameters for canvas particles.
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
  warningRgb = "240 237 207",
  cardBorderRgb = "0 255 136",
  surfaceRgb = "6 13 26",
  surfaceDeepRgb = "7 14 27",
  inputBgRgb = "4 9 18",
  inputBgFocusRgb = "6 14 26",
  emptyBgRgb = "8 16 28",
  secondaryBlueRgb = "11 96 176",
  navbarBg = "oklch(28% 0 0 / .72)",
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
    "--warning_rgb": warningRgb,
    "--secondary_blue_rgb": secondaryBlueRgb,
    "--card_border_rgb": cardBorderRgb,
    "--surface_rgb": surfaceRgb,
    "--surface_deep_rgb": surfaceDeepRgb,
    "--input_bg_rgb": inputBgRgb,
    "--input_bg_focus_rgb": inputBgFocusRgb,
    "--empty_bg_rgb": emptyBgRgb,
    "--navbar_bg": navbarBg,
    "--text-on-main": textOnMain,
    "--text-primary": whiteColor,
    "--transparent": "transparent",
    "--particle_rgb": pRgbVal,
    "--particle_dot_alpha": particleDotAlpha,
    "--particle_line_alpha": particleLineAlpha,

    // -------------------------------------------------------------------------
    // 2. SEMANTIC SURFACES
    // -------------------------------------------------------------------------
    "--surface-glass": "rgb(var(--surface_rgb) / 0.34)",
    "--surface-button": "rgb(var(--surface_rgb) / 0.65)",
    "--surface-menu": "rgb(var(--surface_rgb) / 0.88)",
    "--surface-scrollcue": "rgb(var(--surface_rgb) / 0.45)",
    "--surface-modal": "rgb(var(--surface_deep_rgb) / 0.94)",
    "--surface-modal-box": "rgb(var(--surface_rgb) / 0.55)",
    "--surface-input": "rgb(var(--input_bg_rgb) / 0.45)",
    "--surface-input-focus": "rgb(var(--input_bg_focus_rgb) / 0.7)",
    "--surface-code": "rgb(var(--input_bg_rgb) / 0.6)",
    "--surface-empty": "rgb(var(--empty_bg_rgb) / 0.25)",
    "--surface-metric-card":
      "color-mix(in srgb, var(--main_color) 6%, rgb(var(--surface_rgb) / 0.6))",
    "--overlay-backdrop": "rgb(var(--black_rgb) / 0.72)",
    "--overlay-backdrop-faded": "rgb(var(--black_rgb) / 0)",
    "--vignette": "rgb(var(--black_rgb) / 0.55)",

    // -------------------------------------------------------------------------
    // 3. SEMANTIC BORDERS & HAIRLINES
    // -------------------------------------------------------------------------
    "--border-card": "rgb(var(--card_border_rgb) / 0.18)",
    "--border-card-hover": "rgb(var(--accent_rgb) / 0.42)",
    "--border-soft": "rgb(var(--accent_rgb) / 0.12)",
    "--border-default": "rgb(var(--accent_rgb) / 0.22)",
    "--border-strong": "rgb(var(--accent_rgb) / 0.3)",
    "--border-hover": "rgb(var(--accent_rgb) / 0.42)",
    "--border-service-hover": "rgb(var(--accent_rgb) / 0.45)",
    "--border-menu": "rgb(var(--accent_rgb) / 0.25)",
    "--border-divider": "rgb(var(--accent_rgb) / 0.25)",
    "--border-row-hover": "rgb(var(--accent_rgb) / 0.22)",
    "--border-image": "rgb(var(--accent_rgb) / 0.28)",
    "--border-badge": "rgb(var(--accent_rgb) / 0.18)",
    "--border-bottom-row": "rgb(var(--accent_rgb) / 0.14)",
    "--border-section": "rgb(var(--white_rgb) / 0.08)",
    "--border-color": "rgb(var(--accent_rgb) / 0.22)",

    // White Hairline highlights
    "--hairline-xs": "rgb(var(--white_rgb) / 0.025)",
    "--hairline-empty": "rgb(var(--white_rgb) / 0.04)",
    "--hairline-sm": "rgb(var(--white_rgb) / 0.05)",
    "--hairline-md": "rgb(var(--white_rgb) / 0.06)",
    "--hairline-lg": "rgb(var(--white_rgb) / 0.07)",
    "--hairline-xl": "rgb(var(--white_rgb) / 0.08)",
    "--hairline-2xl": "rgb(var(--white_rgb) / 0.09)",
    "--hairline-3xl": "rgb(var(--white_rgb) / 0.1)",
    "--hairline-hover": "rgb(var(--white_rgb) / 0.14)",
    "--hairline-strong": "rgb(var(--white_rgb) / 0.2)",

    // -------------------------------------------------------------------------
    // 4. SEMANTIC TEXT & TINTS
    // -------------------------------------------------------------------------
    "--text-heading": "var(--white_color)",
    "--text-body": "var(--p_color)",
    "--text-muted": "rgb(var(--p_rgb) / 0.75)",
    "--text-dim": "rgb(var(--p_rgb) / 0.45)",
    "--text-faint": "rgb(var(--p_rgb) / 0.4)",
    "--text-on-accent": textOnMain,

    // Accent Tints
    "--tint-badge": "rgb(var(--accent_rgb) / 0.07)",
    "--tint-xs": "rgb(var(--accent_rgb) / 0.08)",
    "--tint-sm": "rgb(var(--accent_rgb) / 0.12)",
    "--tint-button-border": "rgb(var(--accent_rgb) / 0.14)",
    "--tint-icon-sheen-hover": "rgb(var(--accent_rgb) / 0.14)",
    "--tint-glow": "rgb(var(--accent_rgb) / 0.16)",
    "--tint-md": "rgb(var(--accent_rgb) / 0.22)",

    // White Tints
    "--white-tint-xs": "rgb(var(--white_rgb) / 0.02)",
    "--white-tint-sm": "rgb(var(--white_rgb) / 0.025)",
    "--white-tint-md": "rgb(var(--white_rgb) / 0.04)",
    "--white-tint-lg": "rgb(var(--white_rgb) / 0.05)",
    "--white-tint-xl": "rgb(var(--white_rgb) / 0.08)",

    // Scrollbar
    "--scrollbar-thumb": "rgb(var(--accent_rgb) / 0.3)",
    "--scrollbar-thumb-hover": "var(--accent)",

    // -------------------------------------------------------------------------
    // 5. GRADIENTS
    // -------------------------------------------------------------------------
    "--hero-glow-gradient":
      "radial-gradient(ellipse at center, color-mix(in srgb, var(--main_color) 14%, transparent) 0%, transparent 70%)",
    "--navbar-sheen":
      "linear-gradient(180deg, rgb(var(--white_rgb) / 0.06) 0%, rgb(var(--white_rgb) / 0.01) 40%, transparent 100%)",
    "--gradient-specular-footer":
      "linear-gradient(90deg, transparent 0%, rgb(var(--white_rgb) / 0.12) 30%, color-mix(in srgb, var(--main_color) 45%, transparent) 50%, rgb(var(--white_rgb) / 0.12) 70%, transparent 100%)",
    "--gradient-specular-modal":
      "linear-gradient(90deg, transparent 0%, rgb(var(--white_rgb) / 0.12) 30%, color-mix(in srgb, var(--main_color) 50%, transparent) 50%, rgb(var(--white_rgb) / 0.12) 70%, transparent 100%)",
    "--gradient-specular-about":
      "linear-gradient(90deg, transparent 0%, rgb(var(--white_rgb) / 0.12) 30%, rgb(var(--accent_rgb) / 0.3) 50%, rgb(var(--white_rgb) / 0.12) 70%, transparent 100%)",
    "--gradient-specular-services":
      "linear-gradient(90deg, transparent 0%, rgb(var(--white_rgb) / 0.1) 30%, rgb(var(--accent_rgb) / 0.3) 50%, rgb(var(--white_rgb) / 0.1) 70%, transparent 100%)",
    "--gradient-specular-principles":
      "linear-gradient(90deg, transparent 0%, rgb(var(--white_rgb) / 0.08) 30%, rgb(var(--accent_rgb) / 0.25) 50%, rgb(var(--white_rgb) / 0.08) 70%, transparent 100%)",
    "--gradient-service-icon":
      "linear-gradient(135deg, rgb(var(--accent_rgb) / 0.2) 0%, rgb(var(--secondary_blue_rgb) / 0.28) 100%)",
    "--bg-fx-gradient":
      "radial-gradient(ellipse 60% 45% at 50% 0%, color-mix(in srgb, var(--main_color) 5%, transparent), transparent 70%), radial-gradient(ellipse 80% 80% at 50% 50%, transparent 55%, var(--vignette) 100%)",

    // -------------------------------------------------------------------------
    // 6. SHADOWS & GLOWS
    // -------------------------------------------------------------------------
    "--shadow-none": "none",
    "--shadow-inset-highlight": "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.09)",
    "--shadow-inset-highlight-sm":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.08)",
    "--shadow-inset-highlight-hover":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.14)",
    "--shadow-inset-highlight-strong":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.2)",
    "--shadow-box-inset": "inset 0 1px 0 rgb(var(--white_rgb) / 0.05)",
    "--shadow-btn-inset": "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.06)",

    "--shadow-card":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.09), 0 20px 50px rgb(var(--black_rgb) / 0.55), 0 0 32px -4px rgb(var(--accent_rgb) / 0.16)",
    "--shadow-card-hover":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.14), 0 24px 54px rgb(var(--black_rgb) / 0.65), 0 0 36px -4px rgb(var(--accent_rgb) / 0.24)",
    "--shadow-card-sm":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.09), 0 16px 36px rgb(var(--black_rgb) / 0.5), 0 0 28px -3px rgb(var(--accent_rgb) / 0.16)",
    "--shadow-card-sm-hover":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.14), 0 20px 44px rgb(var(--black_rgb) / 0.6), 0 0 32px -3px rgb(var(--accent_rgb) / 0.24)",
    "--shadow-competency":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.09), 0 16px 42px -6px rgb(var(--black_rgb) / 0.5), 0 0 30px -4px rgb(var(--accent_rgb) / 0.16)",
    "--shadow-competency-hover":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.12), 0 20px 48px -6px rgb(var(--black_rgb) / 0.6), 0 0 36px -4px rgb(var(--accent_rgb) / 0.24)",

    "--shadow-button-primary":
      "0 4px 14px color-mix(in srgb, var(--main_color) 25%, transparent)",
    "--shadow-button-primary-hover":
      "0 8px 24px color-mix(in srgb, var(--main_color) 38%, transparent)",
    "--shadow-button-secondary":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.08), 0 4px 14px rgb(var(--black_rgb) / 0.25)",
    "--shadow-btn-hover": "0 4px 20px rgb(var(--accent_rgb) / 0.35)",
    "--shadow-action-btn": "0 4px 14px rgb(var(--accent_rgb) / 0.25)",
    "--shadow-submit-btn": "0 4px 14px rgb(var(--accent_rgb) / 0.22)",
    "--shadow-submit-btn-hover": "0 8px 22px rgb(var(--accent_rgb) / 0.35)",

    "--shadow-navbar":
      "0 4px 18px oklch(0% 0 0 / .07), inset 0 1px 0 oklch(100% 0 0 / .2)",
    "--shadow-menu":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.09), 0 24px 50px rgb(var(--black_rgb) / 0.65), 0 0 32px -4px rgb(var(--accent_rgb) / 0.18)",
    "--shadow-icon-hover": "0 4px 12px rgb(var(--black_rgb) / 0.15)",

    "--shadow-modal":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.1), 0 28px 60px -15px rgb(var(--black_rgb) / 0.75), 0 0 45px -6px color-mix(in srgb, var(--main_color) 22%, transparent)",
    "--shadow-metric-card":
      "inset 0 1px 0 rgb(var(--white_rgb) / 0.06), 0 8px 20px -8px rgb(var(--black_rgb) / 0.45)",
    "--shadow-filter-bar":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.09), 0 12px 30px rgb(var(--black_rgb) / 0.45), 0 0 24px -3px rgb(var(--accent_rgb) / 0.15)",
    "--shadow-filter-active": "0 2px 10px rgb(var(--accent_rgb) / 0.3)",
    "--shadow-badge":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.05), 0 4px 14px rgb(var(--black_rgb) / 0.25), 0 0 16px -3px rgb(var(--accent_rgb) / 0.12)",
    "--shadow-badge-hover": "0px 1px 0px 0.1px var(--main_color)",
    "--shadow-image":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.14), 0 18px 42px rgb(var(--black_rgb) / 0.65), 0 0 28px -4px rgb(var(--accent_rgb) / 0.18)",
    "--shadow-image-hover":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.2), 0 22px 48px rgb(var(--black_rgb) / 0.75), 0 0 36px -4px rgb(var(--accent_rgb) / 0.28)",
    "--shadow-icon-wrap":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.12), 0 4px 14px rgb(var(--black_rgb) / 0.25)",
    "--shadow-icon-wrap-hover":
      "inset 0 1px 0 0 rgb(var(--white_rgb) / 0.2), 0 6px 18px rgb(var(--black_rgb) / 0.35), 0 0 14px rgb(var(--accent_rgb) / 0.25)",
    "--shadow-channel-row-hover":
      "0 4px 14px rgb(var(--black_rgb) / 0.25), 0 0 16px -2px rgb(var(--accent_rgb) / 0.18)",
    "--shadow-input-focus":
      "0 0 0 3px rgb(var(--accent_rgb) / 0.12), inset 0 1px 2px rgb(var(--black_rgb) / 0.3)",

    "--shadow-glow-main": "0 0 6px var(--main_color)",
    "--shadow-glow-accent": "0 0 6px var(--accent)",

    // Text Glow
    "--text-glow-letter":
      "0 0 calc(var(--p) * 0.4em) color-mix(in srgb, var(--main_color) 55%, transparent)",
  };
};

export const colorThemes = {
  // Primary: Obsidian Jet & Electric Cerulean (Default Theme)
  obsidianCerulean: {
    id: "obsidianCerulean",
    name: "Obsidian & Electric Cerulean",
    nameAr: "أسود فحمي وأزرق سيروليان مع كريمي",
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
      warningRgb: "240 237 207",
      cardBorderRgb: "0 255 136",
      surfaceRgb: "6 13 26",
      surfaceDeepRgb: "7 14 27",
      inputBgRgb: "4 9 18",
      inputBgFocusRgb: "6 14 26",
      emptyBgRgb: "8 16 28",
      secondaryBlueRgb: "11 96 176",
      navbarBg: "oklch(28% 0 0 / .72)",
      textOnMain: "#000000",
      particleRgb: "0 255 55",
      particleDotAlpha: "0.55",
      particleLineAlpha: "0.22",
    }),
  },
};

export const defaultThemeId = "obsidianCerulean";
