import React from 'react'
import {
    MDBInputGroup,
  } from 'mdb-react-ui-kit';
  


export default function SearchBar(props) { 

    return (
        <div className="input-group mb-3 justify-content-center" style={{paddingTop:"100px"}}>
        <MDBInputGroup className='mb-3'>
          <input 
            className='form-control' 
            placeholder="Location" 
            type='text' 
            id="location-name"
            onChange={props.inputHandler}
            value={props.getState}
          />
          {/* <MDBBtn outline onClick={submitHandler}>Search</MDBBtn> */}
          <button className="btn btn-primary btn-search" onClick={props.submitHandler}>
              Search
          </button>
        </MDBInputGroup>
      </div>

    );


}