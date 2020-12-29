import React, { Component } from 'react';
import './PaginationComp.css';
import { Container } from 'reactstrap';

class PaginationComp extends Component {
  render() {
    return (
      <Container>
      <div className="container text-center mt-5">
      <nav aria-label="Page navigation">
        <ul className="pagination container w-25 justify-content-center">
          <li classNameName="page-item">
            <div style={{backgroundColor:"#FFB700"}} className="page-link text-black-50"  aria-label="Previous">
              <span aria-hidden="true">&larr;</span>
              <span className="sr-only">Previous</span>
            </div>
          </li>
          <li className="page-item"><div id={1} onClick={(e)=> this.props.handlePagination(e.target.id)} style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" >1</div></li>
          <li className="page-item"><div id={2} onClick={(e)=>this.props.handlePagination(e.target.id)} style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" >2</div></li>
          <li className="page-item"><div id={3} onClick={(e)=> this.props.handlePagination(e.target.id)} style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" >3</div></li>
          <li className="page-item"><div id={4} onClick={(e)=> this.props.handlePagination(e.target.id)} style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" >4</div></li>
          <li className="page-item"><div id={5} onClick={(e)=> this.props.handlePagination(e.target.id)} style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" >5</div></li>
          <li className="page-item"><div id={6} onClick={(e)=> this.props.handlePagination(e.target.id)} style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" >6</div></li>
          <li className="page-item">
            <div style={{backgroundColor:"#FFB700"}} className="page-link text-black-50" aria-label="Next">
              <span aria-hidden="true">&rarr;</span>
              <span className="sr-only">Next</span>
            </div>
          </li>
        </ul>
      </nav>
      </div>
      </Container>
    );
  }
}

export default PaginationComp;