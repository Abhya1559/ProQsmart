import { useNavigate } from "react-router-dom";
import FileUploader from "../components/FileUploader";
import "../App.css";
export default function Upload() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="card">
        <FileUploader
          onUpload={(data) => navigate("/table", { state: { data } })}
        />
      </div>
    </div>
  );
}
