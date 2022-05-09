//import React, { Component } from 'react';
import React, { useEffect, Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux/userData/userActions';
//this is a component where we render the fetch data.

// function Data({userData, fetchUser}) {
//     useEffect(()=>{
//         fetchUser()
//     }, [])
//     return userData.loading ? (
//         <h2>Loading</h2>
//     ): userData.error ? (
//         <h2>{userData.errorMsg}</h2>
//     ):(
//         <div>
//             <h2>User List</h2>
//             <div>
//                 {
//                     userData.users.map((user) => { return <p>{user.name}</p>})
//                 }
//             </div>
//         </div>
//     ) 
// }

class Data extends Component {
    constructor(props) {
        super(props)
        //state = {  } 
    }
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return this.props.userData.loading ? (
            <h2>Loading</h2>
        ) : this.props.userData.error ? (
            <h2>{this.props.userData.errorMsg}</h2>
        ) : (
            <div>
                <h2>User Name</h2>
                <div>
                    {
                        this.props.userData.users.map((user) => { return <p>{user.name}</p> })
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        userData: state.user,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);