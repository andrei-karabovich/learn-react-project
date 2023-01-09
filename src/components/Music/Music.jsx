import React from 'react';
import styles from './Music.module.css';
import withAuthReducer from '../../hoc/withAuthCheck';

const Music = ({}) => {
    return (
        <div>
            Music
        </div>
    )
}

export default withAuthReducer(Music);
