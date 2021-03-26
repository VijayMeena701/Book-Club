import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useFirestore from "../../hooks/useFirestore";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import CancelIcon from "@material-ui/icons/Cancel";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
	section: {
		margin: "1rem auto",
		padding: "1.5rem",
	},
	head: {
		display: "flex",
		flexDirection: "column",
		padding: "1em 0",
		"& .headbtn": {
			display: "flex",
			alignItems: "center",
		},
	},
	showBtn: {
		border: "none",
		outline: "none",
		padding: "0.25rem",
		borderRadius: "50%",
		background: "#575fcf",
		display: "flex",
		alignItems: "center",
		width: "fit-content",
		cursor: "pointer",
		marginLeft: "1rem",
		color: "white",
	},
	formContainer: {
		width: "100%",
		background: "#f1f2f6",
		padding: "1rem",
		margin: "0.5rem 0",
		transition: "display ease 0.5s",
	},
	form: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	chooseFiles: {
		cursor: "pointer",
		fontWeight: "bold",
		textTransform: "uppercase",
	},
	formSubmit: {
		background: "#28a745",
		cursor: "pointer",
		color: "white",
		"&:hover": {
			backgroundColor: "#218838",
		},
	},
	formCancel: {
		background: "#dc3545",
		color: "white",
		"&:hover": {
			backgroundColor: "#c82333",
		},
		marginRight: "0.5rem",
	},
});

function CircularProgressWithLabel(props) {
	return (
		<Box position="relative" display="inline-flex">
			<CircularProgress variant="determinate" {...props} />
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position="absolute"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography
					variant="caption"
					component="div"
					color="textSecondary"
				>{`${Math.round(props.value)}%`}</Typography>
			</Box>
		</Box>
	);
}

CircularProgressWithLabel.propTypes = {
	value: PropTypes.number.isRequired,
};

const AdminUpload = ({
	error,
	files,
	loading,
	success,
	changeHandler,
	handleImageUploads,
	setFiles,
	setError,
	setSuccess,
	percentage,
	toBeUploaded,
	setToBeUploaded,
}) => {
	const styles = useStyles();
	const [show, setShow] = useState(false);
	const res = useFirestore("gallery");

	const handleSubmit = (e) => {
		handleImageUploads(e, "gallery");
		setTimeout(() => {
			setSuccess(false);
		}, 3000);
	};

	return (
		<section id="galleryImagesUpload" className={styles.section}>
			<div className={styles.head}>
				<div className="headbtn">
					<Typography
						variant="h5"
						style={{ fontWeight: "bold", color: "#303952" }}
					>
						Gallery Images
					</Typography>
					<AiOutlinePlus
						className={styles.showBtn}
						onClick={() => setShow(!show)}
						style={{ fontSize: "1.5rem", color: "#fff" }}
					/>
				</div>
				{show && (
					<div className={styles.formContainer}>
						<form onSubmit={handleSubmit} className={styles.form}>
							<Button
								startIcon={<CloudUploadIcon />}
								color="secondary"
								onClick={() => document.getElementById("gallery-input").click()}
								style={{ margin: "0 16px" }}
							>
								Select Files
							</Button>
							<input
								type="file"
								onChange={changeHandler}
								multiple
								accept="image/png, image/jpeg"
								id="gallery-input"
								hidden="hidden"
							/>
							{toBeUploaded && (
								<p style={{color: "#468847	", padding: '0.25em 1em', backgroundColor: '#DFF0D8', borderRadius: '5px'}}>Files Selected To Upload</p>
							)}
							{success && (
								<p style={{ color: "#28a745" }}>Uploaded successfully</p>
							)}
							{error && <p style={{ color: "red" }}>{error}</p>}
							<div>
								<Button
									onClick={() => {
										setFiles(null);
										setShow(!show);
										setError(null);
										setToBeUploaded(false);
									}}
									className={styles.formCancel}
									startIcon={<CancelIcon />}
								>
									Cancel
								</Button>
								{toBeUploaded && (
									<Button
									type="submit"
									className={styles.formSubmit}
									disabled={loading}
									startIcon={<PublishRoundedIcon />}
								>
									{loading ? (
										<CircularProgressWithLabel value={percentage} />
									) : (
										"Upload"
									)}
								</Button>
								)}
							</div>
						</form>
							<Container maxWidth="lg">
								<Grid container spacing={2} justify="center" style={ files ? { width: "100%", padding: '1rem 0' } : {width: '100%', margin: '0.1rem 0'}}>
									{files && [...files].map((file,index) => (
											<Grid
												item
												xs={12}
												sm={6}
												md={4}
												lg={3}
												style={{ width: "100%" }}
												key={index}
											>
												<Paper
													variant="outlined"
													elevation={3}
													style={{ width: "100%", height: '100%', justifyContent: 'center', alignItems: 'center', margin: 'auto',display: 'flex' }}
												>
													<img
														style={{ width: "100%", objectFit: "contain" }}
														src={URL.createObjectURL(file)}
														alt={file.name}
													/>
												</Paper>
											</Grid>
										))}
								</Grid>
							</Container>
					</div>
				)}
			</div>
			<Container maxWidth="lg">
				<div style={{padding: '1em'}}>
					<Typography
						variant="h5"
						style={{ fontWeight: "bold", color: "#303952" }}
					>
						{res.length > 0 ? 'Recent Images': 'No Images found in Gallery'}
					</Typography>
				</div>
				<Grid container spacing={2} justify="center" style={{ width: "100%" }}>
					{res.length > 0 &&
						res.map((doc) => (
							<Grid
								item
								xs={12}
								sm={6}
								md={4}
								lg={3}
								style={{ width: "100%" }}
								key={Math.round(Math.random() * 100)}
							>
								<Paper
									variant="outlined"
									elevation={3}
									style={{ width: "100%", height: '100%', justifyContent: 'center', alignItems: 'center', margin: 'auto',display: 'flex' }}
								>
									<img
										style={{ width: "100%", objectFit: "contain" }}
										src={doc.url}
										alt={doc.url}
									/>
								</Paper>
							</Grid>
						))}
				</Grid>
			</Container>
		</section>
	);
};
AdminUpload.propTypes = {
	loading: PropTypes.bool.isRequired,
	success: PropTypes.bool.isRequired,
	percentage: PropTypes.number.isRequired,
};

export default AdminUpload;
