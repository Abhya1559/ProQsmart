import TreeRow from "./TreeRow";
import { buildTree } from "./treeutils";
import type { InventoryItem } from "./types";

interface TreeTableProps {
  data: InventoryItem[];
}

export default function TreeTable({ data }: TreeTableProps) {
  const tree = buildTree(data);

  return (
    <div className="table-wrapper">
      <table className="tree-table">
        <thead>
          <tr>
            <th align="left">Category / Item</th>
            <th>Est. Rate</th>
            <th>Qty</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(tree).map(([category, cat]) => (
            <TreeRow
              key={category}
              label={category}
              qty={cat.qty}
              rate={cat.rate}
              level={0}
            >
              {Object.entries(cat.children ?? {}).map(([sub1, s1]) => (
                <TreeRow
                  key={sub1}
                  label={sub1}
                  qty={s1.qty}
                  rate={s1.rate}
                  level={1}
                >
                  {Object.entries(s1.children ?? {}).map(([sub2, s2]) => (
                    <TreeRow
                      key={sub2}
                      label={sub2}
                      qty={s2.qty}
                      rate={s2.rate}
                      level={2}
                    >
                      {s2.items?.map((item) => (
                        <tr key={item.itemCode} className="leaf-row">
                          <td
                            className="indent-guide"
                            style={{ paddingLeft: 60 }}
                            data-label="Item"
                          >
                            {item.itemCode}
                          </td>
                          <td className="rate-cell" data-label="Est. Rate">
                            {item.rate}
                          </td>
                          <td className="qty-cell" data-label="Qty">
                            {item.quantity}
                          </td>
                        </tr>
                      ))}
                    </TreeRow>
                  ))}
                </TreeRow>
              ))}
            </TreeRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
