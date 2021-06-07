
import React from 'react';

class HornedBeast extends React.Component {



    constructor(props) {

        super(props)
        this.state = {

            count: 0
        }
    }
    increment = () => {

        this.setState({
            count: this.state.count + 1
        })
    }

    render() {

        return (
            <div>

                <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt="img" />
                <p>{this.props.description}</p>
                <h3>{this.state.count}</h3>

                <button onClick={this.increment}>Vote</button> 
            </div>
        )
    }

}
export default HornedBeast;