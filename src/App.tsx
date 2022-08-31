import Global from "./styles/global";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import "./styles/App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Footer />
      <Global />
      <Routes />
      <Toaster />
    </>
  );
};

export default App;
