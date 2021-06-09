import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './Data.json';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {

   
    submitForm = (event) => {

        let hornsNum = event.target.value;
        let DataElement = Data;

        let filterdBeast;
        
        if (hornsNum) {
            filterdBeast = DataElement.filter(item => {

               
                if (item.horns == hornsNum) {
                    return item;
                }
            })

        } else {
            filterdBeast = DataElement;
        }
        this.props.gitFilterdBeast(filterdBeast);
    };
    render() {

        return (

            <div>
                 <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Filter By number Of Hornes</Form.Label>
                        <Form.Control as="select" onChange={this.submitForm}>
                            <option value=''>All</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                            <option value='100'>Hundred</option>
                        </Form.Control>

                    </Form.Group>
                </Form>

                {this.props.DataElement.map((beasts) => {

                    return (

                        <HornedBeast
                            title={beasts.title}
                            imgUrl={beasts.image_url}
                            description={beasts.description}
                            dataHandling={this.props.show}
                            popUpTheCard={this.props.popUpTheCard}

                        />

                    )
                })

                }

        
            </div>



        )
    }
}



export default Main;
