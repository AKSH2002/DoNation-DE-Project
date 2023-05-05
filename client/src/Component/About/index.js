import React from 'react'
import { Contact } from '../HomePage'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import './About.css';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';


export default function About() {
  return (
      <>
        <div className='aboutImg'>
			    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/about.png'})`}}></div>
		    </div>
        <div className='about'>
          <div>
            <span className='aboutTag'>Who Are We?</span>
            <section id='subTag'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</section>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Card sx={{ width: 275, backgroundColor:'#c6414c', marginTop:'50px'}}>
                <CardContent>
                  <img className='WAWimg' src={process.env.PUBLIC_URL + '/assets/mission.png'} alt='mission'/>
                  <h3>MISSION</h3>
                  <p>To enhance the well being of patients in our service area by assuring a reliable and economical supply of the safest possible blood, by providing innovative hemotherapy services, and by promoting research and education programs in transfusion medicine.</p>
                </CardContent>
              </Card>
              <Card sx={{ width: 275, backgroundColor:'#c6414c', marginTop:'50px'}}>
                <CardContent>
                  <img className='WAWimg' src={process.env.PUBLIC_URL + '/assets/vision.png'} alt='mission'/>
                  <h3>VISION</h3>
                  <p>To pave way for a safer and better tommorrow.
Safer, by bringing blood donors and those in need to a common platform.
Better, by providing every person what he/she deserves the most, best education.</p>
                </CardContent>
              </Card>
            </Grid>
          </div>

          <hr/>

          <div>
            <span className='aboutTag'>Why We?</span>
            <div className="cardholder">
              <div className="card">
                <img
                  id="search"
                  src={process.env.PUBLIC_URL + '/assets/WYW4.png'}
                  alt="Geo-Location"
                />
                <section>
                  <h4>Geo-Location Search</h4>
                  With the geo-search feature, finding blood donors has become easier than ever. Enter your location and you will be shown the donors available in the closest proximity
                </section>
              </div>

              <div className="card">
                <img
                  id="search"
                  src={process.env.PUBLIC_URL + '/assets/WYW2.png'}
                  alt="Geo-Location"
                />
                <section>
                  <h4>Real Time Connect</h4>
                  No delays in receiving blood anymore. Connect with donors and recipients in real-time
                </section>
              </div>

              <div className="card">
                <img
                  id="search"
                  src={process.env.PUBLIC_URL + '/assets/WYW1.png'}
                  alt="Geo-Location"
                />
                <section>
                  <h4>Notification</h4>
                  Get updates on blood requests so that you are informed the moment a donor is available or a request is made
                </section>
              </div>
              <div className="card">
                <img
                  id="search"
                  src={process.env.PUBLIC_URL + '/assets/WYW3.png'}
                  alt="Geo-Location"
                />
                <section>
                  <h4>User Friendly</h4>
                  user-friendly website is a page that looks professional and is easy for anyone who visits your website to navigate
                </section>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          {/* <hr /> */}
          <br />
          <br />
          <br />
          <div>
            <span className='aboutTag' style={{letterSpacing:"2px"}}>OUR TEAM</span>
            <div className="cardholder">
              <div className="member">
                <div className="image" style={{background:`linear-gradient(180deg, rgba(0, 0, 0, 0.041), rgba(23, 85, 177, 0.233), rgba(241, 85, 228, 0.342)), url(${process.env.PUBLIC_URL + '/assets/team/aksh.jpg'})`}}>
                    {/* <h3>Developer</h3> */}
                </div>
                <section className="member-details">
                    <span>Aksh Darji</span>
                    <p>Web Developer</p>
                    <section id="link">
                        <a href="https://www.linkedin.com/in/aksh-darji-127316210/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/AKSH2002" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    </section>
                </section>
              </div>

              <div className="member">
                <div className="image" style={{background:`linear-gradient(180deg, rgba(0, 0, 0, 0.041), rgba(23, 85, 177, 0.233), rgba(241, 85, 228, 0.342)), url(${process.env.PUBLIC_URL + '/assets/team/binal.jpg'})`}}>
                    {/* <h3>Developer</h3> */}
                </div>
                <section className="member-details">
                    <span>Binal Patel</span>
                    <p>Web Developer</p>
                    <section id="link">
                        <a href="https://www.linkedin.com/in/binal-patel-329290239/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/binu0405" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    </section>
                </section>
              </div>

              <div className="member">
                <div className="image" style={{background:`linear-gradient(180deg, rgba(0, 0, 0, 0.041), rgba(23, 85, 177, 0.233), rgba(241, 85, 228, 0.342)), url(${process.env.PUBLIC_URL + '/assets/team/tulsi.jpeg'})`}}>
                    {/* <h3>Developer</h3> */}
                </div>
                <section className="member-details">
                    <span>Tulsi Yadav</span>
                    <p>Web Developer</p>
                    <section id="link">
                        <a href="https://www.linkedin.com/in/tulsi-yadav-9a5332227" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/tulsiyadav" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    </section>
                </section>
              </div>
            </div>
          </div>

        </div>
        <Contact />
      </>
  )
}

