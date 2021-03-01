import React from 'react';
import PropTypes from 'prop-types';
import withStyles from  '@material-ui/core/styles/withStyles';

const styles = (theme) => ({

});

function GalleryImages(props) {
    const { classes, image }= props;
    return (
        <div className={classes.imageContainer}>
            <img src={image} alt="EventPic" ></img>
        </div>
    )
}

GalleryImages.propTypes = {
    classes: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
}

export default withStyles(styles)(GalleryImages);