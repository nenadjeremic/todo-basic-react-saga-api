import React, { Component } from 'react';
import { connect } from "react-redux";
import { ListGroup, Button } from 'react-bootstrap';
import { deleteItem, getItemsAll } from '../actions'
import './ItemLi.css';

function mapStateToProps(state) {
  return {
    items: state.items
  }  
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteItem(id)),
    getItemsAll: () => dispatch(getItemsAll())
  }
}


class ItemLi extends Component {

  componentDidMount() {
    this.props.getItemsAll();
  }
  
  render() {
    const list = this.props.items.map((item, ind)=>(
      <ListGroup.Item key={ind}>
        {item.title}
        <Button onClick={()=>this.props.deleteItem(item['_id'])} style={{ marginLeft: '2%' }}>delete</Button>
      </ListGroup.Item>
      ));
    return (
      <ListGroup style={{ marginTop: '2em' }}>
        { list }
      </ListGroup>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemLi);