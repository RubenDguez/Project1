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

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })

        const images = []
        for (let i = 0; i < 5; i++) {
            images.push
                (
                    <div className='col-auto'>
                        <img className='img-thumbnail my-3' src="https://via.placeholder.com/150.png" alt="..." ></img>
                    </div>
                )
        }

        return (
            <div className='container p-5'>
                <div className='row justify-content-center'>
                    <h1 className='pb-3 '>{this.state.items.name}</h1>
                </div>
                <hr />
                <div className='row justify-content-center'>
                    {images}
                </div>
                <div className='row'>
                    <h5>{this.state.items.description}</h5><p>Sunt incididunt adipisicing aliquip minim exercitation laboris proident eiusmod do id cupidatat. Adipisicing dolore ad ea ipsum Lorem enim Lorem. Ut veniam culpa tempor voluptate elit anim excepteur. Veniam sit cupidatat qui occaecat velit reprehenderit anim amet ex pariatur magna amet quis incididunt. Aliquip magna veniam culpa nulla culpa labore eu nulla. Ullamco incididunt irure elit sunt consequat enim.

                    Anim veniam minim nostrud Lorem fugiat consectetur ut ea commodo nisi. Lorem mollit ex pariatur non pariatur ipsum. Laboris pariatur sint cillum do aliqua sunt esse cupidatat elit deserunt velit.

                    Ea ea officia mollit in Lorem laboris cupidatat quis amet et. Dolor aliqua occaecat est id Lorem excepteur incididunt elit reprehenderit consequat. Non consectetur sint do do est consectetur labore sunt est dolore. Aute irure ad excepteur est pariatur. Laboris ipsum adipisicing incididunt mollit dolore tempor velit ea ipsum labore qui ut consequat nisi.

Fugiat minim eiusmod nisi deserunt dolore non sunt non qui reprehenderit pariatur irure reprehenderit. Ut adipisicing nisi velit commodo laboris enim cillum sunt amet enim qui do eu nisi. Ullamco tempor duis duis laboris aute velit eiusmod.</p>
                </div>
                <div className='row'>
                    <h4 className='text-right text-success'>{formatter.format(this.state.items.price)}</h4>
                </div>

            </div>
        )
    }
}

export default ProductByID