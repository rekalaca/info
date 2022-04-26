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
									<li><a href="https://goo.gl/maps/mKw8JtNMFGFzbWFV7" target="_blank"><i className="fa fa-map-marker"></i>4400 Nyíregyháza Info utca 1.</a></li>
									<li><a href="tel:+36304442569"><i className="fa fa-phone"></i>+36-30-123-45-67</a></li>
									<li><a href="mailto: rekalaca@rekalaca.com"><i className="fas fa-at"></i>info@infotech.com</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Kategóriák</h3>
								<ul className="footer-links">
									<li><a href="/pc">PC / Laptop</a></li>
									<li><a href="/routers">Wi-Fi Routerek</a></li>
									<li><a href="/perifer">Perifériák</a></li>
									<li><a href="/cable">Kábelek</a></li>
									<li><a href="/szolgaltatas">Szolgáltatások</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Információk</h3>
								<ul className="footer-links">
									<li><a href="/szolgaltatas">Szolgáltatási díjak</a></li>
									<li><a href="/kiszall">Kiszállítás</a></li>
									<li><a href="#">Garancia</a></li>
									<li><a href="#">Adatvédelmi irányelvek</a></li>
									<li><a href="/aszf">Általános Szerződési Feltételek (ÁSZF)</a></li>
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
									<li><a href="mailto: rekalaca@rekalaca.com">E-m@il</a></li>
									<li><a href="tel:+36304442569">Telefon</a></li>
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
								Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made by <a href="https://colorlib.com" target="_blank">InfoTeam & Colorlib(a végére már csak nyomokban...)</a>
							
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
    )
}