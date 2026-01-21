export function getHeatmapColor(value: number, min: number, max: number) {
  if (min === max) return "rgb(255,255,255)";
  const ratio = (value - min) / (max - min);
  const red = Math.round(255 * ratio);
  const green = Math.round(255 * (1 - ratio));

  return `rgb(${red},${green},0)`;
}
