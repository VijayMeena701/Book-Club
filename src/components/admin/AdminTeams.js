import React, { useState } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography, Button, Grid } from '@material-ui/core';
import { AiOutlinePlus } from 'react-icons/ai';
import MembersModal from './MembersModal';
import { db } from '../../utils/firebase';

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
    imageWrapper: {
        textAlign: "center",
        width: '100%',
        height: '200px',
        position: "relative",
        "& .coreImage": {
            width: 200,
            height: 200,
            objectFit: "cover",
            maxWidth: "100%",
            borderRadius: "50%",
        },
        "& .button": {
            position: "absolute",
            top: "80%",
            left: "55%",
        }
    },
    dataContainer: {
        width: '100%',
    },
    coreContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    addCoreBtn: {
        backgroundColor: '#5bc0de',
        borderColor: '#46b8da',
        color: '#fff',
        transition: 'all ease 0.3s',
        "&:hover": {
            backgroundColor: '#31b0d5',
            borderColor: '#269abf',
            color: '#000'
        }
    }
})

function AdminTeams(props) {
    const classes = props.classes;
    const [modalType, setModalType] = useState("")
    const [show, setShow] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [teamShow, setTeamShow] = useState({
        update: false,
        add: false,
        year: new Date().getFullYear()
    });
    const [core, setCore] = useState(null);
    const [newTeamData, setNewTeamData] = useState({
        id: new Date().getFullYear(),
        members: 0,
        core: {},
        coordinators: [],
        volunteers: []
    });

    const clearData = () => {
        setNewTeamData({
            members: 0,
            core: {},
            coordinators: [],
            volunteers: []
        });
        setCore(null);
    };

    const submitData = async (e) => {
        db.collection('teams').doc(new Date().getFullYear().toString()).set(newTeamData);
    };

    return (
        <section className={classes.section} >
            <div className={classes.head}>
                <div className="headbtn">
                    <Typography
                        variant="h5"
                        style={{ fontWeight: 'bold', color: '#303952' }}
                    >
                        Update Teams Info
          			</Typography>
                    <AiOutlinePlus
                        className={classes.showBtn}
                        onClick={() => setShow(!show)}
                        style={{ fontSize: '1.5rem', color: '#fff' }}
                    />
                </div>
                {show && (
                    <div className={classes.formContainer}>
                        <div>
                            {!teamShow.update ?
                                <Button variant="contained" style={{ backgroundColor: '#28a745', color: 'white' }} onClick={(e) => setTeamShow({ ...teamShow, update: !teamShow.update })} >Add New Team</Button> :
                                <div style={{ display: 'flex', justifyContent: 'space-between' }} ><Button variant="contained" color="secondary" onClick={(e) => setTeamShow({ ...teamShow, update: !teamShow.update })} >Close</Button><Typography>Members Count: {newTeamData.members}</Typography></div>
                            }
                            {
                                teamShow.update && (
                                    <div className={classes.teamsDataContainer}>
                                        <div className={classes.teamMapContainer} >
                                            {
                                                newTeamData.core.name && (
                                                    <div key={newTeamData.core.rollNo}>
                                                        <div className={classes.coreContainer}>
                                                            <p style={{ textAlign: 'center', fontSize: '1.25em' }}>Core Info</p>
                                                            <div className={classes.imageWrapper}>
                                                                <img src={newTeamData.core.imgUrl ? newTeamData.core.imgUrl : null} alt="Core-Pic" className="coreImage" />
                                                            </div>
                                                            <div className={classes.dataContainer}>
                                                                <Grid container spacing={3} justify="space-evenly" >
                                                                    <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <Typography align="center" variant="h6" color="inherit" >Name:{newTeamData.core.name}</Typography>
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <Typography align="center" variant="h6" color="inherit" >Roll No:{newTeamData.core.rollNo}</Typography>
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <Typography align="center" variant="h6" color="inherit" >Contact No:{newTeamData.core.contactNo}</Typography>
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                                        <Typography align="center" variant="h6" color="inherit" >Email Id:{newTeamData.core.emailId}</Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <hr />
                                                        <hr />
                                                        <br />
                                                        <br />
                                                    </div>
                                                )
                                            }
                                            {
                                                newTeamData.coordinators.length !== 0 && newTeamData.coordinators.map((coOrdinator, index) => {
                                                    const { name, rollNo, emailId, contactNo, imgUrl } = coOrdinator;
                                                    return (
                                                        <div key={index}>
                                                            <div className={classes.coreContainer}>
                                                                <p style={{ textAlign: 'center', fontSize: '1.25em' }}>Co-ordinators Info</p>
                                                                <div className={classes.imageWrapper}>
                                                                    <img src={imgUrl} alt="Co-ordinator_Pic" className="coreImage" />
                                                                </div>
                                                                <div className={classes.dataContainer}>
                                                                    <Grid container spacing={3} justify="space-evenly" >
                                                                        <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <Typography align="center" variant="h6" color="inherit" >Name:{name}</Typography>
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <Typography align="center" variant="h6" color="inherit" >Roll No:{rollNo}</Typography>
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <Typography align="center" variant="h6" color="inherit" >Contact No:{contactNo}</Typography>
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <Typography align="center" variant="h6" color="inherit" >Email Id:{emailId}</Typography>
                                                                        </Grid>
                                                                    </Grid>
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <hr />
                                                            <br />
                                                        </div>
                                                    )
                                                })
                                            }
                                            <br />
                                            <hr />
                                            {
                                                newTeamData.volunteers.length !== 0 && newTeamData.volunteers.map((volunteer, index) => {
                                                    const { name, rollNo, emailId, contactNo, imgUrl } = volunteer;
                                                    return (
                                                        <div key={index}>
                                                            <div className={classes.coreContainer}>
                                                                <p style={{ textAlign: 'center', fontSize: '1.25em' }}>Volunteers Info</p>
                                                                <div className={classes.imageWrapper}>
                                                                    <img src={imgUrl} alt="Volunteer-Pic" className="coreImage" />
                                                                </div>
                                                                <div className={classes.dataContainer}>
                                                                    <Grid container spacing={3} justify="space-evenly" >
                                                                        <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <Typography align="center" variant="h6" color="inherit" >Name:{name}</Typography>
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <Typography align="center" variant="h6" color="inherit" >Roll No:{rollNo}</Typography>
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <Typography align="center" variant="h6" color="inherit" >Contact No:{contactNo}</Typography>
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <Typography align="center" variant="h6" color="inherit" >Email Id:{emailId}</Typography>
                                                                        </Grid>
                                                                    </Grid>
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <hr />
                                                            <br />
                                                        </div>
                                                    )
                                                })
                                            }
                                            {
                                                newTeamData.members !== 0 && (
                                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
                                                        <Button onClick={clearData} style={{ backgroundColor: '#e7e7e7' }} variant="contained" >Clear All</Button>
                                                        <Button onClick={submitData} style={{ backgroundColor: '#008CBA' }} variant="contained" >Proceed and Upload Data </Button>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Button className={classes.addCoreBtn} disabled={core !== null ? true : false} onClick={() => { setModalOpen(true); setModalType('core') }} >Add Core</Button>
                                            <Button className={classes.addCodBtn} onClick={() => { setModalOpen(true); setModalType('co-ordinator') }} >Add Co-ordinator</Button>
                                            <Button className={classes.addVolBtn} onClick={() => { setModalOpen(true); setModalType('volunteer') }} >Add Volunteer</Button>
                                        </div>
                                        <MembersModal newTeamData={newTeamData} setNewTeamData={setNewTeamData} setCoreData={setCore} type={modalType} open={modalOpen} setOpen={setModalOpen} />
                                    </div>
                                )
                            }
                        </div>
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