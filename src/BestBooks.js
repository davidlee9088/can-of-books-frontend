import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  getBooks = async () => {
    let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
    console.log(results.data);
    this.setState({
      books: results.data
    });
  }
  componentDidMount() {
    this.getBooks();
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Carousel>
            <Carousel.Item>
              {/* <Carousel.Caption> */}
               <h3>{this.state.books[0].title}</h3>
               <h3>{this.state.books[0].description}</h3>
               <h3>{this.state.books[0].status}</h3>
              {/* </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
            <h3>{this.state.books[1].title}</h3>
            <h3>{this.state.books[1].description}</h3>
               <h3>{this.state.books[1].status}</h3>
            </Carousel.Item>
            <Carousel.Item>
            <h3>{this.state.books[2].title}</h3>
            <h3>{this.state.books[2].description}</h3>
               <h3>{this.state.books[2].status}</h3>
            </Carousel.Item>
          </Carousel> 
        ):console.log('NOBOOKS')}
      </>
    )
  }
}

export default BestBooks;
