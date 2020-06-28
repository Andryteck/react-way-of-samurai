import React from 'react';
import Header from "./Header";
import axios from "types-axios";
import {connect} from 'react-redux';
import {RootState} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);