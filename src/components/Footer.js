import React from 'react';

export default function Footer() {
    return(
        
        <footer id="footer">
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Kapcsolat</h3>
								<p>Bármilyen további kérdés esetén szívesen állunk rendelkezésére az alábbi elérhetőségeken:</p>
								<ul className="footer-links">
									<li><a href="#"><i className="fa fa-map-marker"></i>4400 Nyíregyháza Info utca 1.</a></li>
									<li><a href="tel:+36304442569"><i className="fa fa-phone"></i>+36-30-123-45-67</a></li>
									<li><a href="mailto: rekalaca@rekalaca.com"><i className="fas fa-at"></i>info@infotech.com</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Kategóriák</h3>
								<ul className="footer-links">
									<li><a href="#">PC / Laptop</a></li>
									<li><a href="#">Wi-Fi Routerek</a></li>
									<li><a href="#">Perifériák</a></li>
									<li><a href="#">Kábelek</a></li>
									<li><a href="#">Szolgáltatások</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Információk</h3>
								<ul className="footer-links">
									<li><a href="#">Szolgáltatási díjak</a></li>
									<li><a href="#">Kiszállítás</a></li>
									<li><a href="#">Garancia</a></li>
									<li><a href="#">Adatvédelmi irányelvek</a></li>
									<li><a href="#">Felhasználási feltételek</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Segítünk!</h3>
								<ul className="footer-links">
									<li><a href="#">Fórum</a></li>
									<li><a href="#">Gyakran ismételt kérdések</a></li>
									<li><a href="#">Chat</a></li>
									<li><a href="#">E-m@il</a></li>
									<li><a href="#">Telefon</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="bottom-footer" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							
							<span className="copyright">
								Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made by <a href="https://colorlib.com" target="_blank">InfoTeam & Colorlib</a>
							
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
    )
}