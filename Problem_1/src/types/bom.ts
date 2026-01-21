// types/bom.ts
export type BOMRow = {
  "Item Code": string;
  Material: string;
  Quantity: number;
  "Estimated Rate": number;
  [supplier: string]: string | number;
};
