import React, { Component } from 'react';
import './PaginationComp.css';
import { Link } from 'react-router-dom';

class PaginationComp extends Component {
  render() {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination container w-25 justify-content-between">
          <li classNameName="page-item">
            <Link className="page-link text-black-50" href="#" aria-label="Previous">
              <span aria-hidden="true">&larr;</span>
              <span className="sr-only">Previous</span>
            </Link>
          </li>
          <li className="page-item"><Link className="page-link text-black-50" href="#">1</Link></li>
          <li className="page-item"><Link className="page-link text-black-50" href="#">2</Link></li>
          <li className="page-item"><Link className="page-link text-black-50" href="#">3</Link></li>
          <li className="page-item"><Link className="page-link text-black-50" href="#">4</Link></li>
          <li className="page-item"><Link className="page-link text-black-50" href="#">5</Link></li>
          <li className="page-item"><Link className="page-link text-black-50" href="#">6</Link></li>
          <li className="page-item">
            <Link className="page-link text-black-50" href="#" aria-label="Next">
              <span aria-hidden="true">&rarr;</span>
              <span className="sr-only">Next</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default PaginationComp;