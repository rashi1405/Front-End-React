import React, { useEffect, useState } from 'react';
import './App.css';

export default function Child() {
  const [data, setData] = useState([]);

  const sorting = (col) => {
    const sorted = [...data].sort((a, b) =>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
    );
    setData(sorted);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  return (
    <div>
      <button onClick={() => sorting('title')}>Click by name</button>
      <button onClick={() => sorting('body')}>Click</button>
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
