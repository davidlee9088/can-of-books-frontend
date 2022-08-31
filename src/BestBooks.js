import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  getBooks = async () => {
    let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
    this.setState({
      books: results.data
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value
    }
    this.postBooks(newBook);
  }
  postBooks = async (newBook) => {
    let url = `${process.env.REACT_APP_SERVER}/books`
    let createdBook = await axios.post(url, newBook);
    this.setState({
      books: [...this.state.books, createdBook]
    })
  }

deleteBooks = async (id) => {    let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
    await axios.delete(url);
    let newBookList =  this.state.books.filter(book => book.id !== id);
    this.setState({
      books: newBookList
    })
    this.renderCards();
}



  componentDidMount() {
    this.getBooks();
  }
  renderCards = () => {
    let renderedCarousel = [];
    this.state.books.forEach((books) => {
      renderedCarousel.push(<Card style={{width: '18rem'}} key={books._id}>
        <Card.Img src="https://via.placeholder.com/150" alt="placeholder"/>
        <Card.Body>
          <Card.Title>{books.title}</Card.Title>
        <Card.Text>
        {books.description}
        {books.status}
        </Card.Text>
        <Button onClick={ () => this.deleteBooks(books._id)}>delete</Button>
        </Card.Body>
      </Card>)})
    return renderedCarousel;
  }
  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? this.renderCards() : console.log('NOBOOKS')}
        <h3>Add your own books!</h3>
        <Container className="mt-5">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId='status'>
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </>
    )
  }
}

export default BestBooks;
