import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mohasebe from "./components/bmi/mohasebe";
import Desktop from "./components/desktop/desktop";
import Bmi from "./components/bmi/bmi";
import { useState } from "react";
import Morabian from "./components/morabian/morabian";
import Login from "./components/login.form/login";
import Signup from "./components/signup/signup";
import Reshteha from "./components/reshteha/reshteha";
import Barnameha from "./components/barnameha/barnameha";
import Qazai from "./components/qazai/qazai";
import Dashboard from "./components/dashboard/dashboard";
function App() {
  const [result, setResult] = useState("?");
  const [ideal, setIdeal] = useState("?");
  const [shakhes, setShakhes] = useState("?");
  const [jomle, setJomle] = useState("اضافه وزن دارید");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Desktop />}>
          <Route
            path="bmi"
            element={
              <Bmi
                setJomle={setJomle}
                setShakhes={setShakhes}
                setIdeal={setIdeal}
                setResult={setResult}
              />
            }
          />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/mohasebe"
          element={
            <Mohasebe
              jomle={jomle}
              shakhes={shakhes}
              ideal={ideal}
              result={result}
            />
          }
        />
        <Route path="/morabian" element={<Morabian />} />
        <Route path="/reshteha" element={<Reshteha />} />
        <Route path="/barnameha" element={<Barnameha />} />
        <Route path="/qazai" element={<Qazai />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
export default App;
