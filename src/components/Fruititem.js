import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Col from 'react-bootstrap/Col';
class Fruititem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruitArr: []
        }
    }
    add = async (item) => {
        let {user} = this.props.auth0
        let obj = {
            image: item.image,
            name: item.name,
            price: item.price,
            email: user.email,
        }
        console.log(obj.email)
        let url = 'http://localhost:3001/addfruit'

         await axios.post(url, obj)



    }



    render() {
        return (
            <div>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.image} />
                    <Card.Body>
                        <Card.Title>{this.props.item.name}</Card.Title>
                        <Card.Text>
                            {this.props.item.price}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.add(this.props.item)}>Add to favorites</Button>
                    </Card.Body>
                </Card>
                </Col>
            </div>
        );
    }
}

export default withAuth0(Fruititem);