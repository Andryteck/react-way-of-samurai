import React from "react";
import s from './FormControls.module.css'

type PropsType = {}

const MyPostTextarea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props} className={s.myPostTextarea}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

// export const DialogsTextarea = ({input, meta, ...props}: any) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
//             <div>
//                 <textarea {...input} {...props} className={s.myPostTextarea}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input} {...props} className={s.loginInput}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const InputCheckbox = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input} {...props} className={s.checkboxItem}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export default MyPostTextarea