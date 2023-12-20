import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/main.css';
import React, { useState, useEffect, Fragment } from 'react'

export default function Work({ heading, projects, content }) {

  useEffect(() => {
    let projectBoxesWrap = document.getElementsByClassName('projectBoxesWrap');

    for(let proInt = 0; proInt < projectBoxesWrap.length; proInt++) {
      projectBoxesWrap[proInt].addEventListener("mouseover", (e) => {
        for(let i = 0; i < projectBoxesWrap.length; i++) {
          projectBoxesWrap[i].classList.add("faded");
        }
        projectBoxesWrap[proInt].classList.remove("faded");
        projectBoxesWrap[proInt].classList.add("highlight");
      });
      projectBoxesWrap[proInt].addEventListener("mouseleave", (e) => {
        for(let i = 0; i < projectBoxesWrap.length; i++) {
          projectBoxesWrap[i].classList.remove("faded");
          projectBoxesWrap[i].classList.remove("highlight");
        }
      });
    }
  }, [])

  return (
    <div className='container-inner workContainer'>
      <div className='row justify-content-center'>
        <div className='col-lg-12'>
            <h2>Featured Work</h2>
        </div>
        <div className='col-lg-6'>
            <p>{heading}</p>
        </div>
      </div>
      <div className='row justify-content-between'>
      {projects.map((project, i) => {

            let proNavList = '<ul>';
            if ( project.attribution ) {
              proNavList += `<li><i class="fa-solid fa-code-branch"></i>${project.attribution}</li>`;
            }
            if ( project.date ) {
              proNavList += '<li><i class="fa-regular fa-calendar"></i>' + project.date + '</li>';
            }
            if ( project.link ) {
              proNavList += '<li><a href="' + project.link + '" target="_blank">View</a></li>';
            }
            proNavList += '<ul>';

            return(
                    <div className="col-lg-6 projectBoxesWrap" key={i}>
                        <div className='projectBoxes'>
                            <h3 className="projects-text">{project.name}</h3>
                            <p>{project.content}</p>
                            <div dangerouslySetInnerHTML={{__html: proNavList}}></div>
                        </div>
                    </div>
                )
      })}
      <div className='row justify-content-center'>
        <div className='col-lg-6'>
          <p dangerouslySetInnerHTML={{__html: content}}></p>
        </div>
      </div>
      </div>
    </div>
  )
}

let projectHover = (e, elem, parentElem) => {
  let parentElemPos = parentElem.getBoundingClientRect(); 
  let curX = e.clientX;
  let curY = e.clientY;

  let posLeft = ( curX - parentElemPos.left ) + 100 + 'px';
  let posTop = ( curY - parentElemPos.top ) - 100 + 'px';

  elem.style.left = posLeft;
  elem.style.top = posTop;
}