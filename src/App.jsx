import AuthContext from "./context/AuthContext";
import Router from "./shared/Router";

function App() {
  return (
    <AuthContext>
      <Router />
    </AuthContext>
  );
}

export default App;
