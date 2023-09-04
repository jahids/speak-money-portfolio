import React from "react";
import Head from "next/head";
import Script from "next/script";
import NavBar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = ({ children }) => {
	console.log("js");
	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>

				<meta name="version" content="1.5.0" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>Speak money</title>
				{/* <link rel="shortcut icon" href="assets/images/favicon.ico" /> */}
			</Head>
			<NavBar />
			{children}
			<Footer />

			<a
				href="#"
				id="back-to-top"
				className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9"
			>
				<i className="uil uil-arrow-up"></i>
			</a>
			<div className="fixed top-1/4 -right-2 z-50">
				<span className="relative inline-block rotate-90">
					<input
						type="checkbox"
						className="checkbox opacity-0 absolute"
						id="chk"
					/>
				</span>
			</div>
			<Script async src="/assets/libs/tiny-slider/min/tiny-slider.js" />
			<Script async src="/assets/libs/tobii/js/tobii.min.js" />
			<Script async src="/assets/libs/feather-icons/feather.min.js" />
			<Script async src="/assets/js/plugins.init.js" />
			<Script async src="/assets/js/app.js" />
		</>
	);
};

export default MainLayout;
