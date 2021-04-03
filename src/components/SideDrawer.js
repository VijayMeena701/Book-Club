import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core';
import MyButton from '../utils/MyButton';

const styles = (theme) => ({
    root: {
        width: '70%',
        height: '100vh',
        display: 'flex',
        position: 'fixed',
        zIndex: '9900',
        transform: 'translateX(-100%)',
        transition: 'transform 0.4s ease-out',
        background: 'rgba(0,0,0,0.5)',
        color: '#000',
        overflow: 'hidden',
        [theme.breakpoints.up("md")]: {
            display: 'none',
        }
    },
    rootShow: {
        transform: 'translateX(0)',
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
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        margin: 'auto',
        justifyContent: 'center',
        paddingLeft: '3em',
        background: 'rgba(0,0,0,0.7)'
    }
})

function SideDrawer(props) {
    const { classes, show, toggle } = props;
    return (
        <div className={show ? `${classes.root} ${classes.rootShow}` : classes.root}>
            <div className={classes.container} onClick={toggle()} >
                <Link to="/">
                    <MyButton tip="Home" btnClassName={classes.btnClass}>
                        <Typography className={classes.navTypo} color="primary">
                            Home
					</Typography>
                    </MyButton>
                </Link>
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
        </div>
    )
}

SideDrawer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideDrawer);