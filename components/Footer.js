import React, { Component } from 'react';

class Footer extends Component {
  currentYear() {
    //Get current year and add to footer
  	let dateToday = new Date();
  	let currentYear = dateToday.getFullYear();
    return currentYear;
  }

  MapSrc() {
    let srcMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.954522171043!2d85.35324804207555!3d27.69748349151295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8676accf7998cd78!2sBridgewater+A+Level+Hostel!5e0!3m2!1sen!2snp!4v1493961463993";
    return srcMap;
  }

  render() {
    return(
      <footer>
        <section>
  				<div className="foot-company">
  					<ul>
  						<li className="hero company">This Company</li>
  						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit officia, perferendis ipsa reiciendis. Enim optio tempora, dolor voluptatum quaerat distinctio perspiciatis aliquam, sed, quam nisi odio, natus iure dolores repudiandae.</li>
  					</ul>
  				</div>
  				<div className="foot-links">
  					<ul>
  						<li className="hero bold">Links</li>
  						<li><a href="..">Home</a></li>
  						<li><a href="about">About Us</a></li>
  						<li><a href="courses">Courses</a></li>
  						<li><a href="events">Events</a></li>
  						<li><a href="team">Our Team</a></li>
  						<li><a href="resources">Resources</a></li>
  					</ul>
  				</div>
  				<div className="foot-contact">
  					<ul>
  						<li className="hero bold">Contact</li>
  						<li>Baburam Acharya Street <br /> Sinamangal, Kathmandu <br />Bagmati 44600</li>
  						<br />
  						<li>(+977) 01-123456</li>
  						<li>(+977) 980-707-9342</li>
  						<li>oshan_shrestha@outlook.com</li>
  					</ul>
  				</div>
  				<div className="copyright">
  					<p>&copy; <span id="year">{this.currentYear()}</span> This Company | All Rights Reserved <br /> Designed and Developed by <a href="https://thisisoshan.github.io">Oshan Shrestha</a></p>
  				</div>
          <div className="map">
					<iframe id="map" src={this.MapSrc()} width="400" height="300" frameBorder="0"  allowFullScreen></iframe>
				</div>
  			</section>
      </footer>
    );
  }

}

export default Footer;
