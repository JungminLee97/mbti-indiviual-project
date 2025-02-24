import Router from "./shared/Router";
import AuthProvider from "./components/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <Router  />
    </AuthProvider>
  );
}

export default App;
