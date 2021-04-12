import React, { useState } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography, Button, Grid, Paper, Container, TextField } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CancelIcon from '@material-ui/icons/Cancel';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import { AiOutlinePlus } from 'react-icons/ai';
import CircularProgressWithLabel from '../CircularProgressWithLabel';

const styles = (theme) => ({
    section: {
        margin: '1rem auto',
        padding: '1.5rem',
        border: '1px solid'
    },
    head: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1em 0',
        '& .headbtn': {
            display: 'flex',
            alignItems: 'center',
        },
    },
    showBtn: {
        border: 'none',
        outline: 'none',
        padding: '0.25rem',
        borderRadius: '50%',
        background: '#575fcf',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        marginLeft: '1rem',
        color: 'white',
        width: '2.5rem',
        height: '2.5rem',
    },
    formContainer: {
        width: '100%',
        background: '#f1f2f6',
        padding: '1rem',
        margin: '0.5rem 0',
        transition: 'display ease 0.5s',
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chooseFiles: {
        cursor: 'pointer',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    formSubmit: {
        background: '#28a745',
        cursor: 'pointer',
        color: 'white',
        '&:hover': {
            backgroundColor: '#218838',
        },
    },
    formCancel: {
        background: '#dc3545',
        color: 'white',
        '&:hover': {
            backgroundColor: '#c82333',
        },
        marginRight: '0.5rem',
    },
})

function AdminTeams(props) {
    const { error,
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
        type,
        eventData,
        setEventData } = props;
    const classes = props.classes;
    const [show, setShow] = useState(false);
    return (
        <section className={classes.section} >
            <div className={classes.head}>
                <div className="headbtn">
                    <Typography
                        variant="h5"
                        style={{ fontWeight: 'bold', color: '#303952' }}
                    >
                        <span style={{ textTransform: 'capitalize' }}>Update</span> Teams Info
          			</Typography>
                    <AiOutlinePlus
                        className={classes.showBtn}
                        onClick={() => setShow(!show)}
                        style={{ fontSize: '1.5rem', color: '#fff' }}
                    />
                </div>
                {show && (
                    <div className={classes.formContainer}>
                        <form>
                            <div className={classes.form}>
                                <Button
                                    startIcon={<CloudUploadIcon />}
                                    color="secondary"
                                    onClick={() => document.getElementById(`${type}-input`).click()}
                                    style={{ margin: '0 16px' }}
                                >
                                    Select Files
                                </Button>
                                <input
                                    type="file"
                                    onChange={changeHandler}
                                    multiple
                                    accept="image/png, image/jpeg"
                                    id={`${type}-input`}
                                    hidden="hidden"
                                />
                                {toBeUploaded && (
                                    <p
                                        style={{
                                            color: '#468847	',
                                            padding: '0.25em 1em',
                                            backgroundColor: '#DFF0D8',
                                            borderRadius: '5px',
                                        }}
                                    >
                                        Files Selected To Upload
                                    </p>
                                )}
                                {success && (
                                    <p style={{ color: '#28a745' }}>Uploaded successfully</p>
                                )}
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <div>
                                    <Button
                                        onClick={() => {
                                            setFiles(null);
                                            setShow(!show);
                                            setError(null);
                                            setToBeUploaded(false);
                                        }}
                                        className={classes.formCancel}
                                        startIcon={<CancelIcon />}
                                    >
                                        Cancel
                </Button>
                                    {toBeUploaded && (
                                        <Button
                                            type="submit"
                                            className={classes.formSubmit}
                                            disabled={loading}
                                            startIcon={<PublishRoundedIcon />}
                                        >
                                            {loading ? (
                                                <CircularProgressWithLabel value={percentage} />
                                            ) : (
                                                'Upload'
                                            )}
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div>
                                {type === "events" ? <div style={{ width: '85%', margin: '10px auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <TextField required name="title" variant="outlined" color="secondary" fullWidth placeholder="Title of Event" onChange={e => setEventData({ ...eventData, [e.target.name]: e.target.value })} />
                                    <TextField required name="desc" variant="outlined" color="secondary" fullWidth placeholder="Description of Event" onChange={e => setEventData({ ...eventData, [e.target.name]: e.target.value })} />
                                    <TextField required name="venue" variant="outlined" color="secondary" fullWidth placeholder="Venue of Event" onChange={e => setEventData({ ...eventData, [e.target.name]: e.target.value })} />
                                    <TextField required name="organizers" variant="outlined" color="secondary" fullWidth placeholder="Organizers of Event" onChange={e => setEventData({ ...eventData, [e.target.name]: e.target.value })} />
                                    <TextField required name="eventTime" defaultValue="today" type="datetime-local" variant="outlined" color="secondary" fullWidth placeholder="Event Time" onChange={e => setEventData({ ...eventData, [e.target.name]: e.target.value })} />
                                </div> : null}
                            </div>
                        </form>
                        <Container maxWidth="lg">
                            <Grid
                                container
                                spacing={2}
                                justify="center"
                                style={
                                    files
                                        ? { width: '100%', padding: '1rem 0' }
                                        : { width: '100%', margin: '0.1rem 0' }
                                }
                            >
                                {files &&
                                    [...files].map((file, index) => (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            lg={3}
                                            style={{ width: '100%' }}
                                            key={index}
                                        >
                                            <Paper
                                                variant="outlined"
                                                elevation={3}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    margin: 'auto',
                                                    display: 'flex',
                                                }}
                                            >
                                                <img
                                                    style={{ width: '100%', objectFit: 'contain' }}
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
        </section>
    )
}

AdminTeams.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AdminTeams)