
export const sampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "john doe",
        _id: "1",
        groupChat: false,
        members: ["1", "2"]
    },

    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "john boi",
        _id: "2",
        groupChat: false,
        members: ["1", "2"]
    }

]


export const sampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "john doe",
        _id: "1",

    },

    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "john boi",
        _id: "2",

    }

]
export const sampleNotifications = [
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "john doe",
        },
        _id: "1",

    },

    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "john doe",
        },
        _id: "2",

    }

]


export const sampleMessage = [
    {
        attachments: [
            {
                public_id: "asdf",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "hi",
        _id: "msg1",
        sender: {
            _id: "aaa", // Same as user._id
            name: "maya danthkhishori",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630Z",
    },
    {
        attachments: [
            {
                public_id: "asdf2",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "kya hai be",
        _id: "msg2",
        sender: {
            _id: "bbb", // Different from user._id
            name: "chaman",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:42:30.630Z",
    },
    {
        attachments: [
            {
                public_id: "asdf2",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "kya hai be",
        _id: "msg3",
        sender: {
            _id: "bbb", // Different from user._id
            name: "chaman",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:42:30.630Z",
    },
 
    {
        attachments: [
            {
                public_id: "asdf",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "apna bata",
        _id: "msg4",
        sender: {
            _id: "aaa", // Same as user._id
            name: "maya danthkhishori",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630Z",
    }
];




export const dashboardData={
    users:[
        {
            name:"John Doe",
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            _id:"1",
            userName:"john_doe",
            friends:20,
            groups:5
        },
        {
            name:"Don Doe",
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            _id:"2",
            userName:"john_boi",
            friends:20,
            groups:5
        },
    
    ],
    chats:[
        {
            name:"Lodu group",
            avatar:["https://www.w3schools.com/howto/img_avatar.png"],
            _id:"1",
            groupChat:false,
            members:[{_id:"1", avatar:"https://www.w3schools.com/howto/img_avatar.png"},{_id:"2", avatar:"https://www.w3schools.com/howto/img_avatar.png"} ],
            totalMembers:2,
            totalMessages:20,
            creator:{
                name:"John Doe",
                avatar:"https://www.w3schools.com/howto/img_avatar.png"
            }
        },
        {
            name:"Lashan Group",
            avatar:["https://www.w3schools.com/howto/img_avatar.png"],
            _id:"2",
            groupChat:true,
            members:[{_id:"1", avatar:"https://www.w3schools.com/howto/img_avatar.png"},{_id:"2", avatar:"https://www.w3schools.com/howto/img_avatar.png"} ],
            totalMembers:2,
            totalMessages:20,
            creator:{
                name:"John Doe",
                avatar:"https://www.w3schools.com/howto/img_avatar.png"
            }
        },
    
    ],
    messages:[
        {
            attachments:[],
            content:"Lodu ka message hai",
            _id:"asdf",
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"chaman",
            },
            chat:"chatId",
            groupChat:false,
            createdAt:"2024-02-12T10:41:30.630Z",
        },
        {
            attachments:[
                {
                    public_id:"asdf2",
                    url:"https://www.w3schools.com/howto/img_avatar.png"
                },
            ],
            content:"",
            _id:"asdf3",
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"chaman2",
            },
            chat:"chatId",
            groupChat:true,
            createdAt:"2024-02-12T10:41:30.630Z"
        }
    ]
}