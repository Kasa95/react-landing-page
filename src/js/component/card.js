import React from "react";

let Card = () => {
	return (
		<>
			<div class="col">
				<div className="card" /*</>style="width: 18rem;" */>
					<img
						className="card-img-top"
						src="https://via.placeholder.com/500x325"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a href="#" className="btn btn-primary">
							Find out more!
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
export default Card;
