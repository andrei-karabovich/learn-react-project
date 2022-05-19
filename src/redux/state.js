import renderTheWholeThree from '../render';

const state = {
    conversationsPage: {
        dialogs : [
            {chatId: '1', companyonName: 'Paulina', isActive: true},
            {chatId: '2', companyonName: 'Matthijs', isActive: false},
            {chatId: '3', companyonName: 'Sam', isActive: false},
            {chatId: '4', companyonName: 'Rutger', isActive: false}
          ], 
          messages : [
            {chatId: '1', message: 'Hello', isInbound: true},
            {chatId: '2', message: 'How are you today?',  isInbound: true},
            {chatId: '3', message: 'Tell me more',  isInbound: false}
          ]
    },
    profilePage: {
        posts : [
            {postId: '1', text: 'Hello', likesCount: 11},
            {postId: '2', text: 'How are you today?', likesCount: 23},
            {postId: '3', text: 'Tell me more', likesCount: 14}
        ],
        newPostText : ''
    },
    navigationBar: {
        friends: [
            {'Name': 'Nick'},
            {'Name': 'Rasim'},
            {'Name': 'Anna'}
        ]
    }
}

export const addPost = (textPost) => {
    const newPost = {
        postId: '4',
        text: textPost,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    renderTheWholeThree(state);
}

export const updateNewPostText = (postText) => {
    state.profilePage.newPostText = postText;
    renderTheWholeThree(state);
} 

export default state;