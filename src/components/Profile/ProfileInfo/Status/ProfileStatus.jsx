import React, {useState, useEffect} from 'react';
import styles from './ProfileStatus.module.css';


const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);


    const turnOnEditMode = () => {
        setEditMode(true);
    }

    const turnOffEditMode = () => {
        props.updateStatus(status);
        setEditMode(false);
    }

    const changeStatus = (event) => {
        setStatus(event.target.value);
    }

    return (
         <div>
            {!editMode ?  
                <div className={styles.statusInputBlock} onDoubleClick={turnOnEditMode}>
                    <span>{props.status}</span>
                </div> :
                <div className={styles.statusInputBlock}>
                    <input autoFocus={true} onBlur={turnOffEditMode} value={status} onChange={changeStatus}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;