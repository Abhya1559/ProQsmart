import { type ReactNode, useState } from "react";

interface TreeRowProps {
  label: string;
  qty: number;
  rate: number;
  level: number;
  children?: ReactNode;
}

export default function TreeRow({
  label,
  qty,
  rate,
  level,
  children,
}: TreeRowProps) {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(children);

  return (
    <>
      <tr
        className={`level-${level}`}
        onClick={() => hasChildren && setOpen((prev) => !prev)}
      >
        <td data-label="Category / Item">
          <div className="tree-label">
            {hasChildren && (
              <span className="tree-toggle">{open ? "−" : "+"}</span>
            )}
            {label}
          </div>
        </td>

        <td className="rate-cell" data-label="Est. Rate">
          {rate}
        </td>

        <td className="qty-cell" data-label="Qty">
          {qty}
        </td>
      </tr>

      {open && children}
    </>
  );
}
