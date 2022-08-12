import { useAuth } from "./Hooks/useAuth";
import { Login } from "./pages/Login/Login";
import { PrivatePage } from "./pages/Private/Private";

function App() {
  const { token } = useAuth();
  if (token) {
    return <PrivatePage />;
  } else {
    return <Login />;
  }
}

export default App;
