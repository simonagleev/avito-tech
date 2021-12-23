import './App.css';
import {Header} from "./components/header/header";
import {Body} from "./components/body/body";
import {Hello} from "./components/hello";

export const App = () => {


  return (
    <div className="app">
      <Header />
      <Body />
      {/*<Hello />*/}
    </div>
  )
}


