import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import TablePage from "./pages/TablePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page 1: CSV Upload */}
        <Route path="/" element={<UploadPage />} />

        {/* Page 2: Heatmap Table */}
        <Route path="/table" element={<TablePage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
