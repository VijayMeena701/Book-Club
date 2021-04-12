import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
    imageContainer: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        '& img': {
            width: '100%',
            height: '100%'
        }
    }
});

function GalleryImages(props) {
    const { classes, imageUrl } = props;
    return (
        <div className={classes.imageContainer}>
            <img src={imageUrl} alt="EventPic" ></img>
        </div>
    )
}

GalleryImages.propTypes = {
    classes: PropTypes.object.isRequired,
    imageUrl: PropTypes.string.isRequired,
}

export default withStyles(styles)(GalleryImages);