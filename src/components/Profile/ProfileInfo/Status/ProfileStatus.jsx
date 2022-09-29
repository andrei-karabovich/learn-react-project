import React, {useState} from 'react';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    return (
         <div>
            {!editMode ?  
                <div>
                    <span onDoubleClick={toggleEditMode}>{props.status}</span>
                </div> :
                <div>
                    <input autoFocus onBlur={toggleEditMode} value={props.status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;