import AuthProvider from "./components/AuthProvider";
import AuthContext from "./context/AuthContext";
import Router from "./shared/Router";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
