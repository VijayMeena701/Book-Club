var schema = [
    {
        events: [
            {
                id: "unique id maybe timestamp as an ISOString",
                imageUrl: "https://firebase.com/imageurl/v/0/img_name.extension",
                caption: 'Caption of an event as a string',
                title: 'Title of an Event',
                formLink: 'Link to the form if there is any/ else null',
                createdAt: 'new Date().toISOString(). return ISO String strictly as we need it for day.js',
                venue: 'Location of event as a string',
                organizers: 'names of people as string',
                eventTime: 'Time at which event takes place.'
            },
            {
                id: "unique id maybe timestamp as an ISOString",
                imageUrl: "https://firebase.com/imageurl/v/0/img_name.extension",
                caption: 'Caption of an event as a string',
                title: 'Title of an Event',
                formLink: 'Link to the form if there is any/ else null',
                createdAt: 'new Date().toISOString(). return ISO String strictly as we need it for day.js',
                venue: 'Location of event as a string',
                organizers: 'names of people as string',
                eventTime: 'Time at which event takes place.'
            },
            {
                id: "unique id maybe timestamp as an ISOString",
                imageUrl: "https://firebase.com/imageurl/v/0/img_name.extension",
                caption: 'Caption of an event as a string',
                title: 'Title of an Event',
                formLink: 'Link to the form if there is any/ else null',
                createdAt: 'new Date().toISOString(). return ISO String strictly as we need it for day.js',
                venue: 'Location of event as a string',
                organizers: 'names of people as string',
                eventTime: 'Time at which event takes place.'
            }
        ]
    },
    {
        gallery: [
            {
                id: 'Unique id',
                imageUrl: 'https://firebase.com/imageurl/v/0/img_name.extension',
                createdAt: 'new Date().toISOString(). return ISO String strictly as we need it for day.js',
                eventData: {
                    id: "UID of the event",
                    title: 'title of the Event'
                }
            },
            {
                id: 'Unique id',
                imageUrl: 'https://firebase.com/imageurl/v/0/img_name.extension',
                createdAt: 'new Date().toISOString(). return ISO String strictly as we need it for day.js',
                eventData: {
                    id: "UID of the event",
                    title: 'title of the Event'
                }
            },
            {
                id: 'Unique id',
                imageUrl: 'https://firebase.com/imageurl/v/0/img_name.extension',
                createdAt: 'new Date().toISOString(). return ISO String strictly as we need it for day.js',
                eventData: {
                    id: "UID of the event",
                    title: 'title of the Event'
                }
            }
        ]
    },
    {
        teams: [
            {
                id: 'Years of team created(will be unique for every team)',
                members: "no of team members as integers",
                core: {
                    name: "name of the core",
                    imgUrl: 'url for cores img',
                    rollNo: 'roll no of the core',
                    contactNo: 'cell phone contact no of the core',
                    emailId: 'email id of the core',
                },
                coOrdinators: [
                    {
                        id: 'it can be roll no',
                        name: "name of the co-ordinator",
                        imgUrl: 'url for co-ordinator img',
                        rollNo: 'roll no of the co-ordinator',
                        contactNo: 'cell phone contact no of the co-ordinator',
                        emailId: 'email id of the co-ordinator',
                    },
                    {
                        id: 'it can be roll no',
                        name: "name of the co-ordinator",
                        imgUrl: 'url for co-ordinator img',
                        rollNo: 'roll no of the co-ordinator',
                        contactNo: 'cell phone contact no of the co-ordinator',
                        emailId: 'email id of the co-ordinator',
                    },
                    {
                        id: 'it can be roll no',
                        name: "name of the co-ordinator",
                        imgUrl: 'url for co-ordinator img',
                        rollNo: 'roll no of the co-ordinator',
                        contactNo: 'cell phone contact no of the co-ordinator',
                        emailId: 'email id of the co-ordinator',
                    }
                ],
                volunteers: [
                    {
                        id: 'it can be roll no',
                        name: "name of the volunteer",
                        imgUrl: 'url for volunteer img',
                        rollNo: 'roll no of the volunteer',
                        contactNo: 'cell phone contact no of the volunteer',
                        emailId: 'email id of the volunteer',
                    },
                    {
                        id: 'it can be roll no',
                        name: "name of the volunteer",
                        imgUrl: 'url for volunteer img',
                        rollNo: 'roll no of the volunteer',
                        contactNo: 'cell phone contact no of the volunteer',
                        emailId: 'email id of the volunteer',
                    },
                    {
                        id: 'it can be roll no',
                        name: "name of the volunteer",
                        imgUrl: 'url for volunteer img',
                        rollNo: 'roll no of the volunteer',
                        contactNo: 'cell phone contact no of the volunteer',
                        emailId: 'email id of the volunteer',
                    },
                ]
            }
        ]
    }
]