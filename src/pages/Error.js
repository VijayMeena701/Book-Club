import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
	root: {
		padding: "40px 0",
		background: "#fff",
		"& .container": {
			maxWidth: "1920px",
            marginTop: '50px',
			[theme.breakpoints.down('lg')]: {
				maxWidth: "720px",
			},
		},
		"& .four_zero_four_bg": {
			backgroundImage:
				"url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
			height: "400px",
			backgroundPosition: "center",
			"& h1": {
				fontSize: "80px",
				textAlign: "center",
			},
		},
		"& .contentBox": {
			textAlign: "center",
            boxSizing: 'border-box',
            '& h3':{
                marginTop: '-30px',
                marginBottom: '10px',
                fontSize: '30px',
                fontWeight: '400',
                lineHeight: '1.1'
            },
            '& p':{
                margin: '0 0 10px',
                textAlign: 'center',
                fontSize: '14px',
                lineHeight: '1.5'
            }
		},
	},
    btn:{
        backgroundColor: 'pink',
        color: '#000',
        transition: 'all 0.3s',
        "&:hover":{
            color: '#fff'
        }
    }
});

function Error(props) {
	const classes = props.classes;
	return (
		<section className={classes.root}>
			<Grid container justify="center" className="container">
				<Grid item sm={12}>
					<div className="four_zero_four_bg">
						<h1>404</h1>
					</div>
					<div className="contentBox">
						<h3 className="h3">Look's like you're lost</h3>
						<p>the page you are looking for is not avaible!</p>
                        <Link to="/" >
                            <Button color="secondary" className={classes.btn} variant="contained">
                                Go to HOME
                            </Button>
                        </Link>
					</div>
				</Grid>
			</Grid>
		</section>
	);
}

Error.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Error);
