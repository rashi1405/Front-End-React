import React from 'react';
import './App.css';
import Records from './records.json';

export default function Child() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th id="one">ID</th>
            <th id="two">DATA</th>
            <th id="three">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {Records.map((record) => {
            return (
              <tr>
                <td id="one">{record.id}</td>
                <td id="two">{record.title}</td>
                <td id="three">{record.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
