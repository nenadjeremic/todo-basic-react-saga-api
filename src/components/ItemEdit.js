import React, { Component } from 'react';
import './ItemEdit.css';
import { addItem } from '../actions';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item))
  }
}

class ItemEdit extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.itemTitle = React.createRef();
  }

  handleSubmit(ev) {
    ev.preventDefault();
    let item = { title: this.itemTitle.current.value, id: Date.now() };
    this.props.addItem(item);   
    this.itemTitle.current.value = '';
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control placeholder="Title" ref={this.itemTitle} />
        </Form.Group>
        <Button type="submit" onClick={(ev) => this.handleSubmit(ev)}>ADD</Button>
      </Form>
    )
  }
}

export default connect(null, mapDispatchToProps)(ItemEdit);