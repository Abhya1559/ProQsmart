import { useLocation, Navigate } from "react-router-dom";
import { HeatmapTable } from "../components/HeatmapTable";

type LocationState = {
  data: any[];
};

export default function TablePage() {
  const location = useLocation();
  const state = location.state as LocationState | null;

  // Guard: redirect if data is missing (refresh / direct access)
  if (!state || !Array.isArray(state.data) || state.data.length === 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page">
      <div className="table-wrapper">
        <HeatmapTable data={state.data} />
      </div>
    </div>
  );
}
