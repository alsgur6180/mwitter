import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "../myBase";

function App() {
  const isLoggedIn = useState(authService.currentUser)[0];
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Mwitter</footer>
    </>
  );
}

export default App;
