import React from 'react'
import { connect } from 'react-redux'

const featured = (props) => {

    return (
        <div className="card text-center my-5 ">
            <div className="card-header" >
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.stateProducts[0].name}</h5>
                <p className="card-text">{props.stateProducts[0].description}</p>
                <a href="" className="btn btn-primary" onClick={(e) => handleGoSomeWhereButton(e)}>Go somewhere</a>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stateProducts: state.products,
    };
}

export default connect(mapStateToProps)(featured)