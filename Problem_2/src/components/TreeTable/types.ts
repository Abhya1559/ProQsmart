export interface InventoryItem {
  category: string;
  subCategory1: string;
  subCategory2: string;
  itemCode: string;
  description: string;
  quantity: number;
  rate: number;
}

export interface TreeNode {
  qty: number;
  rate: number;
  children?: Record<string, TreeNode>;
  items?: InventoryItem[];
}
