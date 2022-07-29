import { Toaster } from "react-hot-toast";
import Navbar from "./components/layout/navbar";
import "./index.css";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Toaster
        position="bottom-center"
        toastOptions={{ className: "text-xl", duration: 600 }}
      />
    </>
  );
}

export default App;
