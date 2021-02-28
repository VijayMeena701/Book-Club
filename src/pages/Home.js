import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import bookMain from './bookMain.png';


const styles = (theme)=> ({
    ImgContainer: {
        maxWidth: '1920px',
        maxHeight: '1288px',
        backgroundImage: `linear-gradient(rgba(51,51,51,0.5), rgba(51,51,51,0.5)), url(${bookMain})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    },
    containerLayer: {
        height: '100vh',
    }
})

function Home(props) {
    const classes = props.classes;
    return (
        <>
            <div className={classes.ImgContainer}>
                <div className={classes.containerLayer}>

                </div>
            </div>
        </>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home);
