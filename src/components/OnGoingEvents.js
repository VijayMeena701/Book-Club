import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = (theme) => ({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
    },
    imgContainer: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        '& img': {
            width: '100%',
            height: '100%'
        }
    },
    eventHeading: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '1.25rem 2rem',
        '& span': {
            fontSize: '21px',
            lineHeight: 2,
            fontWeight: '900',
        },
        '& p': {
            fontfamily: 'Roboto',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: 2,
            color: '#666'
        }
    }
});

function OnGoingEvents(props) {
    const classes = props.classes;
    const { imageUrl, title, desc } = props.data;
    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img src={imageUrl} alt="" />
            </div>
            <div className={classes.eventHeading}>
                <span>{title}</span>
                <p>{desc}</p>
            </div>
            <div />
        </div>
    )
}
OnGoingEvents.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
}

export default withStyles(styles)(OnGoingEvents);