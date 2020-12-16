import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const featured = (props) => {

    const i = props.stateProducts.length
    const item = Math.floor(Math.random() * i);

    let featured;

    if (props.stateProducts.length > 0) {

        featured = (
            <div className="card text-center my-5 ">
                <div className="card-header" >
                    Featured
            </div>
                <div className="card-body">
                    <h5 className="card-title">{props.stateProducts[item].name}</h5>
                    <p className="card-text">{props.stateProducts[item].description}</p>
                    <Link className="btn btn-primary" to={'/product/' + props.stateProducts[item].id}>Go to product</Link>
                </div>
                <div className="card-footer text-muted">
                    Reacently added
            </div>
            </div>
        )
    } else {
        featured = (<h1 className='text-center text-danger'>** There are no items in the Database **</h1>)
    }

    return (
        <div>
            { featured}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stateProducts: state.products,
    };
}

export default connect(mapStateToProps)(featured)