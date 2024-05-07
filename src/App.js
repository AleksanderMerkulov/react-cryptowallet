import logo from './logo.svg';
import './App.css';
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import AppSider from "./components/AppSider";

function App() {

  return (
    // <div className="App">
      <>
        <AppHeader />
        <div style={{display: "flex"}}>
            <AppSider/>
            <AppContent/>
        </div>
      </>
    // </div>
  );
}

export default App;
