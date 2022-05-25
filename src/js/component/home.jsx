import React from "react";

import LandingPage from "./landingPage.js";

import Navbar from "./navbar.js";

import Footer from "./footer.js";

import Card from "./card.js";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<LandingPage />
			<Footer />
		</>
	);
};

export default Home;
