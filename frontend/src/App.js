import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/nav-pages/About";
import Cart from "./pages/Cart";
import HomeCollection from "./pages/nav-pages/HomeCollection";
import Services from "./pages/nav-pages/Services";
import SingleProduct from "./components/requiredPages/SingleProduct";
import Packages from "./pages/nav-pages/Packages";
import LocateClinic from "./pages/nav-pages/LocateClinic";
import Tests from "./pages/nav-pages/Tests";
import HealthConditions from "./pages/nav-pages/HealthConditions ";
import RadiologyServices from "./pages/nav-pages/RadiologyServices";
import PartnerWithUs from "./pages/nav-pages/PartnerWithUs";
import Footer from "./pages/Footer";
import Details from "./components/services/Details";
import { Account } from "./login/Account";
import { Login } from "./login/Login";
import { Register } from "./login/Register";
import FetalMedicineUnit from "./pages/nav-pages/FetalMedicineUnit";
import RsDetails from "./components/services/RsDetails";
import Profile from "./login/Profile";
import axios from "axios";
import LogPopup from "./login/LogPopup";
import OtpLogin from "./login/OtpLogin";
import HealthPackages from "./pages/nav-pages/HealthPackages";
import ProfileUpdate from "./login/ProfileUpdate";
import Dashboard from "./pages/nav-pages/Dashboard/Dashboard";
import ContactUs from "./pages/ContactUs";
import TesgingPage from "./TesgingPage";
// import { useDispatch } from "react-redux";

const theme = {
  colors: {
    primary: "#005BAB",
    addon: "#00ffbb",
    pink: "#d12e88",
    primary90: "#00aeef90",
    secondary: "#00aeef",
    white: "#fff",
    dark: "#000F1C",
    text: "#0b141c",
    bg_light: "#f8f8f9",
  },
  fonts: {
    heading1: "2rem",
    heading2: "1.75rem",
    heading3: "1.25rem",
    heading4: "1.125rem",
    text: "1rem",
  },
};

function App() {
  // const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState('');
  const [cartId, setCartId] = useState('');
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [message, setMessage] = useState('');
  const [profileData, setProfileData] = useState({});
  const [showProfileForm, setShowProfileForm] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    sessionStorage.setItem("cartProduct", []);
  })

  useEffect(() => {
    axios.get("http://localhost:3210/user").then((res) => {
        if (res.data.Status === "ok") {
          setAuth(true);
          // dispatch(setAuth(true));
          setUserId(res.data.userid);
          setCartId(res.data.cart_id)
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch((err) => {
        console.error("Axios error:", err);
      });
  }, [setAuth, setUserId, setMessage, setCartId]);

  useEffect(() => {
    axios.get(`http://localhost:3210/cart/${cartId}/products`)
    .then((response) => {
      setCart(response.data.cartItems);
        setCartCount(cart.length);
      })
      .catch((error) => {
        console.error('Error fetching tests:', error);
      });
  }, [cartId, cart]);

  const handleLogout = () => {
    axios.get('http://localhost:3210/logout').then(() => {
      setAuth(false);
    })
    .catch(err => {
      console.log(err);
    });
  }

  // ------------------------------------------------
  const [isShowLogin, setIsShowLogin] = useState(false);
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);

  };
  // ------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      if (auth) {
        const profileResponse = await axios.get(`http://localhost:3210/profile/${userId}`);
        const data = profileResponse.data;
        if (data.profileExists) {
          setProfileData(data.profileData);
        } else {
          setShowProfileForm(true);
        }
      }
    };

    fetchData();
  }, [userId, auth, setProfileData]);


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Router>
          <Header cartCount={cartCount}  auth={auth}  setAuth={setAuth} userId={userId}  setUserId={setUserId}  userName={profileData.fullname} cartId={cartId}  setCartId={setCartId}  message={message}  handleLoginClick={handleLoginClick} handleLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home userId={userId}  auth={auth} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />} />
            <Route path="*" element={<ErrorPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/otplogin" element={<OtpLogin />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/profile" element={<Profile userId={userId} auth={auth} profileData={profileData} setProfileData={setProfileData} showProfileForm={showProfileForm} setShowProfileForm={setShowProfileForm} />} />
            <Route exact path="/edit-profile" element={<ProfileUpdate userId={userId} auth={auth} profileData={profileData} setProfileData={setProfileData} />} />
            <Route exact path="/dashboard" element={<Dashboard userId={userId} auth={auth} userName={profileData.fullname} profileData={profileData} setProfileData={setProfileData} />} />
            <Route path="/about" element={<About />} />
            <Route path="/tests" element={<Tests userId={userId} auth={auth} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />} />
            <Route path="/health-packages" element={<HealthPackages userId={userId} auth={auth} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />} />
            <Route path="/packages" element={<Packages auth={auth} userId={userId} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart userId={userId} cart={cart} setCart={setCart} />} />
            <Route path="/home-collection" element={<HomeCollection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/health-conditions" element={<HealthConditions />} />
            <Route path="/health-conditions/:slug" element={<Details />} />
            <Route path="/radiology-services" element={<RadiologyServices />} />
            <Route path="/radiology-services/:slug" element={<RsDetails />} />
            <Route path="/nearest-centers" element={<LocateClinic />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/fetal-medicine-unit" element={<FetalMedicineUnit />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/testing-page" element={<TesgingPage />} />
          </Routes>
          <LogPopup isShowLogin={isShowLogin} handleLoginClick={handleLoginClick} />
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
