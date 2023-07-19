import { useSelector } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectDisplay } from "./redux/slices/displayCountrySlice";

function App() {
    let currentDisplay = useSelector(selectDisplay);
    console.log("DISPLAY", currentDisplay);
    return (
        <div className="App font-link">
            <Header />
            <OptionDisplay />
        </div>
    );
}

export default App;
