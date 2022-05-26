import React from "react";
import Card from "./card";

let LandingPage = () => {
	return (
		<>
			<div className="container">
				<div className="jumbotron my-3">
					<h1 className="display-3">A warm welcome!</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Morbi eget enim vehicula, rutrum augue at, lacinia
						risus. Nunc in dapibus leo. Etiam ultrices pellentesque
						elit ac convallis. Sed ut lectus mattis, consequat risus
						id, fermentum lorem. Vestibulum sit amet dapibus mi, id
						volutpat mi. Sed interdum fermentum facilisis. Sed quis
						dignissim nibh. Mauris at ultricies lectus.
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
				<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 text-center">
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
