import React,{useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//Material UI Stuff
import { Button, Grid, TextField} from '@material-ui/core';

import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import PhoneIcon from '@material-ui/icons/Phone';


import contactMain from './contact.png';


const styles = (theme)=> ({
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
        width: '100%',
        padding: '5em 0',
        marginTop: '-30vh',
        borderRadius: '0 250px 0 0',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: '-15% auto'
        },
        [theme.breakpoints.down('sm')]:{
            margin: '-5% auto'
        }
    },
    secContainer: {
        width: '65vw',
        margin: 'auto'
    },
    gridContainer: {
        position: 'relative',
        margin: '0 auto',
        width: '100%',
    },
    aboutcontainer: {
        padding: '2em',
        '& .title':{
            fontFamily: 'Lato',
            fontSize: '2.5rem',
            fontStyle: 'normal',
            fontWeight: 900,
            lineHeight: '48px',
            letterSpacing: '0em',
            textAlign: 'left',
        },
        '& ul':{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            listStyle: 'none',
            gap: '2em',
            '& li': {
                display: 'flex',
                width: '100%',
                gap: '1em',
                '& .icon': {
                    color: '#FFAA04',
                    fontSize: '3em'
                },
                '& span': {
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    fontSize: '1.125em',
                    lineheight: '24px',
                    padding: '1em 0',
                    overflowWrap: 'anywhere',
                },
                '& p': {
                    fontFamily: 'lato',
                    fontStyle: 'normal',
                    fontWeight: '900',
                    fontSize: '1.5em',
                    lineHeight: '40px',
                    color: '#FFAA04'
                }
            }
        },
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
    contactContainer: {
        width: '85%',
        height: 'auto',
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        justifySelf: 'center',
        // border: '2px solid #000',
        '& .title':{
            width: '100%',
            margin: 'auto',
            background: '#FFAA04',
            textAlign: 'center',
            borderRadius: '0 2.75em 0 0',
            padding: '2em',
            '& span': {
                color: '#fff',
                fontSize: '28px',
                fontWeight: '900',
                lineheight: '2em',
            }

        }
    },
    contactForm: {
        width: '100%',
        display: 'flex',
        padding: '2em 0',
        justifySelf: 'center',
        background: '#161D30',
    },
    formRoot: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 'auto',
        '& .textField': {
            color: '#fff',
            margin : '1em 0',
        }
    },
    multilineColor: {
        color: '#000',
        background: '#fff',
    }
});

function Home(props) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const classes = props.classes;

    const handleSubmit = (event) => {
        event.preventDefault();
        const messageData = {
            name: name,
            email: email,
            message: message,
        }
        console.log(messageData); // send the data to server here.
        setName('');
        setEmail('');
        setMessage('');
    }
    return (
        <>
            <section className={classes.root}>
                <div className={classes.ImgContainer}>
                    <div className={classes.textContainer}>
                        <div>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
                <div className={classes.secondSec}>
                    <div className={classes.secContainer}>
                        <Grid container spacing={1} className={classes.gridContainer}>
                            <Grid item md={6} className={classes.gridContainer}>
                                <div className={classes.aboutcontainer}>
                                    <div className="title">
                                        <span>Contact Info</span>
                                    </div>
                                    <br/>
                                    <ul>
                                        <li>
                                            <PhoneIcon className="icon" />
                                            <div>
                                                <span>For more queries call us</span>
                                                <p>(+91) 234 678 9012</p>
                                            </div>
                                        </li>
                                        <li>
                                            <MapOutlinedIcon className="icon" />
                                            <div>
                                                <span>Address</span>
                                                <p>Melakottaiyur Village,Near Kandigai, Off Vandalur-Kelambakkam Road, Nellikuppam, Chennai, Tamil Nadu 600127</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item md={6} className={classes.gridContainer}>
                                <div className={classes.contactContainer}>
                                    <div className="title">
                                        <span>Contact Us</span>
                                    </div>
                                    <div className={classes.contactForm}>
                                        <form className={classes.formRoot} autoComplete="off" onSubmit={handleSubmit}>
                                            <TextField className="textField" InputProps={{className: classes.multilineColor}} InputLabelProps={{shrink: false}} type="text" variant="outlined" name='name' value={name} onChange={(e)=> setName(e.target.value)} placeholder="Your Name" />
                                            <TextField className="textField" InputProps={{className: classes.multilineColor}} InputLabelProps={{shrink: false}} type="email" variant="outlined" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Your Email" />
                                            <TextField className="textField" InputProps={{className: classes.multilineColor}} InputLabelProps={{shrink: false}} type="text" variant="outlined" name='message' value={message} onChange={(e)=> setMessage(e.target.value)} multiline={true} rows={3} placeholder="Your Message" />
                                            <Button type="submit" className={classes.btn} >Submit</Button>
                                        </form>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        </>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home);