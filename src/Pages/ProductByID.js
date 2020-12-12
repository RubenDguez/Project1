import React, { Component } from "react";
import axios from 'axios'

class ProductByID extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: {
                id: 0,
                name: "",
                price: 0,
                description: ""
            }
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)

        const { handle } = this.props.match.params

        let url = `http://18.191.164.245:8080/Amazon/items?id=${handle}`
        axios.get(url).then((res) => {
            const items = res.data;
            this.setState({ items });
        });
    }

    render() {
        return (
            <div className='container'>
                <h1>{this.state.items.name}</h1>

            </div>
        )
    }
}

export default ProductByID