import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import MyButton from "../utils/MyButton";

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: "1920px",
	},
	appBarClass: {
		background: "rgba(0,0,0,0.4)",
		mixBlendMode: "normal",
	},
	toolBar: {
		display: "flex",
		justifyContent: "space-around",
	},
	btnClass: {
		borderRadius: "5px",
	},
	navTypo: {
		// fontFamily: 'Poppins',
		fontSize: "18px",
		fontStyle: "normal",
		fontWeight: 400,
		lineHeight: "27px",
		letterSpacing: "0em",
		textAlign: "center",
	},
});

const exclueRoutes = ["/admin", "/admin/dashboard"];
function Navbar(props) {
	const classes = props.classes;
	const { pathname } = useLocation();
	const show = exclueRoutes.includes(pathname);
	return (
		<>
			{!show && (
				<div className={classes.root}>
					<AppBar position="absolute" className={classes.appBarClass}>
						<Toolbar className={classes.toolBar}>
							<div>
								<Link to="/">
									<MyButton tip="Home" btnClassName={classes.btnClass}>
										<div>
											<div
												style={{
													fontSize: 18,
													fontWeight: "bold",
													color: "#fff",
													textAlign: "left",
													letterSpacing: "0.15em",
												}}
											>
												BOOK
											</div>
											<div
												style={{
													fontSize: 30,
													fontWeight: "bold",
													color: "#fff",
													textAlign: "left",
													letterSpacing: "0.15em",
												}}
											>
												CLUB
											</div>
										</div>
									</MyButton>
								</Link>
							</div>
							<div>
								<Link to="about">
									<MyButton tip="About Us" btnClassName={classes.btnClass}>
										<Typography className={classes.navTypo} color="primary">
											About
										</Typography>
									</MyButton>
								</Link>
								<Link to="gallery">
									<MyButton tip="Gallery" btnClassName={classes.btnClass}>
										<Typography className={classes.navTypo} color="primary">
											Gallery
										</Typography>
									</MyButton>
								</Link>
								<Link to="teams">
									<MyButton tip="Teams" btnClassName={classes.btnClass}>
										<Typography className={classes.navTypo} color="primary">
											Teams
										</Typography>
									</MyButton>
								</Link>
								<Link to="events">
									<MyButton tip="Events" btnClassName={classes.btnClass}>
										<Typography className={classes.navTypo} color="primary">
											Events
										</Typography>
									</MyButton>
								</Link>
								<Link to="community">
									<MyButton tip="Events" btnClassName={classes.btnClass}>
										<Typography className={classes.navTypo} color="primary">
											Community
										</Typography>
									</MyButton>
								</Link>
								<Link to="contact">
									<MyButton tip="Contact" btnClassName={classes.btnClass}>
										<Typography className={classes.navTypo} color="primary">
											Contact
										</Typography>
									</MyButton>
								</Link>
							</div>
						</Toolbar>
					</AppBar>
				</div>
			)}
		</>
	);
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
