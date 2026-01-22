import TreeTable from "./components/TreeTable/TreeTable";
import inventoryData from "./utils/data";
import "./App.css";
export default function App() {
  return (
    <div className="app-container">
      <h2>Inventory Tree Table</h2>
      <TreeTable data={inventoryData} />
    </div>
  );
}
