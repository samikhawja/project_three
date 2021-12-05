import React from "react";
import { Table } from "react-router-dom";
//import entry title
const myStyle = {
  color: "#403F48",
  backgroundColor: "#E3D9CA",
};

const JournalView = () => {
  return (
    <div style={myStyle}>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>entryTitle {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>entryTitle {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>entryTitle {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default JournalView;

// Alix's Notes
// Table with 3 entries
// title is link to entry modal?
