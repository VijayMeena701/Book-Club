import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { Link, useLocation } from 'react-router-dom';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

import Tooltip from '@material-ui/core/Tooltip';

const styles = (theme) => ({
  mainfooterContainer: {
    width: '100vw',
    maxWidth: '1920px',
  },
  footer: {
    display: 'block',
    width: '100vw',
    maxWidth: '1920px',
    left: 0,
    bottom: 0,
  },
  container: {
    width: '100%',
    background: '#131721',
    opacity: '0.9',
    '& .secondaryCont': {
      width: '80%',
      margin: '0 auto',
      padding: '4em 0',
    },
  },
  main: {
    width: '100%',
    padding: '15px 10px',
    '& .title,.useful_Links': {
      width: '100%',
      '& span': {
        color: '#fff',
        fontSize: '21px',
        fontWeight: '900',
      },
      '& p': {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '23px',
        padding: '0 2em 0 0',
        color: '#fff',
      },
      '& .socialLinks': {
        listStyle: 'none',
        display: 'flex',
        '& li': {
          display: 'flex',
          alignItems: 'center',
          padding: '0.25em 1em',
          margin: '0',
          color: '#fff',
          '&:hover': {
            color: '#FFAA04',
          },
        },
      },
      '& ul': {
        listStyle: 'none',
        '& li': {
          display: 'flex',
          alignItems: 'center',
          padding: '0.25em 1em',
          margin: '0',
          color: '#fff',
          '&:hover': {
            color: '#FFAA04',
          },
        },
      },
    },
  },
  secMain: {
    width: '100%',
    padding: '15px 10px',
    '& .title,.useful_Links': {
      width: '100%',
      '& span': {
        color: '#fff',
        fontSize: '21px',
        fontWeight: '900',
      },
      '& p': {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '23px',
        padding: '0 2em 0 0',
        color: '#fff',
      },
      '& .contactInfo': {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        '& li': {
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '15px',
          padding: '0.25em 1em',
          margin: '0',
          color: '#fff',
        },
      },
    },
  },
  copyRightCont: {
    width: '100%',
    background: '#131721',
    '& p': {
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '23px',
      letterSpacing: '1px',
      textAlign: 'center',
      color: '#fff',
      padding: '2em',
    },
  },
});

const exclueRoutes = ['/admin', '/admin/dashboard'];
function Footer(props) {
  const classes = props.classes;
  const { pathname } = useLocation();
  const show = exclueRoutes.includes(pathname);

  return (
    <>
      {!show && (
        <div className={classes.mainfooterContainer}>
          <Grid container className={classes.footer}>
            <Grid item className={classes.container} md={12}>
              <Grid container={true} spacing={0} className="secondaryCont">
                <Grid item md={9} className={classes.main}>
                  <Grid container={true}>
                    <Grid item md={8} className="title">
                      <Grid container={true}>
                        <Grid item={true} sm={12} style={{ margin: '1em 0' }}>
                          <span>About Book Club</span>
                        </Grid>
                        <Grid item={true} sm={12} style={{ margin: '1em 0' }}>
                          <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.{' '}
                          </p>
                        </Grid>
                        <Grid item={true} sm={12} style={{ margin: '1em 0' }}>
                          <ul className="socialLinks">
                            <li>
                              <Tooltip title="Facebook">
                                <a href="# " rel="noreferrer noopener">
                                  <FacebookIcon
                                    style={{ fontSize: '3em', color: '#fff' }}
                                  />
                                </a>
                              </Tooltip>
                            </li>
                            <li>
                              <Tooltip title="Twitter">
                                <a href="# " rel="noreferrer noopener">
                                  <TwitterIcon
                                    style={{ fontSize: '3em', color: '#fff' }}
                                  />
                                </a>
                              </Tooltip>
                            </li>
                            <li>
                              <Tooltip title="Instagram">
                                <a href="# " rel="noreferrer noopener">
                                  <InstagramIcon
                                    style={{ fontSize: '3em', color: '#fff' }}
                                  />
                                </a>
                              </Tooltip>
                            </li>
                            <li>
                              <Tooltip title="Youtube">
                                <a href="# " rel="noreferrer noopener">
                                  <YouTubeIcon
                                    style={{ fontSize: '3em', color: '#fff' }}
                                  />
                                </a>
                              </Tooltip>
                            </li>
                          </ul>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={4} className="useful_Links">
                      <Grid container={true}>
                        <Grid item={true} xs={12} style={{ margin: '1em 0' }}>
                          <span>Useful Links</span>
                        </Grid>
                        <Grid item={true} xs={12} style={{ margin: '1em 0' }}>
                          <ul>
                            <Link to="">
                              <li>
                                <ChevronRightIcon />
                                Home
                              </li>
                            </Link>
                            <Link to="about">
                              <li>
                                <ChevronRightIcon />
                                About
                              </li>
                            </Link>
                            <Link to="gallery">
                              <li>
                                <ChevronRightIcon />
                                Gallery
                              </li>
                            </Link>
                            <Link to="teams">
                              <li>
                                <ChevronRightIcon />
                                Teams
                              </li>
                            </Link>
                            <Link to="events">
                              <li>
                                <ChevronRightIcon />
                                Events
                              </li>
                            </Link>
                            <Link to="contacts">
                              <li>
                                <ChevronRightIcon />
                                Contacts
                              </li>
                            </Link>
                          </ul>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={3} className={classes.secMain}>
                  <Grid container={true} className="title">
                    <Grid item={true} sm={12} style={{ margin: '1em 0' }}>
                      <span>Contact Info</span>
                    </Grid>
                    <Grid item={true} sm={12} style={{ margin: '1em 0' }}>
                      <ul className="contactInfo">
                        <li>
                          <LocationOnIcon />
                          <p>
                            Melakottaiyur Village,Near Kandigai, Off
                            Vandalur-Kelambakkam Road, Nellikuppam, Chennai,
                            Tamil Nadu 600127
                          </p>
                        </li>
                        <li>
                          <PhoneIcon />
                          <p>(+91)XXX-XXX-XXXX</p>
                        </li>
                        <li>
                          <EmailIcon />
                          <p>info@yoursite.com</p>
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} className={classes.copyRightCont}>
              <p>© 2021 Book Club. All rights reserved</p>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
