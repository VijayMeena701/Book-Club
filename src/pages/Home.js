import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import bookMain from './bookMain.png';


const styles = (theme)=> ({
    root: {
        background: '#222',
    },
    ImgContainer: {
        backgroundImage: `url(${bookMain})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
    },
    textContainer: {
        postion: 'relative',
        background: 'rgba(51,51,51, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '66.083vw',
        verticalAlign: 'middle',
        textAlign: 'center',
        '& div': {
            width: 'auto',
            height: 'auto',
            margin: 'auto',
            position: 'relative',
            paddingBottom: '18%',
            '& p': {
                // fontFamily: 'Lato',
                fontSize: '60px',
                fontStyle: 'normal',
                fontWeight: '900',
                lineHeight: '80px',
                letterSpacing: '0em',
                textAlign: 'center',
                color: '#fff',
            },
            '& Button': {
                background: '#189ff9',
                color: '#fff',
                borderRadius: '27.5px',
                fontSize: '20px',
                padding: '1% 5%',
                fontWeight: 400,
                marginTop: '30px'
            }
        },
    },
    secondSec: {
        background: '#fff',
        marginTop: '-30vh',
        borderRadius: '0 250px 0 0',
        height: '200vh',
    }
})

function Home(props) {
    const classes = props.classes;
    return (
        <>
            <section className={classes.root}>
                <div className={classes.ImgContainer}>
                    <div className={classes.textContainer}>
                        <div>
                            <p>Together we're building</p>
                            <p>brighter futures</p>
                            <Link to="/about">
                            <Button>Learn More</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={classes.secondSec}>

                </div>
            </section>
        </>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home);
