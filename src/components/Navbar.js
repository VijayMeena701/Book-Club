import React, { useRef } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link, useLocation } from "react-router-dom";
import SideDrawer from './SideDrawer';

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
	navbar: {
		display: 'block',
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	drawerMenuBtn: {
		display: 'block',
		position: 'absolute',
		top: '20px',
		right: '0',
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	}
});

const exclueRoutes = ["/admin", "/admin/dashboard"];
function Navbar(props) {
	const classes = props.classes;
	const { pathname } = useLocation();
	const show = exclueRoutes.includes(pathname);
	const reftodiv = useRef(null);
	const [showDrawer, setShowDrawer] = React.useState(false);
	const toggle = (e) => {
		setShowDrawer(!showDrawer)
	}
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
												THE
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
												ILLITERATI
											</div>
										</div>
									</MyButton>
								</Link>
							</div>
							<div className={classes.navbar} ref={reftodiv}>
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
								{/* <Link to="community">
									<MyButton tip="Events" btnClassName={classes.btnClass}>
										<Typography className={classes.navTypo} color="primary">
											Community
										</Typography>
									</MyButton>
								</Link> */}
								<Link to="contact">
									<MyButton tip="Contact" btnClassName={classes.btnClass}>
										<Typography className={classes.navTypo} color="primary">
											Contact
										</Typography>
									</MyButton>
								</Link>
							</div>
							<div className={classes.drawerMenuBtn}>
								<IconButton color="inherit" onClick={(e) => toggle(e)} >
									<MenuIcon color="inherit" />
								</IconButton>
							</div>
						</Toolbar>
						<SideDrawer toggle={() => toggle} show={showDrawer} />
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
