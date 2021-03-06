import React, { useState } from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminTeams from '../../components/admin/AdminTeams';
import AdminUpload from '../../components/admin/AdminUpload';
import { db, storage, timestamp } from '../../utils/firebase';

const types = ['image/png', 'image/jpeg'];

const Admin = () => {
	const [files, setFiles] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [percentage, setPercentage] = useState(0);
	const [toBeUploaded, setToBeUploaded] = useState(false);
	const [eventData, setEventData] = useState();

	const changeHandler = (e) => {
		let selected = e.target.files;
		let areAllValid = true;
		[...selected].forEach((file) => {
			if (!types.includes(file.type)) areAllValid = false;
		});

		if (selected && areAllValid) {
			setFiles(selected);
			setError(null);
			setToBeUploaded(true);
		} else {
			setFiles(null);
			setToBeUploaded(false);
			setError('please select a image file(png or jpeg)');
		}
	};

	const handleImageUploads = (e, type) => {
		e.preventDefault();
		if (!files) {
			setError('No images selected');
			return;
		}
		if (!error && files && type.trim() !== '') {
			setLoading(true);
			setError(null);
			const collectionRef = db.collection(type);
			[...files].forEach((file) => {
				const storageRef = storage.ref(`${type}/${file.name}`);
				storageRef.put(file).on(
					'state_changed',
					(snap) => {
						setPercentage((snap.bytesTransferred / snap.totalBytes) * 100);
					},
					(err) => {
						setError('Something went wrong, Try again');
					},
					async () => {
						const imageUrl = await storageRef.getDownloadURL();
						const createdAt = timestamp();
						if (type === 'events') {
							collectionRef.add({ imageUrl, createdAt, ...eventData });
						}
						else collectionRef.add({ imageUrl, createdAt });
					}
				);
			});
			setFiles(null);
			setLoading(false);
			setSuccess(true);
		}
	};

	return (
		<>
			<AdminNavbar />
			<div
				style={{
					width: '90%',
					margin: 'auto',
				}}
			>
				<AdminUpload
					type="gallery"
					changeHandler={changeHandler}
					files={files}
					setFiles={setFiles}
					error={error}
					setError={setError}
					handleImageUploads={handleImageUploads}
					loading={loading}
					success={success}
					setSuccess={setSuccess}
					percentage={percentage}
					toBeUploaded={toBeUploaded}
					setToBeUploaded={setToBeUploaded}
				/>
				<AdminUpload
					type="events"
					changeHandler={changeHandler}
					files={files}
					setFiles={setFiles}
					error={error}
					setError={setError}
					handleImageUploads={handleImageUploads}
					loading={loading}
					success={success}
					setSuccess={setSuccess}
					percentage={percentage}
					toBeUploaded={toBeUploaded}
					setToBeUploaded={setToBeUploaded}
					eventData={eventData}
					setEventData={setEventData}
				/>
				<AdminTeams
					type="teams"
				/>
			</div>
		</>
	);
};

export default Admin;
