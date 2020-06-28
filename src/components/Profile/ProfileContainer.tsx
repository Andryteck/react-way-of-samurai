import React from 'react';
import {RootState} from "../../redux/redux-store";
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import { compose } from 'redux';


// export type PropsType = {
//     store: {
//         state:RootState
//         dispatch:Function
//     }
// }

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     })

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile

})

export default compose(
    WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile}),
    )(ProfileContainer)




