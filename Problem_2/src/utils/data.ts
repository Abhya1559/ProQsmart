import type { InventoryItem } from "../components/TreeTable/types";

const inventoryData: InventoryItem[] = [
  {
    category: "Aerospace Parts",
    subCategory1: "Structural",
    subCategory2: "Support strut for seat mounting",
    itemCode: "ITEM-1234",
    description: "Aerospace parts flying",
    quantity: 20,
    rate: 40,
  },
  {
    category: "Aerospace Parts",
    subCategory1: "Structural",
    subCategory2: "Support strut for seat mounting",
    itemCode: "ITEM-1235",
    description: "Aerospace parts flying",
    quantity: 10,
    rate: 20,
  },
  {
    category: "Precision Components",
    subCategory1: "Fasteners",
    subCategory2: "Titanium aerospace bolt",
    itemCode: "ITEM-2122",
    description: "Aerospace parts flying",
    quantity: 30,
    rate: 50,
  },
];

export default inventoryData;
