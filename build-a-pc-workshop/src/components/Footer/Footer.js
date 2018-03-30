import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer classNameName="footer">
    <div className="container">
			<div className="row">
        <div className="col-md-12">

					<ul className="footer-follow">
						<li><a href=""><i className="fa fa-facebook"></i></a></li>
						<li><a href=""><i className="fa fa-twitter"></i></a></li>
						<li><a href=""><i className="fa fa-google-plus"></i></a></li>
						<li><a href=""><i className="fa fa-instagram"></i></a></li>
						<li><a href=""><i className="fa fa-linkedin"></i></a></li>
						<li><a href=""><i className="fa fa-youtube"></i></a></li>
					</ul>

					<div className="footer-copyright">
						<p>Copyright © 2018. All Rights Reserved. <a href="http://scanfcode.com/" target="_blank" rel="noopener noreferrer">Build-A-PC Workshop</a>, Where Best Rigs are Made.</p>
					</div>
				</div>
			</div>
		</div>
  </footer>
);

export default Footer;
