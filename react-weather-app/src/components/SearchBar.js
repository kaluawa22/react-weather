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
        <MDBContainer className="h-70">
          <MDBRow
            className="justify-content-center align-items-center h-100"
            style={{ color: "#282828" }}
          >
            
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
              
          {props.errorStatus ?(
            <MDBCol md="9" lg="7" xl="5" style={{width:"100%"}}>
              <ErrorAlert />
            </MDBCol>
          ):(
            <p></p>
          )}
          </MDBRow>
        </MDBContainer>
      </div>
    );


}