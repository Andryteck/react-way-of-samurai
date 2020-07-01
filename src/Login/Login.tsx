import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {RootState} from "../redux/redux-store";

// type PropsType = {
//     handleSubmit: () => void
// }

function LoginForm(props: any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
            </div>
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
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login

const mapStateToProps = (state: RootState) => {
    return {

    }
}

connect(mapStateToProps, {})(Login)