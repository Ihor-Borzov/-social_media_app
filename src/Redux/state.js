

let rerender =()=> {
    
}

let state = {
    dialogsPage: {
        dialogsData: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Ahmed" },
            { id: 3, name: "Pahsa" },
            { id: 4, name: "Olya" },
            { id: 5, name: "Vita" },
            { id: 6, name: "Maksym" },
        ],

        messagesData: [
            { id: 1, message: "hi" },
            { id: 1, message: "koorva mach ego" },
            { id: 1, message: "Hi how are you?" },
        ],

        userInputMessage:"Message"
    },

    myPostsPage: {
        postsData: [
            { likes: "10", message: "some message" },
            { likes: "12", message: "momolongmo" },
            { likes: "11", message: "some hurucasami" },
        ],

newPostText:"kabzda kak prosto",

    },


navBarPage:{
friendData:[
    {id:1, name:"Vector Sohunaishvily", picture:"https://www.illumination.com/wp-content/uploads/2019/11/DM1_Vector.png"},
    {id:2, name:"Felonious Gru", picture:"https://static.wikia.nocookie.net/heroes-and-villians/images/7/7e/Gru.png"},
    {id:3, name:"Dr Nefario", picture:"https://www.black-leatherjacket.com/image/cache/data/Dr-nefario-jacket/dr-nefario-jacket-900x900.jpg"},
    {id:4, name:"Marlena Gru", picture:"https://static.wikia.nocookie.net/heroes-and-villians/images/4/4c/Screenshot_2016-03-21-20-42-19-1.png"},
    {id:5, name:"Margo Gru ", picture:"https://static.wikia.nocookie.net/despicableme/images/0/02/Margo_Posing.png"},
    {id:6, name:"Mr. Perkins", picture:"https://s3.amazonaws.com/intanibase/iad_characters/966.jpg"},
]
},
}


/* //////////////////PROFILE PAGE */

export let addRealPost = ()=>{
state.myPostsPage.postsData.push({
    likes:5,
    message:state.myPostsPage.newPostText,
})
state.myPostsPage.newPostText = "";
rerender(state);
}


export let updateNewPostText = (text)=>{
    state.myPostsPage.newPostText = text
    rerender(state);
    }

/* ////////////////////////*/




/* //////////////////MESSAGES PAGE */
   
export let updateUserMessage = (text)=>{
    state.dialogsPage.userInputMessage = text
    rerender(state);
    } 



    export let sendUserMessage = ()=>{
 state.dialogsPage.messagesData.push({
     id:1,
     message:state.dialogsPage.userInputMessage,
 });
 state.dialogsPage.userInputMessage="";
        rerender(state);
        } 



/* /////////////////////////*/



export let subscribe = (observer)=>{
rerender = observer;
}


export default state;