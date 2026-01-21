export function percentageDiff(estimated: number, actual: number) {
  if (!estimated) {
    return 0;
  }
  return ((actual - estimated) / estimated) * 100;
}
