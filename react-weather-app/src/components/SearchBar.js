import React from 'react'
import {
    MDBInputGroup,
    MDBCol,
    MDBContainer,
    MDBRow,
  } from 'mdb-react-ui-kit';
import ErrorAlert from './ErrorAlert';


export default function SearchBar(props) { 

    return (
      
      <div className="input-group mb-3 justify-content-center" style={{paddingTop:"100px"}}>
        <MDBInputGroup className='mb-3' >
          <input 
            className='form-control' 
            placeholder="Location" 
            type='text' 
            id="location-name"
            onChange={props.inputHandler}
            value={props.getState}
            style={{boxShadow:"none"}}
          />
          {/* <MDBBtn outline onClick={submitHandler}>Search</MDBBtn> */}
          <button className="btn btn-search inline" onClick={props.submitHandler}>
              Search
          </button>
        </MDBInputGroup>
        {/* {props.errorStatus && <ErrorAlert />} */}

        {props.errorStatus ?(
          <ErrorAlert />
         
        ):(
          <p></p>
        )}
        
      </div>

    );


}