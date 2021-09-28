import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Update from './Update'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class FavFruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favArr: [],
      show:false,

    }
  }
  componentDidMount() {
    let { user } = this.props.auth0
    let email = user.email
    let url = `http://localhost:3001/favfruit?email=${email}`

    axios.get(url).then(data => {
      this.setState({ favArr: data.data });
    })
    console.log(this.state.favArr)

  }
delete=(id)=>{
  let { user } = this.props.auth0
    let email = user.email
    let url = `http://localhost:3001/deletefruit/${id}?email=${email}`

    axios.delete(url).then(data => {
      this.setState({ favArr: data.data });
    })

}

defaultShow=(item)=> {
this.setState({
id: item._id,
name: item.name,
price: item.price,
image: item.image,
show:true
})

}
update=(e)=>{
  e.preventDefault();
  let { user } = this.props.auth0
  let obj = {
    image: e.target.image.value,
    name:  e.target.name.value,
    price: e.target.price.value,
    email: user.email,
}

let url = `http://localhost:3001/updatefruit/${this.state.id}`
    axios.put(url,obj).then(data => {
      this.setState({ favArr: data.data });
    })
    this.setState({show:false});
}
 close=()=>{
   this.setState({show:false});
 }





  render() {
    return (
      <>
        <h1>My Favorite Fruits</h1>
        <Row>
        {this.state.favArr.map(item => {
          return (<Col><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
              Price :  {item.price}
              </Card.Text>
              <Button variant="primary" onClick={() => this.defaultShow(item)}>Update</Button>
              <Button variant="danger" onClick={() => this.delete(item._id)}>Delete</Button>
            </Card.Body>
          </Card></Col>)
})}
</Row>  

<Update
name={this.state.name}
price={this.state.price}
image={this.state.image}
close={this.close}
update={this.update}
show={this.state.show}
/>
      </>
    )
  }
}

export default withAuth0(FavFruit);
