import { getHeatmapColor } from "../utils/colorUtils";
import { percentageDiff } from "../utils/percentageUtils";

export function HeatmapCell({ value, min, max, estimated }: any) {
  const color = getHeatmapColor(value, min, max);
  const diff = percentageDiff(estimated, value);

  return (
    <td style={{ backgroundColor: color }}>
      <div>{value}</div>
      <small>{diff.toFixed(1)}%</small>
    </td>
  );
}
