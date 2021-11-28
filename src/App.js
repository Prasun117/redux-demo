import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/store";
import { CounterComponent } from "./CounterComponent";
import { Header } from "./Header";
export default function App() {
  return (
    <div className="App">
      <span>welcomne to the demo</span>
      <CounterComponent />
    </div>
  );
}
