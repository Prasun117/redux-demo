import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/store";
import { CounterComponent } from "./CounterComponent";
import { Header } from "./Header";
import { AddToCart } from "./AddToCart";
import { LoginForm } from "./LogInForm";
export default function App() {
  const counter = useSelector((state) => state.counter.counter);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div className="App">
      <Header />
      {/* <CounterComponent
        counter={counter}
        increment={handleIncrement}
        decrement={handleDecrement}
      /> */}
      <LoginForm />
      <AddToCart></AddToCart>
    </div>
  );
}
