import "./App.css";
import AuthPage from "./pages/common/auth";
import OtpPage from "./pages/common/otpPage";
import Navbar from './components/navBarComponent';
import SideBar from './components/sideBarComponent';
import Footer from "./components/footerComponent";

function App() {
  return (
    <div className="App">
         {/* <AuthPage/> */}
          <Navbar/>
          <SideBar/>
          <Footer/>
         {/* <OtpPage/> */}
    </div>
  );
}

export default App;
