import "./App.css";
import AuthPage from "./pages/common/auth";
import OtpPage from "./pages/common/otpPage";
import Navbar from './components/navBarComponent';
import SideBar from './components/sideBarComponent';
import Footer from "./components/footerComponent";
import StepperComponent from "./components/stepperComponent";

function App() {
  return (
    <div className="App">
         {/* <AuthPage/> */}
          <Navbar/>
          <SideBar/>
          <StepperComponent/>
          <Footer/>
         {/* <OtpPage/> */}
    </div>
  );
}

export default App;
