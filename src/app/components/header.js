import React, { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/main.css';

export default function Header() {
  
  useEffect(() => {
      let mouseTracker = document.getElementById("mouseTracker");
      let cursorChange = document.getElementsByClassName("cursorChange");

      document.addEventListener("mousemove", (e) => {
        mouseTrack(e, mouseTracker);
        mouseTracker.classList.add("show");
      });

      for(let curI = 0; curI < cursorChange.length; curI++) {
        cursorChange[curI].addEventListener("mouseover", (e) => {
          mouseTracker.classList.add("hovered");
        });
        cursorChange[curI].addEventListener("mouseleave", (e) => {
          mouseTracker.classList.remove("hovered");
        });
      }

  }, [])

  return (
    <>
    <div id="mouseTracker"></div>
    <div className='container-nav'>
      <nav className="navbar">
        <div className="container-nav">
          <div className='row justify-content-between'>
            <div className='col-5'>
              <a className="navbar-brand cursorChange" href="/">
              <i className="fa-solid fa-terminal"></i> TH
              </a>
            </div>
            <div className='col-5'>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

let mouseTrack = (e, elem) => {
  let curX = e.clientX;
  let curY = e.clientY;

  let posLeft = curX + 'px';
  let posTop = curY + 'px';

  elem.style.left = posLeft;
  elem.style.top = posTop;
}