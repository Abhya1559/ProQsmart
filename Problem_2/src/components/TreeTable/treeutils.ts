import type { InventoryItem, TreeNode } from "./types";

export function buildTree(data: InventoryItem[]): Record<string, TreeNode> {
  const tree: Record<string, TreeNode> = {};

  data.forEach((row) => {
    const { category, subCategory1, subCategory2, quantity, rate } = row;

    tree[category] ??= { qty: 0, rate: 0, children: {} };
    tree[category].children![subCategory1] ??= {
      qty: 0,
      rate: 0,
      children: {},
    };
    tree[category].children![subCategory1].children![subCategory2] ??= {
      qty: 0,
      rate: 0,
      items: [],
    };

    // aggregate
    tree[category].qty += quantity;
    tree[category].rate += rate;

    tree[category].children![subCategory1].qty += quantity;
    tree[category].children![subCategory1].rate += rate;

    tree[category].children![subCategory1].children![subCategory2].qty +=
      quantity;
    tree[category].children![subCategory1].children![subCategory2].rate += rate;

    tree[category].children![subCategory1].children![subCategory2].items!.push(
      row,
    );
  });

  return tree;
}
