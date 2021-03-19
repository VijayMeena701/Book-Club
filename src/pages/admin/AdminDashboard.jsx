import React, { useState } from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';
import GalleryUpload from '../../components/admin/GalleryUpload';
import { db, storage, timestamp } from '../../utils/firebase';

const types = ['image/png', 'image/jpeg'];

const Admin = () => {
  const [files, setFiles] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    let selected = e.target.files;
    let areAllValid = true;
    [...selected].forEach((file) => {
      if (!types.includes(file.type)) areAllValid = false;
    });

    if (selected && areAllValid) {
      setFiles(selected);
      setError(null);
    } else {
      setFiles(null);
      setError('please select a image file(png or jpeg)');
    }
  };

  const handleImageUploads = (e, type) => {
    e.preventDefault();
    if (!error && files && type.trim() !== '') {
      setLoading(true);
      setError(null);
      const collectionRef = db.collection(type);
      [...files].forEach((file) => {
        const storageRef = storage.ref(`${type}/${file.name}`);
        storageRef.put(file).on(
          'state_changed',
          (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            console.log(percentage);
          },
          (err) => {
            setError('**Something went wrong, Try again');
          },
          async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt });
          }
        );
      });
      setFiles(null);
      setLoading(false);
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
        <GalleryUpload
          changeHandler={changeHandler}
          files={files}
          setFiles={setFiles}
          error={error}
          setError={setError}
          handleImageUploads={handleImageUploads}
          loading={loading}
        />
      </div>
    </>
  );
};

export default Admin;
