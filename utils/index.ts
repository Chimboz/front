export function asset(path: string) {
  const assets = import.meta.glob('@/assets/**/*', {
    eager: true,
    import: 'default',
  });
  return assets['/assets/' + path] as unknown as string; // FIXME hacky typing
}

export function hashColor(
  src: string | number,
  lightness = 66,
  saturation = 100
) {
  src = src.toString(2);
  let hash = 0;
  for (let i = 0; i < src.length; i += 1) {
    hash = src.charCodeAt(i) + ((hash << 5) - hash);
    hash &= hash;
  }
  return `hsl(${
    hash % 360
  }, ${saturation}%, calc(var(--lightness) + var(--lightness-factor) * ${lightness}%))`;
}

export function formatDuration(ms: number) {
  if (Number.isNaN(ms) || ms < 0) return '';
  if (ms < 1) return '<1ms';
  if (ms < 1000) return `${ms}ms`;
  if (ms < 1000 * 60) return `${(ms / 1000).toFixed(2)}s`;
  return `${(ms / 1000 / 60).toFixed(2)}min`;
}
