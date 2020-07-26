import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {RootState} from "../redux/redux-store";
import {Input, InputCheckbox} from "../components/common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {maxLength50} from "../components/Dialogs/Dialogs";
import {Redirect} from "react-router-dom";
import {login} from "../redux/auth-reducer";
import s from './Login.module.css'

// type PropsType = {
//     handleSubmit: () => void
// }

function LoginForm(props: any) {
    return (

        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            <h1>Login</h1>
            <div>
                <Field validate={[required, maxLength50]} placeholder={'email'} name={'email'} component={Input}/>
            </div>
            <div>
                <Field validate={[required, maxLength50]} placeholder={'Password'} name={'password'} component={Input}
                       type={'password'}/>
            </div>
            <div className={s.checkboxItems}>
                <Field type={'checkbox'} name={'rememberMe'} component={InputCheckbox} /> remember me
            </div>
            <div>
            {props.captchaUrl && <img src={props.captchaUrl} />}
            {props.captchaUrl && <Field validate={[required, maxLength50]} placeholder={'Symbols from image'} name={'captcha'} component={Input}/>}
            </div>
            { props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button className={s.loginButton}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm: any = reduxForm({
    form: 'login'
})(LoginForm)


function Login(props: any) {

    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={s.loginItems}>
            <div className={s.socialNetworkProject}>Andrew Kulik <br/>Social Network</div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}


const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login)