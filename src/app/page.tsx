'use client'
import Image from 'next/image';
import useSWR from 'swr';
// Components
import Header from './components/header';
import Footer from './components/footer';
import Work from './components/work';
import Contact from './components/contact';
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import './scss/main.css';

const query = `{
  themeSettingsNext {
    themeSettingsFields {
      footerQuote
      footerQuoteAuthor
      toastContent
      toggleToast
    }
  }
  home : pageBy(uri: "/") {
    homepageField {
      landingHeading
      landingContent
      openWorkBox
      workHeading
      workContent
      welcomes {
        phrase
      }
      projects {
        name
        attribution
        content
        date
        image
        link
      }
    }
  }
  about : pageBy(uri: "/about") {
    aboutFields {
      aboutContent
      aboutHeading
      aboutImage
      skillsContent
      skillsHeading
      skillsList {
        skills
      }
    }
  }
  contact : pageBy(uri: "/contact") {
    contactFields {
      contactContent
      contactEmail
      contactTitle
    }
  }
  menus {
    nodes {
      menuItems {
        edges {
          node {
            url
            label
            target
          }
        }
      }
    }
  }
}`;

const wpData = (args: any) => {

  return fetch(args, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    cache : 'no-cache',
    body: JSON.stringify({
      query: query
    })
  })
  .then(res => res.json());
}

export default function Home() {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_WP_URL, wpData);
 
  if (error) return <div>Failed to load</div>
  if (!data) return <div className='loadingWrap'><div className="loader"></div></div>

  return (
    <div className='container-outer'>
      <Header />
      <div className='container-inner' id='landingContainer'>
        <div className='row justify-content-center'>
          <div className='col-lg-12'>
            <h2>{data.data.home.homepageField.landingHeading}</h2>
            <h1>{data.data.home.homepageField.openWorkBox}</h1>
          </div>
          <div className='col-lg-6'>
            <p>{data.data.home.homepageField.landingContent}</p>
          </div>
        </div>
      </div>
      <Work heading={data.data.home.homepageField.workHeading} projects={data.data.home.homepageField.projects} content={data.data.home.homepageField.workContent} />
      <Contact heading={data.data.contact.contactFields.contactTitle} content={data.data.contact.contactFields.contactContent} details={data.data.contact.contactFields.contactEmail} />
      <Footer />
    </div>
  )
}
