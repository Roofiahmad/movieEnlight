import React, { Component } from 'react';
import './PaginationComp.css';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

class PaginationComp extends Component {
  render() {
    return (
      <Container>
      <div className="container text-center mt-5">
      <nav aria-label="Page navigation">
        <ul className="pagination container w-25 justify-content-center">
          <li classNameName="page-item">
            <Link style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" href="#" aria-label="Previous">
              <span aria-hidden="true">&larr;</span>
              <span className="sr-only">Previous</span>
            </Link>
          </li>
          <li className="page-item"><Link style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" href="#">1</Link></li>
          <li className="page-item"><Link style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" href="#">2</Link></li>
          <li className="page-item"><Link style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" href="#">3</Link></li>
          <li className="page-item"><Link style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" href="#">4</Link></li>
          <li className="page-item"><Link style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" href="#">5</Link></li>
          <li className="page-item"><Link style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" href="#">6</Link></li>
          <li className="page-item">
            <Link style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" href="#" aria-label="Next">
              <span aria-hidden="true">&rarr;</span>
              <span className="sr-only">Next</span>
            </Link>
          </li>
        </ul>
      </nav>
      </div>
      </Container>
    );
  }
}

export default PaginationComp;