import React from "react";

const Users = (props) => {

    if (!props.users) {
        props.onSetUsers([
            { id: '1', fullName: 'Vasiliy', userStatus: 'Some random status here', address: { city: 'Minsk', country: 'Belarus' }, isFollow: true },
            { id: '2', fullName: 'Karl', userStatus: 'Somathing about pony', address: { city: 'Berlin', country: 'Germany' }, isFollow: false },
            { id: '3', fullName: 'Andrew', userStatus: 'I love my cat', address: { city: 'Antwerpen', country: 'Belgium' }, isFollow: true }
        ]);
    }

    const onSubscribeButtonClick = (evt) => {
        const value = evt.currentTarget.id;
        props.onFollowButtonClick(value);
    }

    let setMessage = (message) => {
        this.myTestState.someMessage = message;
    }

    return <div> {
        props.users?.map(u => <div key={u.id}>
            {u.fullName}
            <button id={u.id} onClick={onSubscribeButtonClick}>{u.isFollow ? 'Unfollow' : 'Follow'}</button>
        </div>
        )}
    </div>
}

export default Users;