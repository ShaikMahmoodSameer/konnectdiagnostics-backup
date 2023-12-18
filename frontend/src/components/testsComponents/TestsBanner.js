import React from 'react';
import "./tests.css";
import { BiChevronsRight } from "react-icons/bi";

function TestsBanner() {
    return (
      <div className="pagebanner d-flex">
        <div className="container text-center flex">
          <h1 className='page_title'>Tests</h1>
          <p>
            <span className='text-white'> Home </span>
            <BiChevronsRight />
            <span> Tests </span>
          </p>
        </div>
      </div>
    )
}

export default TestsBanner
