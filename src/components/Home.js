import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Fruititem from './Fruititem'
import Row from 'react-bootstrap/Row';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitArr: []
    }
  }
  componentDidMount() {
    let url = 'http://localhost:3001/fruit'

    axios.get(url).then(data => {
      this.setState({ fruitArr: data.data });
      
    })

  }

  render() {
    return (
      <>
        <Row>
        <h1>API Fruits</h1>
        {this.state.fruitArr.map(item => {
          return (<Fruititem item={item} />)
        })}</Row>
      </>
    )
  }
}

export default Home;
