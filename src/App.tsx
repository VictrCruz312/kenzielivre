import Global from "./styles/global";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Global />
      <Routes />
      <Toaster />
    </>
  );
};

export default App;
