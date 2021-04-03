import React, { useState, useEffect } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import GalleryImage from "../components/GalleryImages";

//sample data
import dataSet from "./data";
import newImagesSet from "./ImagesSet";

import OnGoingEvents from "../components/OnGoingEvents";

import bookMain from "./bookMain.png";
import libraryBook from "./library.png";
import union from "./Union.svg";

const styles = (theme) => ({
	root: {
		background: "#222",
		[theme.breakpoints.down("md")]: {
			background: `url(${bookMain}) no-repeat center center fixed`,
			backgroundSize: "cover",
		},
	},
	ImgContainer: {
		background: `url(${bookMain}) no-repeat center center fixed`,
		backgroundSize: "cover",
		[theme.breakpoints.down("md")]: {
			background: 'none'
		},
		backgroundRepeat: "no-repeat",
	},
	textContainer: {
		postion: "relative",
		background: "rgba(51,51,51, 0.5)",
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "66.083vw",
		verticalAlign: "middle",
		textAlign: "center",
		[theme.breakpoints.down("sm")]: {
			background: 'none',
			height: '100vh'
		},
		"& div": {
			width: "auto",
			height: "auto",
			margin: "auto",
			position: "relative",
			paddingBottom: "18%",
			"& p": {
				// fontFamily: 'Lato',
				fontSize: "3em",
				fontStyle: "normal",
				fontWeight: "900",
				letterSpacing: "0em",
				padding: "0 1em",
				textAlign: "center",
				color: "#fff",
				[theme.breakpoints.down("sm")]: {
					fontSize: '1.5em',
					lineHeight: 'normal'
				}
			},
			"& Button": {
				background: "#189ff9",
				color: "#fff",
				borderRadius: "27.5px",
				fontSize: "20px",
				padding: "0.1em 1em",
				fontWeight: 400,
				marginTop: "30px",
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
		[theme.breakpoints.down("sm")]: {
			width: '95%',
		}
	},
	gridContainer: {
		position: "relative",
		margin: "80px auto 0",
		paddingTop: "2em",
	},
	aboutContTitle: {
		display: "flex",
		"& div": {
			background: "#FFAA04",
			width: "0.25em",
			height: "1.5em",
		},
		"& span": {
			fontSize: "21px",
			fontFamily: "Lato",
			fontWeight: "700",
			color: "#FFAA04",
			letterSpacing: "0.1em",
			marginLeft: "1em",
		},
	},
	aboutcontainer: {
		padding: "2em",
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
			lineHeight: "24px",
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

function Home(props) {
	const classes = props.classes;

	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [galleryImages, setGalleryImages] = useState([]);
	const fetchData = async () => {
		const newData = dataSet;
		setData(newData);
		setGalleryImages(newImagesSet);
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);
		fetchData();
	}, []);

	var eventMarkup;
	var galleryMarkup;

	if (!loading) {
		eventMarkup = (
			<Grid container spacing={2}>
				{data &&
					data.map((datum, index) => {
						return (
							<Grid item md={6} key={index}>
								<OnGoingEvents data={datum} />
							</Grid>
						);
					})}
			</Grid>
		);
		galleryMarkup = (
			<Grid container spacing={2}>
				{galleryImages &&
					galleryImages.map((image, index) => {
						return (
							<Grid item md={4} sm={6} key={index}>
								<GalleryImage imageUrl={image.image} />
							</Grid>
						);
					})}
			</Grid>
		);
	} else {
		eventMarkup = (
			<Grid container spacing={2}>
				<CircularProgress color="primary" size={100} />
			</Grid>
		);
	}
	return (
		<>
			<section className={classes.root}>
				<div className={classes.ImgContainer}>
					<div className={classes.textContainer}>
						<div>
							<p>The literature club is one of the best places to go and refresh yourself after a long, tiring day </p>
							<Link to="/about">
								<Button>Learn More</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className={classes.secondSec}>
					<div className={classes.secContainer}>
						<Grid container spacing={1} className={classes.gridContainer}>
							<Grid item md={6}>
								<div className={classes.welcomeImg}>
									<div>
										<img src={union} alt="" />
									</div>
									<div className="libBookimg">
										<img src={libraryBook} alt=""></img>
									</div>
								</div>
							</Grid>
							<Grid item md={6}>
								<div className={classes.aboutcontainer}>
									<div className={classes.aboutContTitle}>
										<div></div>
										<span>About</span>
									</div>
									<br />
									<div className="title">
										<span>Welcome to the ILLITERATI</span>
									</div>
									<br />
									<br />
									<p>
										Nothing beats unwinding after a tough day like reading poetry, novels or even drama and savouring each written word as it was meant to be. Even better than reading another’s work is to write your own literary masterpiece for the world to appreciate. Spending time and having long enriching discussions on various day to day topics with like-minded people is a joy in itself! Illitertati gives you the perfect platform to achieve all of the above and even more!
									</p>
									<br />
									<br />
									<Link to="/about">
										<Button className={classes.btn}>Learn More</Button>
									</Link>
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
										To help students widen their horizons by encouraging them to develop their literary knowledge and general awareness. To create a community that would serve as a safe space for healthy dialogue, debate and discussions. To encourage reading by introducing students to new genres and books with the help of the community members. To encourage writing through writing competitions, workshops and discussions.
									</p>
								</div>
							</Grid>
						</Grid>
					</div>
					<div className={classes.secContainer}>
						<div className={classes.aboutcontainer}>
							<div className={classes.aboutContTitle}>
								<div></div>
								<span>Events</span>
							</div>
							<br />
							<div className="title">
								<span>On-going Events</span>
							</div>
							{eventMarkup}
							<div style={{ display: "flex", width: "100%" }}>
								<Link to="/events" style={{ margin: "0 auto", width: "180px" }}>
									<Button className={classes.btn}>Learn More</Button>
								</Link>
							</div>
						</div>
					</div>
					<div className={classes.secContainer}>
						<div className={classes.aboutcontainer}>
							<br />
							<div className="title">
								<span>Gallery</span>
							</div>
							{galleryMarkup}
							<div style={{ display: "flex", width: "100%" }}>
								<Link
									to="/gallery"
									style={{ margin: "0 auto", display: 'flex', justifyContent: 'center', width: "180px" }}
								>
									<Button className={classes.btn}>View More</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
