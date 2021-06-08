import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {


    render() {

        return (

            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>

                        <Modal.Title>{this.props.selectedImg.title}</Modal.Title>
                    </Modal.Header>

                    <Card.Img variant="top" src={this.props.selectedImg.image_url} alt='img' title={this.props.selectedImg.title} />

                    <Modal.Body>{this.props.selectedImg.description}</Modal.Body>
                    <Modal.Footer>

                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close</Button>

                        <Button variant="primary" onClick={this.props.handleClose}>
                            Save Changes</Button>

                    </Modal.Footer>
                </Modal>
                    )
            </div>

        )
    }
}

export default SelectedBeast;
