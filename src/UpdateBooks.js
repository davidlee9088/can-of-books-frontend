import React from 'react';
import { Container, Button, Form, Modal } from 'react-bootstrap';

class UpdateBooks extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let booksToUpdate = {
      title: e.target.title.value || this.props.book.title,
      status: e.target.status.value || this.props.book.status,
      description: e.target.description.value || this.props.book.description,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.updateBooks(booksToUpdate);
  }

  render() {
    return (
      <>
      <Modal show={this.props.showModal} onHide={this.props.handleModalClose}>
        <Modal.Title>Update Book</Modal.Title>
        <Modal.Body>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder={this.props.book.title}/>
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" placeholder={this.props.book.status}/>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder={this.props.book.description}/>
            </Form.Group>
            <Button type="submit">Update Books</Button>
          </Form>
        </Container>
        </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default UpdateBooks;