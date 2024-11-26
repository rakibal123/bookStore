import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

import About from "./components/About";
import Contact from "./components/Contact";
import ManualBuy from "./components/ManualBuy";
import Cards from "./components/Cards";
import Recycle from "./components/Recycle";
import Swapping from "./components/Swapping";

import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
// import Contact from "./components/Contact";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />

          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={<Contact/> }/>
          <Route path="/" element={<Cards />} />
      <Route path="/manual-buy" element={<ManualBuy />} />
      <Route path="/recycle" element={<Recycle />} />
      <Route path="/swapping" element={<Swapping />} />


        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
