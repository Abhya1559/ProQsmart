import { parse } from "papaparse";

export const parseCsv = (file: File) => {
  return new Promise((resolve, reject) => {
    parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => resolve(result.data),
      error: reject,
    });
  });
};
