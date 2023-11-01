import React, { useEffect, useState } from 'react';
import firebase from "firebase";
import "firebase/firestore";
import Sidebar from '../components/Sidebar'

function Clients() {
  return (
    <div className="main-layout position_head">
        <Sidebar page="clients" />
        <table
  id="dtBasicExample"
  className="table table-striped table-bordered"
  cellSpacing={0}
  width="100%"
>
  <thead>
    <tr>
      <th className="th-sm">Name</th>
      <th className="th-sm">Position</th>
      <th className="th-sm">Office</th>
      <th className="th-sm">Age</th>
      <th className="th-sm">Start date</th>
      <th className="th-sm">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td>$320,800</td>
    </tr>
    <tr>
      <td>Garrett Winters</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>63</td>
      <td>2011/07/25</td>
      <td>$170,750</td>
    </tr>
    <tr>
      <td>Ashton Cox</td>
      <td>Junior Technical Author</td>
      <td>San Francisco</td>
      <td>66</td>
      <td>2009/01/12</td>
      <td>$86,000</td>
    </tr>
    <tr>
      <td>Cedric Kelly</td>
      <td>Senior Javascript Developer</td>
      <td>Edinburgh</td>
      <td>22</td>
      <td>2012/03/29</td>
      <td>$433,060</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Start date</th>
      <th>Salary</th>
    </tr>
  </tfoot>
</table>

 



        

    </div>
   
  )
}

export default Clients