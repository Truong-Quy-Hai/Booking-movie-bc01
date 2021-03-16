import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";
import LifeCycle from "./Pages/LifeCycle/LifeCycle";
import UseStateHook from "./Pages/Hooks/UseStateHook";
import BaiTapChonXe from "./Pages/Hooks/BaiTapChonXe";

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/lifecycle" component={LifeCycle} />
        {/* <Route
          exact
          path="/lifecycle"
          render={(props) => {
            console.log(props);
            return <LifeCycle />;
          }}
        /> */}
        <Route exact path="/usestatedemo" component={UseStateHook} />
        <Route exact path="/baitapchonxe" component={BaiTapChonXe} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
