import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Profile from './pages/Profile/Profile'
import Login from "./pages/Login/index";
import OwerProfile from "./pages/Profile/OwnerProfile";

import AddBoat from "./pages/AddBoat/AddBoat";
import AddUser from "./pages/User/AddUser";
import Trips from "./pages/Trips/Trips";
import Fav from "./pages/Favourite/Favourite";
import Listing from "./pages/Listings/Listing";
import Reviews from "./pages/Trips/Ratings";
import Account from "./pages/MyAccount/Account";
import About from './pages/About/About'
import GoogleAuthInitializer from './Compunents/GoogleApiInit/GoogleApi'
import ConformEmail from './pages/ConformEmail/ConformEmail'
import ForgotPass from './pages/ForgotPass/ForgotPass'
import LinkSent from './pages/LinkSent/LinkSent'
import JoinWave from "./pages/CreateAccountJoinWave/JoinWave";

import AddListing from "./pages/AddListing/AddListing";
import SignUp from "./pages/SignUp/SignUp";
import "@fontsource/source-sans-pro";


function App() {
  
  const user = localStorage.getItem("token");
  const id = localStorage.getItem("owner");
  const usertype = localStorage.getItem("user");
  console.log("usertype: " + usertype);
  console.log("userid:" + id);
  console.log("user:" + user);


  return (
    <Router>
        <GoogleAuthInitializer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/detail" element={<Detail />} />
        {usertype === "boatowner" ? (
          <Route exact path="/profile" element={<OwerProfile />} />
        ) : (
          <Route exact path="/profile" element={<Profile />} />
        )}
        <Route exact path="/profile2" element={<OwerProfile />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/addboat" element={<AddBoat />} />
        <Route path="/login" exact element={<Login />} />
        {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
        <Route exact path="/listing" element={<Listing />} />

        <Route path="/reviews" element={<Reviews />} />
        <Route path="/account" element={<Account />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/about" element={<About />} />
        <Route path="/conform" element={<ConformEmail />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/linksent" element={<LinkSent />} />
        <Route path="/joinwave" element={<JoinWave />} />
        <Route path="/signup" element={<SignUp />} />
        {/*  */}
        <Route exact path="/addlisting" element={<AddListing />} />
 
       
        {/* <Route path="/list1" element={<List1 />} />
        <Route path="/list2/:result" element={<List2 />} /> */}
  

      </Routes>
    </Router>
  );
}

export default App;