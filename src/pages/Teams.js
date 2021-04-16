import React, { useState, useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import GalleryImage from '../components/GalleryImages';
import { db } from '../utils/firebase';

//sample data
import coordinatorSet from './coordinator';
import volunteerSet from './volunteer';


import contactMain from './contact.png';


const styles = (theme) => ({
    root: {
        background: '#222',
    },
    ImgContainer: {
        background: `url(${contactMain}) no-repeat center center fixed`,
        backgroundSize: 'cover',
    },
    textContainer: {
        postion: 'relative',
        background: 'rgba(51,51,51, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        verticalAlign: 'middle',
        textAlign: 'center',
        '& div': {
            width: '70%',
            height: '50%',
            margin: 'auto',
            position: 'relative',
            paddingTop: '5%',
            '& p': {
                // fontFamily: 'Lato',
                fontSize: '60px',
                fontStyle: 'normal',
                fontWeight: '900',
                lineHeight: '80px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: '#fff',
            }
        },
    },
    secondSec: {
        background: '#fff',
        marginTop: '-30vh',
        borderRadius: "0 18vw 0 0",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            margin: '-15% auto 0 0'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '-5% auto 0 0'
        }
    },
    secContainer: {
        width: "65vw",
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        }
    },
    gridContainer: {
        position: 'relative',
        margin: '80px auto 0',
        paddingTop: '2em',
    },
    aboutContTitle: {
        display: 'flex',
        '& div': {
            background: '#FFAA04',
            width: '0.25em',
            height: '1.5em',
        },
        '& span': {
            fontSize: '21px',
            fontFamily: 'Lato',
            fontWeight: '700',
            color: '#FFAA04',
            letterSpacing: '0.1em',
            marginLeft: '1em',
        }
    },
    aboutcontainer: {
        padding: '2em',
        '& .imagesBox': {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
        },
        '& .title': {
            fontFamily: 'Lato',
            fontSize: '2.5rem',
            fontStyle: 'normal',
            fontWeight: 900,
            lineHeight: '48px',
            letterSpacing: '0em',
            textAlign: 'center',
        },
        '& p': {
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '30px',
            overflowWrap: 'anywhere',
        }
    },
    welcomeImg: {
        display: 'block',
        position: 'relative',
        width: '100%',
        paddingBottom: '100%',
        '& div': {
            display: 'block',
            width: '100%',
            position: 'absolute',
            top: '-15%',
            left: '-10%',
            '& img': {
                width: '50%',
            }
        },
        '& .libBookimg': {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            '& img': {
                width: '100%',
                height: '100%',
                borderRadius: '0 13rem 0 0',
            }
        }
    },
    btn: {
        background: '#FFAA04',
        color: '#fff',
        borderRadius: '27.5px',
        fontSize: '20px',
        padding: '1% 5%',
        fontWeight: 400,
        marginTop: '30px',
        transition: '0.3s linear',
        '&:hover': {
            background: '#189FF9',
            color: '#E5E5E5',
        }
    },
    containerClass: {
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center'
    }
})

function Teams(props) {
    const classes = props.classes;
    const [loading, setLoading] = useState(true);
    const [coordinator, setCoordinator] = useState([]);
    const [volunteer, setVolunteer] = useState([]);
    const [coreImage, setCoreImage] = useState('');
    const [teamData, setTeamData] = useState(null);
    const fetchData = async () => {
        db.collection('teams').doc(new Date().getFullYear().toString()).get().then((doc) => {
            const data = doc.data();
            console.log(data);
            setTeamData(data);
            setLoading(false);
        }).catch(err => console.log(err));
        // setTeamData(await db.collection('teams').doc(new Date().getFullYear.toString()).get());
        // setCoordinator(teamData.coordinators);
        // setVolunteer(teamData.volunteers);
        // setCoreImage('https://source.unsplash.com/random/640x480');
        // setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
        console.log(teamData);
    }, []);
    return (
        <>
            <section className={classes.root}>
                <div className={classes.ImgContainer}>
                    <div className={classes.textContainer}>
                        <div>
                            <p>Teams</p>
                        </div>
                    </div>
                </div>
                <div className={classes.secondSec}>
                    <div className={classes.secContainer}>
                        <div className={classes.aboutcontainer}>
                            <br />
                            <div className="title">
                                <span>Core</span>
                            </div>
                            <br />
                            <Grid container spaciing={2} className={classes.containerClass}>
                                {
                                    loading !== true ? <Grid item md={4}>
                                        <GalleryImage imageUrl={teamData !== null ? teamData.core.imgUrl : null} />
                                    </Grid> :
                                        <Grid item ms={4}>
                                            <CircularProgress size="3rem" color="secondary" />
                                        </Grid>
                                }
                            </Grid>
                        </div>
                    </div>
                    <div className={classes.secContainer}>
                        <div className={classes.aboutcontainer}>
                            <br />
                            <div className="title">
                                <span>Coordinator</span>
                            </div>
                            <br />
                            <Grid container spacing={2} className={classes.containerClass}>
                                {
                                    loading !== true ? teamData.coordinators.map((datum, index) => (
                                        <Grid key={index} item md={4}>
                                            <GalleryImage imageUrl={datum.imgUrl} />
                                        </Grid>
                                    )) :
                                        (
                                            <>
                                                <CircularProgress size="3rem" color="secondary" />
                                            </>
                                        )
                                }
                            </Grid>
                        </div>
                    </div>
                    <div className={classes.secContainer}>
                        <div className={classes.aboutcontainer}>
                            <br />
                            <div className="title">
                                <span>Volunteer</span>
                            </div>
                            <br />
                            <Grid container spacing={2} className={classes.containerClass}>
                                {
                                    loading !== true ? teamData.volunteers.map((datum, index) => (
                                        <Grid key={datum.rollNo} item md={4}>
                                            <GalleryImage imageUrl={datum.imgUrl} />
                                        </Grid>
                                    )) :
                                        (
                                            <>
                                                <CircularProgress size="3rem" color="secondary" />
                                            </>
                                        )
                                }
                            </Grid>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Teams.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Teams);
