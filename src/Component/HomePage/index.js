import { useEffect } from 'react';
import { useState, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Faq from '../Faq';
import { ShowRequestPost } from '../PostBloodRequest/ShowRequestPost';
import './Home.css'

export const Header = () => {

	const header_height = useRef(null);
	const [Height, setHeight] = useState({});
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
					<button onClick={(e) => {window.open('/search-for-blood', '_self');}}>Find A Blood Donor &nbsp; &#10095;</button><br/>
					<button>Post Blood Request &nbsp; &#10095;</button><br/>
					<button>Service Organisation (Comming Soon)</button><br/>
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
			<br />
			<div className="master_wrap">
			<div className="wrapper">
            	<div className="card1">
                	<img src="https://media.istockphoto.com/id/538881385/photo/man-giving-blood-donation.jpg?s=612x612&w=0&k=20&c=AeLsTncplqOxI6pTv0N3fUUS90_2B-Yuw0FF3lUyHX8=" />
                	<div className="info1">
                    	<h1>Super-Man</h1>
                    	<p>Meet Abhay Patel, who donated 30 blood packet which are highest in year 2k22 !</p>
               		</div>
            	</div>
				<div className="card2">
					<img src="https://scontent.famd15-1.fna.fbcdn.net/v/t1.6435-9/138577185_848416985728628_5020793669632080597_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_ohc=GbOGyx_GNpoAX-ImXFo&_nc_ht=scontent.famd15-1.fna&oh=00_AfCWxKPmK8EWuvMC9X3zkwuEOOKujcEOsLvOTblaaHbwcg&oe=63B6EBCB"/>
				</div>
            	<div className="card1">
                	<img src="https://media.istockphoto.com/id/1315395944/photo/experienced-phlebotomist-preparing-a-woman-for-blood-draw.jpg?s=612x612&w=0&k=20&c=MX1sfSztBJIiCW0wOqxDWxLuXWOxrlTvOO6azfF2buY=" />
                	<div className="info1">
                    	<h1>Super-Women</h1>
                    	<p>Beauty with Brains ! Maya Patel, who donated 38 blood packet which are highest in year 2k22 !</p>
                	</div>
           	 	</div>
        	</div>
			</div>


	<div className="sevices">
		<h2 align="center">Services Provide by blood camps</h2>
        <hr />
        <p align="center" >The health and safety of the donor as well as the recipient must be safeguarded.</p>
	
	<CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>

	<CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
	</div>
				
			<Faq />
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
				<a href='mailto: binalvasoya2003@gmail.com' rel="noopener noreferrer">Contact Us</a>
			</div>
		</>
	);
};