import React from "react";

type PropsType = {}

const Textarea = ({input, meta, ...props}:any) => {
    return (
        <div>
            <textarea {...input} {...props}></textarea>
        </div>
    )
}

export default Textarea