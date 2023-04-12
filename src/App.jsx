import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import { useEffect } from "react";

function App() {
	const loc = useLocation();
	useEffect(() => {
		if (loc.pathname === "/") {
			document.title = `Now ${loc.pathname.replace("/", "-Home")}`;
		} else {
			document.title = `Now ${loc.pathname.replace("/", "-")}`;
		}
		if (loc.state) {
			document.title = loc.state;
		}
		// console.log(loc);
	}, [loc.pathname]);

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
