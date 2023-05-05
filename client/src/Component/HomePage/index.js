import { useEffect } from 'react';
import * as React from 'react';
import { useState, useRef  } from 'react';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import Faq from '../Faq';
import { ShowRequestPost } from '../PostBloodRequest/ShowRequestPost';
// import Navbar from '../Navbar';
import './Home.css'
import { useHistory } from "react-router-dom";
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import GoogleMap from '../GoogleMap/GoogleMap';
export const Header = () => {

	const header_height = useRef(null);
	let history = useHistory();
	const [Height, setHeight] = useState({});
	const newChange = () =>{
		history.push("/search-for-blood");
	}
	useEffect(() => {
		const height = header_height.current.offsetHeight + 300;
		setHeight({
			height: height + "px"
		})
	}, [header_height]);

	return (
		<>
		<svg style={Height} id='header_bg' className='homebg' viewBox="0 0 500 80" preserveAspectRatio="none">
			<defs>
				<radialGradient id="Gradient"
						cx="0.5" cy="0.5" r="0.5" fx="0.75" fy="0.25">
					<stop offset="0%" stopColor="#07365d"/>
					<stop offset="100%" stopColor="#000717"/>
				</radialGradient>
			</defs>
  			<path d="M0,0 L0,55 Q250,65 500,55 L500,0 Z" fill="url(#Gradient)"/>{/*fill="#e2fafa"*/}
		</svg>
		<div ref={header_height} id='header' className="header">
			<div className='title'>
				<h1 style={{fontSize:"45px"}}>EVERY BLOOD DONOR <br/>IS A LIFE SAVER</h1>
				<p>
					<span>"Your greatness is <br/>not what you have. <br />it's what you give"<br/></span>
				</p>
				<section className='serviceBtn'>
					{/* <button onClick={(e) => {window.open('/search-for-blood', '_self');}}>Find A Blood Donor &nbsp; &#10095;</button><br/> */}
					<button onClick={newChange}>Find A Blood Donor &nbsp; &#10095;</button><br/>
					<button onClick={(e) => {window.open('/dashboard', '_self');}}>Post Blood Request &nbsp; &#10095;</button><br/>
					{/* <button>Service Organisation (Comming Soon)</button><br/> */}
				</section>
			</div>
			<div className='head_Img'>
				<img className='bldrop' src={process.env.PUBLIC_URL + '/assets/bldrop.png'} alt=""/>
				<img src={process.env.PUBLIC_URL + '/assets/hand.png'} alt=""/>
			</div>
		</div>
		</>
	);
};

export const Info = () => {
	return (
		<>
			<div className="info">
				<div>
					<div className="infotag">
						<p>Good To Know</p>
						<hr />
						<p>Helpful Information</p>
					</div>

					<div className='infoContainer'>
						<section className='infoDetails'>
							<div>
								<img src={process.env.PUBLIC_URL + '/assets/fact1.png'} alt="Fact" />
							</div>
							<p>
								1 unit of blood can <br/>save up to 3 lives.
							</p>
						</section>
						<section className='infoDetails'>
							<div>
								<img src={process.env.PUBLIC_URL + '/assets/fact2.png'} alt="Fact" />
							</div>
							<p>
								Blood cannot be manufactured; it can only come from volunteer donors.
							</p>
						</section>
						<section className='infoDetails'>
							<div>
								<img src={process.env.PUBLIC_URL + '/assets/fact3.png'} alt="Fact" />
							</div>
							<p>
								Adults have around 10 units of blood in their body. 1 unit is given during a donation.
							</p>
						</section>
						<section className='infoDetails'>
							<div>
								<img src={process.env.PUBLIC_URL + '/assets/fact4.png'} alt="Fact" />
							</div>
							<p>
								Globally arround 85 million blood components are transfused in a given year.
							</p>
						</section>
					</div>
					<div style={{textAlign: 'center'}}>
						<button id='readMore'>READ MORE</button>
					</div>
						{/* Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
					odit. */}
				</div>
				<div>
					<ShowRequestPost />
				</div>
				 
			</div>
			
			<hr />
			<h2 align="center">Our Diamonds</h2>
			<br />
			<div className="master_wrap" id="diamond_s">
			<div className="wrapper">
            	<div className="card1">
                	<img src="/assets/male_blood_donor.jpg" alt="no img" />
                	<div className="info1">
                    	<h1>Super-Man</h1>
                    	<p>Meet Abhay Patel, who donated 30 blood packet which are highest in year 2k22 !</p>
               		</div>
            	</div>
				<div className="card2">
					<img src="/assets/blood table.png" alt="no img"/>
				</div>
            	<div className="card1">
                	<img src="/assets/women blood donor.jpg" alt="no img" />
                	<div className="info1">
                    	<h1>Super-Women</h1>
                    	<p>Beauty with Brains ! Maya Patel, who donated 38 blood packet which are highest in year 2k22 !</p>
                	</div>
           	 	</div>
        	</div>
			</div>
        <hr />
	<div className="sevices">
		<h2 align="center">Services Provide by blood camps</h2>
        <p align="center" >The health and safety of the donor as well as the recipient must be safeguarded.</p>

		<div class="s_crd">
 <div className="flip-main">
   <div className="container_s">
      <div className="row_s">
          {/* <!-- flip card start --> */}
          <div className="flip-card">
             <div className="flip-card-inner">
                 <div className="flip-card-front">
                    <img className="s_img" src="/assets/ambulance.jpg" alt="flip-card" />
                 </div>
                 <div className="flip-card-back">
                    <div className="text">
                       <h3>	24 x 7 Ambulance Service</h3>
                       <p>For emergency situations, we are present near you to save lives from death.</p>
                    </div>
                 </div>
             </div>
          </div>
          {/* <!-- flip card end -->
          <!-- flip card start --> */}
          <div className="flip-card">
             <div className="flip-card-inner">
                 <div className="flip-card-front">
                    <img className="s_img" src="/assets/snacks.jpg" alt="flip-card" />
                 </div>
                 <div className="flip-card-back">
                    <div className="text">
                       <h3>Snacks</h3>
                       <p>We provide proper snacks to visitors & their companion. We take care of our users.</p>
                    </div>
                 </div>
             </div>
          </div>
          {/* <!-- flip card end -->
          <!-- flip card start --> */}
          <div className="flip-card">
             <div className="flip-card-inner">
                 <div className="flip-card-front">
                    <img className="s_img" src="/assets/blood typing game.jpeg" alt="flip-card" />
                 </div>
                 <div className="flip-card-back">
                    <div className="text">
                       <h3>Blood Typing Game</h3>
                       <p>To spread awarness on blood donation, user can play a basic logic game in our site...</p>
                    </div>
                 </div>
             </div>
          </div>
          {/* <!-- flip card end -->
          <!-- flip card start --> */}
          <div className="flip-card">
             <div className="flip-card-inner">
                 <div className="flip-card-front">
                    <img className="s_img" src="/assets/donor gift.png" alt="flip-card" />
                 </div>
                 <div className="flip-card-back">
                    <div className="text">
                       <h3>Blood Donor Return Gift</h3>
                       <p>We encourage our donor's by providing return back gifts which could be used in their daily life.</p>
                    </div>
                 </div>
             </div>
          </div>
          {/* <!-- flip card end -->
          <!-- flip card start --> */}
          <div className="flip-card">
             <div className="flip-card-inner">
                 <div className="flip-card-front">
                    <img className="s_img" src="/assets/certificate.jpg" alt="flip-card" />
                 </div>
                 <div className="flip-card-back">
                    <div className="text">
                       <h3>Certification</h3>
                       <p>Certification of appreciation is also provided to user, to have a good memory of helping others.</p>
                    </div>
                 </div>
             </div>
          </div>
          {/* <!-- flip card end -->
          <!-- flip card start --> */}
          <div className="flip-card">
             <div className="flip-card-inner">
                 <div className="flip-card-front">
                    <img className="s_img" src="/assets/blood test.jpg" alt="flip-card" />
                 </div>
                 <div className="flip-card-back">
                    <div className="text">
                       <h3>Blood Reports</h3>
                       <p>We deliver free blood reports to all donors. It include test like thelisma test, Electrolyte test, etc</p>
                    </div>
                 </div>
             </div>
          </div>
          {/* <!-- flip card end --> */}
    </div>
   </div>
 </div>
</div>
<hr />
	</div>

			<Faq />
			<hr />
			<GoogleMap from={{lat: 23.596952669460926, lng: 72.38002810670397}} to={{lat: 23.23782062216229, lng: 72.54850214451702}}/>
			<FeedbackForm/>
			
			<div id='contact'>{Contact()}</div>
		</>
	);
};

export const Contact = () => {
	return (
		<>
			<div className="contact" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/contact_bg.png'})`}}>
				<p>
					
					<span>Join Us</span><br/>
					Together We Can Make World More Health & Better
				</p>
				<a href='mailto: binalvasoya2003@gmail.com' rel="noopener noreferrer">Write us a Mail</a>
			</div>
		</>
	);
};