import React, {useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void

}

const ProfileStatusWithHooks = (props: PropsType) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)



    const activateEditMode = () => {
        setStatus(props.status)
        setEditMode(true)
    }

    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (
        <div>
            { !editMode &&
            <div>
            <span onDoubleClick={activateEditMode}>
                {props.status || '------'}
            </span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMode}
                       autoFocus={true} value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks