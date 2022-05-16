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
            {chatId: '1', text: 'Hello', likesCount: 11},
            {chatId: '2', text: 'How are you today?', likesCount: 23},
            {chatId: '3', text: 'Tell me more', likesCount: 14}
        ]
    },
    navigationBar: {
        friends: [
            {'Name': 'Nick'},
            {'Name': 'Rasim'},
            {'Name': 'Anna'}
        ]
    }
}

export default state;