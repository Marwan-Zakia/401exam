import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
class Update extends Component {
    render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <Form onSubmit={(e)=>this.props.update(e)} >
                            <Form.Group className="mb-3" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' defaultValue={this.props.name} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Photo</Form.Label>
                                <Form.Control type="text" name='image' defaultValue={this.props.image} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name='price' defaultValue={this.props.price} />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>



                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                        </Button>
                       
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}

export default Update;