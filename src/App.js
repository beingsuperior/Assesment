import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignInRoute from "./Routes/LoginRoutes";
import AuthProtectedRoute from "./Routes/ProtectedRoutes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>

      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signIn"
          element={
            <SignInRoute>
              <SignIn />
            </SignInRoute>
          }
        />
        <Route
          path="/Cart"
          element={
            <AuthProtectedRoute>
              <Cart />
            </AuthProtectedRoute>
          }
        />
        <Route path="/signOut" element={<SignOut />} />
      </Routes> */}
    </>
  );
}

export default App;
