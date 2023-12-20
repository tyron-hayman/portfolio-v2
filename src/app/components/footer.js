import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/main.css';

export default function Footer() {

    let today = new Date();
    let year = today.getFullYear();

  return (
    <div className='footerContainer'>
      <div className='row justify-content-between'>
        <div className='col-lg-8 text-lg-start text-sm-center text-xs-center'>
            <p>content &amp; images &copy; {year}. Built with <i class="fa-solid fa-heart"></i> using Wordpress + NextJS - source code availbe on <a href='https://github.com/tyron-hayman/portfolio-v2' target='_blank'>GitHub</a></p>
        </div>
        <div className='col-lg-4 text-lg-end text-sm-center text-xs-center'>
            <p><a href='https://github.com/tyron-hayman' target='_blank'><i class="fa-brands fa-github"></i></a><a href='https://dribbble.com/tyhayman' target='_blank'><i class="fa-brands fa-dribbble"></i></a><a href='https://ca.linkedin.com/in/tyronhayman' target='_blank'><i class="fa-brands fa-linkedin-in"></i></a></p>
        </div>
      </div>
    </div>
  )
}