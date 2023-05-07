import { BrowserRouter , Route, Switch, Redirect } from 'react-router-dom';
import React, { useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchBlood from "./Component/RequestBlood/SearchBlood";
import SearchBloodBank from "./Component/searchBloodBank/SearchBloodBank";
import SearchBloodCamp from "./Component/SearchBloodCamp/SearchBloodCamp";
// import RequestForm from './Component/RequestBlood/RequestForm';
import { Header, Info } from "./Component/HomePage";
import SignIn from './Component/SignIn_Up/SignIn';
import SignUp from './Component/SignIn_Up/SignUp';
import UserSignUp from './Component/SignIn_Up/UserSignUp';
import Loading from './Component/Loading';
import VerifyAccount from './Component/VerifyAccount';
import userSetting from './Component/Dashboard/Setting';
// import AuthenticatedRoute from './Service/AuthenticatedRoute';
import About from './Component/About';
import Footer from './Component/Footer';
import './App.css';
import Navbar from './Component/Navbar';
import BloodBankRegistrationForm from './Component/Blood Bank Registartion/BloodBankRegistrationForm';
import BloodBankSignIn from './Component/Blood Bank Registartion/BloodBankSignIn';
import HospitalRegistrationForm from './Component/Hospital Registration Form/HospitalRegistrationForm';
import HospitalSignIn from './Component/Hospital Registration Form/HospitalSignIn';
import BloodCampForm from './Component/Blood Camp Form/BloodCampForm';
// import BloodCampSignIn from './Component/Blood Camp Form/BloodCampSignIn.js';
import Dashboard from './Component/Dashboard';
import {useDispatch} from 'react-redux';
import {getData} from './actions/bloodBank.js'
import { authStore } from "./store/authStore";


function App() {
	const dispatch = useDispatch();
	const [user] = authStore((state) => [state.user]);
	console.log(user.length !== 0)
	useEffect(() =>{
		dispatch(getData());
	},[dispatch]);

	// const [bloodbank] = authStore((state) => [state.bloodbank]);
	// console.log(bloodbank.length !== 0)
	// useEffect(() =>{
	// 	dispatch(getData());
	// },[dispatch]);

  return (
	  <>
	  <BrowserRouter>
	  <Navbar />
        <Switch>
			{/* <Routes> */}
			<Route path='/' exact>
				<Header />
				<Info />
			</Route>
			<Route path='/loaging' exact component={Loading}/>
			<Route path='/signin' exact component={SignIn}/>
			<Route path='/donors-signup' exact component={SignUp}/>
			<Route path='/hospital-signup' exact component={HospitalRegistrationForm}/>
			<Route path='/hospital-signin' exact component={HospitalSignIn}/>
			<Route path='/blood-bank-signup' exact component={BloodBankRegistrationForm}/>
			<Route path='/blood-bank-signin' exact component={BloodBankSignIn}/>
			{/* <Route path="/user-dashboard" exact component={() => (bloodbank.length !== 0 ? <Dashboard /> : <Redirect to="/blood-bank/signin" />)} /> */}
			<Route path='/user-signup' exact component={UserSignUp}/>
			<Route path='/search-for-blood' exact component={SearchBlood}/>
			<Route path='/search-blood-bank' exact component={SearchBloodBank}/>
			<Route path='/search-blood-camp' exact component={SearchBloodCamp}/>
			{/* <Route path='/request-blood' exact component={Dashboard}/> */}
			<Route path='/blood-camp-signup' exact component={BloodCampForm}/>
			{/* <Route path='/blood-camp-signin' exact component={BloodCampSignIn}/> */}
			<Route path='/registration-verification/:token' exact component={VerifyAccount}/>
			<Route path='/about' exact component={About}/>
			{/* <Route path='/send-request' exact component={RequestForm}/> */}
				<Route path='/user-dashboard' exact component={Dashboard}/>
			<Route path='/dashboard/settings' exact component={userSetting} />
			<Route path="/user-dashboard" exact component={() => (user.length !== 0 ? <Dashboard /> : <Redirect to="/signin" />)} />
			{/* </Routes> */}
        </Switch>
	  <Footer/>
	  </BrowserRouter>
    </>
  );
}

export default App;

