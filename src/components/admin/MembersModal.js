import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import { storage } from '../../utils/firebase';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
    imageWrapper: {
        textAlign: "center",
        width: '100%',
        height: '200px',
        position: "relative",
        "& .image": {
            width: 200,
            height: 200,
            objectFit: "cover",
            maxWidth: "100%",
            borderRadius: "50%",
        },
        "& .button": {
            position: "absolute",
            backgroundColor: '#Fad4fa',
            top: "80%",
            left: "55%",
        }
    },
})

function MembersModal(props) {
    const { open, setOpen, type, classes, setCoreData, newTeamData, setNewTeamData } = props;
    const [fileUrl, setFileUrl] = useState(null);
    const [selectImage, setSelectImage] = useState(null);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleCancel = () => {
        if (fileUrl !== null) {
            let imgref = storage.refFromURL(fileUrl);
            imgref.delete().then(() => {
                setToNull();
                handleClose();
            })
        }
        else {
            handleClose();
        }
    };
    const handleClose = () => {
        setOpen(false);
    }

    const setToNull = () => {
        setSelectImage(null);
        setData(null);
    };

    const uploadImage = async (file) => {
        const storageRef = storage.ref(`/teams/${type}`);
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file).on('state_changed', (snapshot) => {
            setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        }, (err) => {
            setErrors(err);
            setLoading(false);
        }, () => {
            fileRef.getDownloadURL().then((downloadURL) => {
                setFileUrl(downloadURL);
                setLoading(false);
            }).catch((err) => setErrors(err));
        })
    }

    const changeHandler = (e) => {
        let selectedimage = e.target.files;
        let areAllValid = true;
        const types = ['image/png', 'image/jpeg'];
        [...selectedimage].forEach((file) => {
            if (!types.includes(file.type)) areAllValid = false;
        });

        if (selectedimage && areAllValid) {
            setLoading(true);
            uploadImage(selectedimage[0]);
            setSelectImage(selectedimage[0]);
        } else {
            setSelectImage(null);
        }
    };

    const handleEditImage = () => {
        const fileInput = document.getElementById("imageFile");
        fileInput.click();
    }
    const handleSave = (e) => {
        e.preventDefault();
        if (type === 'core') {
            setCoreData({ ...data });
            setNewTeamData({ ...newTeamData, core: { ...data, imgUrl: fileUrl }, members: newTeamData.members + 1 });
            setToNull();
        }
        else if (type === 'co-ordinator') {
            setNewTeamData({ ...newTeamData, coordinators: [...newTeamData.coordinators, { ...data, imgUrl: fileUrl }], members: newTeamData.members + 1 });
            setToNull();
        }
        else if (type === 'volunteer') {
            setNewTeamData({ ...newTeamData, volunteers: [...newTeamData.volunteers, { ...data, imgUrl: fileUrl }], members: newTeamData.members + 1 });
            setToNull();
        }
        setOpen(false);
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add {type} Details</DialogTitle>
                <form onSubmit={handleSave}>
                    <DialogContent>
                        <DialogContentText>
                            Please Add all the necessary details Carefully
                            {errors && (<p>{console.error(errors)}</p>)}
                        </DialogContentText>
                        <Grid container spacing={2} justify="center">
                            <Grid item xs={6} className={classes.imageWrapper}>
                                <img src={selectImage !== null ? URL.createObjectURL(selectImage) : ""} className="image" alt={`${type}-Pic`} />
                                <input type="file"
                                    id="imageFile"
                                    onChange={changeHandler}
                                    required
                                    hidden="hidden" />
                                <IconButton
                                    onClick={handleEditImage}
                                    className="button"
                                >
                                    <AddAPhotoIcon color="secondary"></AddAPhotoIcon>
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    margin="dense"
                                    required
                                    variant="outlined"
                                    id="name"
                                    label="Name"
                                    name="name"
                                    type="text"
                                    onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    required
                                    variant="outlined"
                                    id="rollNo"
                                    label="Roll No"
                                    name="rollNo"
                                    type="text"
                                    onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    required
                                    variant="outlined"
                                    id="contactNo"
                                    label="Cell Phone No"
                                    name="contactNo"
                                    type="number"
                                    onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    required
                                    variant="outlined"
                                    id="emailid"
                                    label="Email Id"
                                    type="email"
                                    name="emailId"
                                    onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button disabled={loading ? true : false} variant="contained" onClick={handleCancel} color="secondary">
                            Cancel
                    </Button>
                        <Button disabled={loading ? true : false} variant="contained" type="submit" color="secondary">
                            Save
                    </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}

MembersModal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MembersModal);