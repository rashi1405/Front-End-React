import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

export default function Child() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

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
          {data.map((record) => {
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
