import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { useAdmin } from "../../context/AdminAuthContext";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";

const styles = (theme) => ({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
		width: "100%",
		background: "rgba(0,0,0,0.1)",
		transition: "all 0.3s",
	},
	formBox: {
		width: "380px",
		height: "450px",
		padding: "20px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: "2em",
		borderRadius: "2%",
		"& form": {
			display: "flex",
			flexDirection: "column",
			gap: "1em",
		},
	},
	headerForm: {
		marginBottom: "15px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "1em",
	},
	button: {
		marginTop: "40px",
		marginBottom: "10px",
	},
	message: {
		display: "flex",
		justifyContent: "space-between",
	},
});

const AdminLogin = (props) => {
	const classes = props.classes;
	const history = useHistory();
	const { login, admin } = useAdmin();
	const [loading, setLoading] = useState(false);
	const [disableBtn, setDisableBtn] = useState(false);
	const [error, setError] = useState("");
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	// 	email: "bookclub.iiitdmk@gmail.com",
	// 	password: "BookClub@1234",

	useEffect(() => {
		if (admin) history.push("/admin/dashboard");
	}, [admin, history]);

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleAdminLogin = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		setDisableBtn(true);
		try {
			await login(values.email, values.password);
			setLoading(false);
			setDisableBtn(false);
		} catch (error) {
			setError(error.message);
			setLoading(false);
			setDisableBtn(false);
		}
	};

	return (
		<div className={classes.container}>
			<div className={classes.formBox}>
				<div className={classes.headerForm}>
					<AccountCircleIcon fontSize="large" />
					<div>Login Into BookClub IIITDM K</div>
				</div>
				<form onSubmit={handleAdminLogin}>
					<div className="input-group mb-3">
						<TextField
							variant="outlined"
							type="text"
							className="form-control"
							placeholder="Username"
							fullWidth={true}
							name="email"
							value={values.email}
							onChange={handleChange}
						/>
					</div>
					<div className="input-group mb-3">
						<TextField
							variant="outlined"
							className="form-control"
							placeholder="Password"
							type="password"
							name="password"
							fullWidth={true}
							value={values.password}
							onChange={handleChange}
							helperText={error}
						/>
					</div>
					<Button
						type="submit"
						disabled={disableBtn}
						variant="contained"
						color="secondary"
					>
						{loading ? <CircularProgress color="secondary" /> : "Login"}
					</Button>
				</form>
			</div>
		</div>
	);
};

AdminLogin.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminLogin);
