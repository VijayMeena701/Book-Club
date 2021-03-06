import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Teams from "./pages/Teams";
// import Community from "./pages/Community";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Error from './pages/Error'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#e5e5e5",
			main: "#ffffff",
			dark: "#e5e5e5",
			contrastText: "#fff",
		},
		secondary: {
			light: "#484848",
			main: "#212121",
			dark: "#000000",
			contrastText: "#fff",
		},
	},
	typography: {
		useNextVariants: true,
	},
});

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<Navbar />
				<div className="container">
					<AdminAuthProvider>
						<Switch>
							<Route exact path="/admin" component={AdminLogin} />
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
							<Route exact path="/contact" component={Contact} />
							<Route exact path="/gallery" component={Gallery} />
							<Route exact path="/events" component={Events} />
							<Route exact path="/teams" component={Teams} />
							{/* <Route exact path="/community" component={Community} /> */}
							<PrivateRoute
								exact
								path="/admin/dashboard"
								component={AdminDashboard}
							/>
							<Route exact path="*" component={Error} />
						</Switch>
					</AdminAuthProvider>
				</div>
				<Footer />
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
