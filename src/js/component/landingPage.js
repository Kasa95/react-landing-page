import React from "react";
import Card from "./card";

let LandingPage = () => {
	return (
		<>
			<div className="container">
				<div className="jumbotron my-3">
					<h1 className="display-4">Hello, world!</h1>
					<p>
						It uses utility classes for typography and spacing to
						space content out within the larger container.
					</p>
					<p className="lead">
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							Learn more
						</a>
					</p>
				</div>
			</div>
			<div className="container">
				<div class="row row-cols-1 row-cols-md-4 text-center">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

export default LandingPage;
