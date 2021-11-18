import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Grid = () => {
  // const data = [
  //   {trial1: 'm', trial2: '', trial3: ''},
  //   {trial1: '',trial2: '', trial3: ''},
  //   {trial1: '',trial2: '',trial3: ''},
  // ]

  const arr = [];
  for (let i = 1; i <= 3; i++) {
    arr.push("trial" + i);
  }

  const arr1 = [];
  for (let i = 1; i <= 3; i++) {
    let x = {};
    for (let j = 1; j <= 3; j++) {
      x["trial" + j] = "" + j;
    }
    arr1.push(x);
  }

  console.log("Array", arr);
  console.log("Array 1", arr1);

  const dataMapp = arr.map((v) => ({ field: v }));
  console.log("dataMapp : ", dataMapp);
  //setColumns(dataMapp)

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "250px",
        width: "410px"
      }}
    >
      For Appraiser = 1,
      <input
        type="text"
        id="txtrows"
        //value={rowCount}
        placeholder="Set Sample"
        //onChange={(e) => setRowCount(e.target.value)}
      />
      <input
        type="text"
        id="txtrows"
        //value={rowCount}
        placeholder="Set Trial"
        //onChange={(e) => setRowCount(e.target.value)}
      />
      <AgGridReact rowData={arr1} columnDefs={dataMapp} />
    </div>
  );
};

export default Grid;
