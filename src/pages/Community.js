import React from "react";
import PropTypes from "prop-types";
// import { useInstagramFeed } from "../hooks/useInstagramFeed";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
	root: {},
});

function Community(props) {
	const classes = props.classes;
	// let photos = useInstagramFeed({
	// 	userId: "39577505025",
	// 	thumbnailWidth: 640,
	// 	photoCount: 12,
	// });
	return (
		<div className={classes.root}>
			{/* {photos &&
				photos.map(({ id, caption, src, width, height, url }) => (
					<a key={id} href={url}>
						<img src={src} alt={caption} />
					</a>
				))} */}
		</div>
	);
}

Community.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Community);
