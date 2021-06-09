
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


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
    
    popUpTheCard = () => {
        this.props.popUpTheCard(this.props.title)
    }

    render() {

        return (
            <div>

                <Card onClick={this.popUpTheCard} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} alt='img' title={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text></Card.Text>
                        <Button variant="primary" onClick={this.increment} > Vote For Me ❤️{this.state.count}</Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }

}
export default HornedBeast;