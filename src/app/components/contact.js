import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/main.css';

export default function Contact({ heading, content, details }) {
  return (
    <div className='container-inner contactContainer'>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
            <h2>{heading}</h2>
            <p>{content}</p>
            <a className='cursorChange' href={`mailto:${details}`}>Get in touch</a>
        </div>
      </div>
    </div>
  )
}