import profileReducer, {addPostActionCreator, deletePostActionCreator, setStatus, setProfile} from './profileReducer';

const initialState = {
  posts: [
    { postId: '1', text: 'Hello', likesCount: 11 },
    { postId: '2', text: 'How are you today?', likesCount: 23 },
    { postId: '3', text: 'Tell me more. This must be a long post to check how the layout works.', likesCount: 14 },
  ],
  profile: null, 
  status: ''
};


it('should add new post', () => {
  let addPostAction = addPostActionCreator('test_message');
  let newState = profileReducer(initialState, addPostAction);
  expect(newState.posts.length).toBe(4);
});


it('new post text should be correct', () => {
  let addPostAction = addPostActionCreator('test_message');
  let newState = profileReducer(initialState, addPostAction);
  expect(newState.posts[0].text).toBe('test_message');
});

it('should update status', () => {
  let setStatusAction = setStatus('test_status');
  let newState = profileReducer(initialState, setStatusAction);
  expect(newState.status).toBe('test_status');
});

it('should update profile', () => {
  let setProfileAction = setProfile({fullName: 'FirstName LastName'});
  let newState = profileReducer(initialState, setProfileAction);
  expect(newState.profile).not.toBe(null);
});

it('should delete specified post', () => {
  let deletePostAction = deletePostActionCreator('2');
  let newState = profileReducer(initialState, deletePostAction);
  expect(newState.posts.length).toBe(2);
});