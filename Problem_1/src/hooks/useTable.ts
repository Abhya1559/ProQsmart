import { useState } from "react";

export function useTableState(columns: string[]) {
  const [sort, setSort] = useState({ col: "", asc: true });
  const [freezeIndex, setFreezeIndex] = useState<number | null>(null);
  const [hiddenCols, setHiddenCols] = useState<string[]>([]);

  return {
    sort,
    setSort,
    freezeIndex,
    setFreezeIndex,
    hiddenCols,
    setHiddenCols,
  };
}
