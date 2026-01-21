import "../App.css";
type Props = {
  columns: string[];
  tableState: {
    sort: { col: string; asc: boolean };
    setSort: (v: { col: string; asc: boolean }) => void;
    freezeIndex: number | null;
    setFreezeIndex: (i: number | null) => void;
    hiddenCols: string[];
    setHiddenCols: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

export function TableHeaderControls({ columns, tableState }: Props) {
  const {
    sort,
    setSort,
    freezeIndex,
    setFreezeIndex,
    hiddenCols,
    setHiddenCols,
  } = tableState;

  const toggleSort = (col: string) => {
    if (sort.col === col) {
      setSort({ col, asc: !sort.asc });
    } else {
      setSort({ col, asc: true });
    }
  };

  const toggleHide = (col: string) => {
    setHiddenCols((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col],
    );
  };

  return (
    <tr>
      {columns.map((col, index) => {
        if (hiddenCols.includes(col)) return null;

        return (
          <th
            key={col}
            className={
              freezeIndex !== null && index <= freezeIndex ? "sticky" : ""
            }
          >
            <div className="header-cell">
              {/* Column Name */}
              <span>{col}</span>

              {/* Controls */}
              <div className="controls">
                {/* Sort */}
                <button onClick={() => toggleSort(col)}>
                  {sort.col === col ? (sort.asc ? "▲" : "▼") : "⇅"}
                </button>

                {/* Freeze */}
                <button
                  onClick={() =>
                    setFreezeIndex(freezeIndex === index ? null : index)
                  }
                  title="Freeze columns till here"
                >
                  📌
                </button>
                <button onClick={() => toggleHide(col)} title="Hide column">
                  👁️‍🗨️
                </button>
              </div>
            </div>
          </th>
        );
      })}
    </tr>
  );
}
