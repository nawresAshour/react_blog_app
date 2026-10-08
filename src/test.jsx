/*import React from 'react'

const App = () => {
  return (
    <div>Hellp nwrs babe </div>
  )
}

export default App


import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const container = {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  };
  //     const handleClickagain =(name,e) => {
// console.log('hello' + name , e.target);
//     }

    // const [name,setName] = useState('nwrs');
    // const [age, setage] = useState(25)

    // const handleClick = () => {
    //     setName ('ashour');
    //     setage ('30');
    // }
 // console.log('use effect ran');
  // console.log(blogs);
 
//     const handleClick =(e) => {
// console.log("hello, nwrs", e);
//     }

  const button = {
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={container}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button style={button} onClick={() => setCount(count + 1)}>
        +
      </button>

      <button style={button} onClick={() => setCount(count - 1)}>
        -
      </button>

      <button style={button} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}\


----------------home V1
import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';
import useFetch from './useFetch';


const Home = () => {
  const {data :blogs , isPending,error}= useFetch('http://localhost:8000/blog');


  return (
    <div className="home">
      { error &&  <div> {error}</div>} 
      
      {isPending && <div>Loading .... </div>}
      {blogs && <Bloglist
      
        blogs={blogs}
        title="All Blogs"
        // handleDelete={handleDelete}
      />}
    </div>
  );
}

export default Home; 



export default App;

import React from 'react'

function App(){
 const title ='hello eng.nwrs ashour ';
 const likes =50;
 //const person = {name:'nwrs',age:'27'}

  return (
    <div className="app">
      <div className="content">
        <h1>{title}</h1>
        <p> L ikes {likes}</p>
       {/* <p>person : {person}</p>}
       <p>{ Math.random() *10} </p>
       <a href="http://www.google.com">google site</a>
      </div>
    </div>
  )
}

css v1 
/*
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Quicksand:wght@300..700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
  color: #4E0000;
}

body {
  background: #faf7f7;
}

.navbar {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eadede;
}

.navbar h1 {
  color: #4E0000;
  font-size: 28px;
  font-weight: 700;
}

.navbar .links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.navbar a {
  text-decoration: none;
  padding: 8px 14px;
  color: #4E0000;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.navbar a:hover {
  background: #4E0000;
  color: white;
}

button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 9px 16px;
  border-radius: 9px;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.25s ease;
}

.delete-btn {
  background: #4E0000;
  color: white;
}

.delete-btn:hover {
  background: #6b0000;
  transform: translateY(-2px);
}

.primary-btn {
  background: #4E0000;
  color: white;
}

.primary-btn:hover {
  background: #6b0000;
  transform: translateY(-2px);
}

.content {
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  padding: 20px 30px;
}

.blog-preview {
  background: #ffffff;
  padding: 22px 24px;
  margin: 20px 0;
  border: 1px solid #eee2e2;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(78, 0, 0, 0.06);
  transition: 0.3s ease;
}

.blog-preview:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(78, 0, 0, 0.12);
}

.blog-preview h2 {
  font-size: 21px;
  color: #4E0000;
  margin-bottom: 10px;
}

.blog-preview p {
  color: #704d4d;
  font-size: 15px;
  line-height: 1.7;
}

.blog-details {
  width: min(900px, 92%);
  margin: 60px auto;
}

.blog-details article {
  background: #ffffff;
  padding: 45px 50px;
  border-radius: 18px;
  border: 1px solid #eeeeee;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.06);
}

.blog-details article h2 {
  margin: 0 0 12px;
  color: #4E0000;
  font-size: clamp(28px, 4vw, 42px);
}

.blog-details article p {
  margin: 0 0 32px;
  color: #777;
  padding-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
}

.blog-details article > div {
  color: #333;
  font-size: 17px;
  line-height: 1.9;
}

.create {
  width: min(700px, 92%);
  margin: 60px auto;
}

.create h2 {
  text-align: center;
  color: #4E0000;
  font-size: clamp(28px, 4vw, 38px);
  margin-bottom: 35px;
}

.create form {
  background: #ffffff;
  padding: 40px;
  border-radius: 18px;
  border: 1px solid #eeeeee;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
}

.create label {
  color: #333;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
}

.create input,
.create textarea,
.create select {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 13px 15px;
  margin-bottom: 24px;
  font-family: inherit;
  font-size: 15px;
  background: #fafafa;
  color: #333;
  outline: none;
}

.create textarea {
  min-height: 180px;
  resize: vertical;
}

.create input:focus,
.create textarea:focus,
.create select:focus {
  border-color: #4E0000;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(78, 0, 0, 0.08);
}

.create button {
  border: none;
  border-radius: 10px;
  padding: 14px 20px;
  background: #4E0000;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.create button:hover {
  background: #650000;
  transform: translateY(-2px);
}

/* Blog Details Responsive 

@media (max-width: 768px) {
  .blog-details {
    width: 90%;
    margin: 40px auto;
  }

  .blog-details article {
    padding: 32px 25px;
  }

  .create {
    width: 90%;
    margin: 40px auto;
  }

  .create form {
    padding: 30px 25px;
  }
}

@media (max-width: 480px) {
  .blog-details {
    width: 92%;
    margin: 25px auto;
  }

  .blog-details article {
    padding: 25px 20px;
  }

  .create {
    width: 92%;
    margin: 25px auto;
  }

  .create form {
    padding: 25px 20px;
  }
}
*/
