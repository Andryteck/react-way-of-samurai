import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {RootState} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);