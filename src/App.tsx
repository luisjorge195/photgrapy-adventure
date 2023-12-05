import "./App.css";
import Main from "./components/Main";
import { Route } from "wouter";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
function App() {
  return (
    <div>
      <Route path="/" component={Main}/>
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={Register}/>
    </div>
  );
}

export default App;
