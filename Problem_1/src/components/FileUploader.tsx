import { useState } from "react";
import { parseCsv } from "../hooks/useCsvParser";

type Props = {
  onUpload: (data: any[]) => void;
};

export default function FileUploader({ onUpload }: Props) {
  const [fileName, setFileName] = useState<string>("");

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    try {
      const data: any = await parseCsv(file);
      onUpload(data);
    } catch (error) {
      console.error("CSV parsing failed:", error);
    }
  };

  return (
    <div className="upload-wrapper">
      <label htmlFor="csv-upload" className="upload-btn">
        📂 Select CSV File
      </label>
      <input
        id="csv-upload"
        type="file"
        accept=".csv"
        hidden
        onChange={handleChange}
      />
      {fileName && (
        <p className="file-name">
          Selected file: <strong>{fileName}</strong>
        </p>
      )}
    </div>
  );
}
