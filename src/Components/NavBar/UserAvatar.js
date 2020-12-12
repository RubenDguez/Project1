import React from 'react'
import Avatar from 'react-avatar'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const UserAvatar = (props) => {

    if (props.user.email !== undefined) {
        return (
            <div className='row'>
                <div className='col-auto'><Avatar color='#f0ad4e' name={props.user.email} size='32' round={true} /></div>
                <div className='col-auto pt-1 pl-0'> <Link to='/users'><span className='text-warning'>{props.user.email}</span></Link></div>
            </div>
        )
    } else {
        return ('')
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(UserAvatar);

