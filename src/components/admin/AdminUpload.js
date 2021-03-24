import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useFirestore from "../../hooks/useFirestore";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

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
		border: "none",
		outline: "none",
		padding: "0.5rem 0.75rem",
		cursor: "pointer",
		fontSize: "1rem",
		color: "white",
		"&:hover": {
			backgroundColor: "#218838",
		},
	},
	formCancel: {
		background: "#dc3545",
		border: "none",
		outline: "none",
		padding: "0.5rem 0.75rem",
		cursor: "pointer",
		fontSize: "1rem",
		color: "white",
		"&:hover": {
			backgroundColor: "#c82333",
		},
		marginRight: "0.5rem",
	},
});

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
}) => {
	const styles = useStyles();
	const [show, setShow] = useState(false);
	const res = useFirestore("gallery");
	console.log(res);

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
							{success && (
								<p style={{ color: "#28a745" }}>Uploaded successfully</p>
							)}
							{error && <p style={{ color: "red" }}>{error}</p>}
							<div>
								<button
									onClick={() => {
										setFiles(null);
										setShow((show) => !show);
										setError(null);
									}}
									className={styles.formCancel}
								>
									Cancel
								</button>
								<button disabled={loading} className={styles.formSubmit}>
									{loading ? "Uploading..." : "Upload"}
								</button>
							</div>
						</form>
						<div style={files && { margin: "1rem 0" }}>
							{files &&
								[...files].map((file) => (
									<img
										src={URL.createObjectURL(file)}
										alt={file.name}
										key={Math.floor(Math.random() * 100000)}
										style={{ width: "200px", margin: "0 2px" }}
									/>
								))}
						</div>
					</div>
				)}
			</div>
			{res.length > 0 &&
				res.map((doc) => (
					<img
						src={doc.url}
						alt={doc.url}
						key={Math.round(Math.random() * 100)}
					/>
				))}
		</section>
	);
};

export default AdminUpload;
// disabled={!files || error}
