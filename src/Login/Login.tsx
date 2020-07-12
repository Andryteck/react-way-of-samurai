import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {RootState} from "../redux/redux-store";
import {Input} from "../components/common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {maxLength50} from "../components/Dialogs/Dialogs";
import {Redirect} from "react-router-dom";
import {login} from "../redux/auth-reducer";
import styles from "./../components/common/FormsControls/FormControls.module.css";

// type PropsType = {
//     handleSubmit: () => void
// }

function LoginForm(props: any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength50]} placeholder={'email'} name={'email'} component={Input}/>
            </div>
            <div>
                <Field validate={[required, maxLength50]} placeholder={'Password'} name={'password'} component={Input}
                       type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            { props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


function Login(props: any) {

    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)