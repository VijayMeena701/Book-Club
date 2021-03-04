import React,{useState, useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import GalleryImage from '../components/GalleryImages';
import newImagesSet from './ImagesSet';

//Material UI Stuff
import Grid from '@material-ui/core/Grid';


import bookMain from './bookMain.png';


const styles = (theme)=> ({
    root: {
        background: '#222',
    },
    ImgContainer: {
        background: `url(${bookMain}) no-repeat center center fixed`,
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
            margin: '-15% auto 0 0'
        },
        [theme.breakpoints.down('sm')]:{
            margin: '-5% auto 0 0'
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
        width: '100%',
        '& .imagesBox': {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
        }
    }
});

function Gallery(props) {
    const [galleryImages, setGalleryImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const classes = props.classes;
    const fetchData = async () => {
        setGalleryImages(newImagesSet);
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);
    
    var galleryMarkup;

    if(!loading){
        galleryMarkup = <Grid container spacing={2}>
            {
                galleryImages && galleryImages.map((image, index) => {
                    return <Grid item md={3} sm ={6} key={index} className="imagesBox" ><GalleryImage imageUrl={image.image} /></Grid>
                })
            }
        </Grid>
        
    }
    else{
        galleryMarkup = <Grid container spacing={2}>
            <CircularProgress color="primary" size={100} />
        </Grid>
    }

    return (
        <>
            <section className={classes.root}>
                <div className={classes.ImgContainer}>
                    <div className={classes.textContainer}>
                        <div>
                            <p>Gallery</p>
                        </div>
                    </div>
                </div>
                <div className={classes.secondSec}>
                    <div className={classes.secContainer}>
                        <div className={classes.aboutcontainer}>
                            {galleryMarkup}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Gallery.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Gallery);