import type { SetStateAction } from "react";
import { HeatmapCell } from "./HeatmapCells";
import { TableHeaderControls } from "./TableHeaderControl";
import type { BOMRow } from "../types/bom";

export function HeatmapTable({ data }: { data: BOMRow[] }) {
  const columns = Object.keys(data[0]);
  const supplierCols = columns.filter((c) =>
    c.toLowerCase().includes("supplier"),
  );

  return (
    <table>
      <thead>
        <TableHeaderControls
          columns={columns}
          tableState={{
            sort: {
              col: "",
              asc: false,
            },
            setSort: function (v: { col: string; asc: boolean }): void {
              throw new Error("Function not implemented.");
            },
            freezeIndex: null,
            setFreezeIndex: function (i: number | null): void {
              throw new Error("Function not implemented.");
            },
            hiddenCols: [],
            setHiddenCols: function (value: SetStateAction<string[]>): void {
              throw new Error("Function not implemented.");
            },
          }}
        />
      </thead>
      <tbody>
        {data.map((row, rowIndex) => {
          const supplierValues = supplierCols.map((c) => Number(row[c]));
          const min = Math.min(...supplierValues);
          const max = Math.max(...supplierValues);

          return (
            <tr key={rowIndex}>
              {columns.map((col) => {
                if (supplierCols.includes(col)) {
                  const value = Number(row[col]);
                  return (
                    <HeatmapCell
                      key={col}
                      value={value}
                      min={min}
                      max={max}
                      estimated={row["Estimated Rate"]}
                    />
                  );
                }
                return <td key={col}>{row[col]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
