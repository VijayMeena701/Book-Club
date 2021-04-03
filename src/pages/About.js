import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import bookMain from "./bookMain.png";

const styles = (theme) => ({
	root: {
		background: "#222",
	},
	ImgContainer: {
		background: `url(${bookMain}) no-repeat center center fixed`,
		backgroundSize: "cover",
	},
	textContainer: {
		postion: "relative",
		background: "rgba(51,51,51, 0.5)",
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100vh",
		verticalAlign: "middle",
		textAlign: "center",
		"& div": {
			width: "70%",
			height: "50%",
			margin: "auto",
			position: "relative",
			paddingTop: "5%",
			"& p": {
				// fontFamily: 'Lato',
				fontSize: "60px",
				fontStyle: "normal",
				fontWeight: "900",
				lineHeight: "80px",
				letterSpacing: "0em",
				textAlign: "left",
				color: "#fff",
			},
		},
	},
	secondSec: {
		background: "#fff",
		marginTop: "-30vh",
		borderRadius: "0 18vw 0 0",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		[theme.breakpoints.down("md")]: {
			margin: "-15% auto 0 0",
		},
		[theme.breakpoints.down("sm")]: {
			margin: "-5% auto 0 0",
		},
	},
	secContainer: {
		width: "65vw",
		margin: "auto",
	},
	gridContainer: {
		position: "relative",
		padding: "5em 0",
	},
	aboutcontainer: {
		"& .title": {
			fontFamily: "Lato",
			fontSize: "2.5rem",
			fontStyle: "normal",
			fontWeight: 900,
			lineHeight: "48px",
			letterSpacing: "0em",
			textAlign: "left",
		},
		"& p": {
			fontFamily: "Roboto",
			fontWeight: "400",
			fontSize: "18px",
			lineHeight: "30px",
			overflowWrap: "anywhere",
		},
	},
	welcomeImg: {
		display: "block",
		position: "relative",
		width: "100%",
		paddingBottom: "100%",
		"& div": {
			display: "block",
			width: "100%",
			position: "absolute",
			top: "-15%",
			left: "-10%",
			"& img": {
				width: "50%",
			},
		},
		"& .libBookimg": {
			position: "absolute",
			top: "0",
			left: "0",
			width: "100%",
			"& img": {
				width: "100%",
				height: "100%",
				borderRadius: "0 13rem 0 0",
			},
		},
	},
	btn: {
		background: "#FFAA04",
		color: "#fff",
		borderRadius: "27.5px",
		fontSize: "20px",
		padding: "1% 5%",
		fontWeight: 400,
		marginTop: "30px",
		transition: "0.3s linear",
		"&:hover": {
			background: "#189FF9",
			color: "#E5E5E5",
		},
	},
});

function About(props) {
	const classes = props.classes;
	return (
		<>
			<section className={classes.root}>
				<div className={classes.ImgContainer}>
					<div className={classes.textContainer}>
						<div>
							<p>About Us</p>
						</div>
					</div>
				</div>
				<div className={classes.secondSec}>
					<div className={classes.secContainer}>
						<Grid container spacing={3} className={classes.gridContainer}>
							<Grid item md={12}>
								<div className={classes.aboutcontainer}>
									<div className="title">
										<span>Welcome to the ILLITERATI</span>
									</div>
									<br />
									<br />
									<p>
										Nothing beats unwinding after a tough day like reading poetry,
										novels or even drama and savouring each written word as it was meant to be.
										Even better than reading another’s work is to write your own literary masterpiece for the world to appreciate.
										Spending time and having long enriching discussions on various day to day topics with like-minded people is a joy in itself! Illitertati gives you the perfect platform to achieve all of the above and even more!
									</p>
									<br />
								</div>
							</Grid>
							<Grid item md={12}>
								<div className={classes.aboutcontainer}>
									<br />
									<div className="title">
										<span>Vision</span>
									</div>
									<br />
									<br />
									<p>
										To help students widen their horizons by encouraging them to develop their literary knowledge and general awareness.
										To create a community that would serve as a safe space for healthy dialogue, debate and discussions.
										To encourage reading by introducing students to new genres and books with the help of the community members.
										To encourage writing through writing competitions, workshops and discussions.
									</p>
								</div>
							</Grid>
						</Grid>
					</div>
				</div>
			</section>
		</>
	);
}

About.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
