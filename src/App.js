import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CreateUser from "./pages/CreateUser";
import Home from "./pages/Home";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="App">
      <Header
        switchToHome={() => setPage("Home")}
        switchToCreateUser={() => setPage("CreateUser")}
      />
      {page === "Home" && <Home className="heading" />}
      {page === "CreateUser" && <CreateUser />}
    </div>
  );
}

export default App;
