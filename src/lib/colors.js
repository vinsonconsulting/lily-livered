// Color-scheme resolution shared by index.astro and 404.astro.
// Returns effective foreground/background plus the CSS block to inject.

export function resolveColors(config, { applyForeground = false } = {}) {
  const { backgroundColor, textColor, lightBackgroundColor, lightTextColor, colorScheme } = config;

  const effectiveBg = colorScheme === 'light' ? lightBackgroundColor : backgroundColor;
  const effectiveFg = colorScheme === 'light' ? lightTextColor : textColor;

  const fgRule = applyForeground ? ` color: ${effectiveFg};` : '';
  const fgLightRule = applyForeground ? ` color: ${lightTextColor};` : '';

  const css = [
    `html, body { background-color: ${effectiveBg};${fgRule} }`,
    colorScheme === 'auto'
      ? `@media (prefers-color-scheme: light) { html, body { background-color: ${lightBackgroundColor};${fgLightRule} } }`
      : '',
  ]
    .filter(Boolean)
    .join('\n');

  return { effectiveBg, effectiveFg, css };
}
