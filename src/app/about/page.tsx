'use client'
import Image from 'next/image';
import useSWR from 'swr';
// Components
import Header from '../components/header';
import Footer from '../components/footer';
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/main.css';

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

    body: JSON.stringify({
      query: query
    })
  })
  .then(res => res.json());
}

export default function About() {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_WP_URL, wpData);
 
  if (error) return <div>Failed to load</div>
  if (!data) return <div className='loadingWrap'><div className="loader"></div></div>

  console.log(data.data);

  return (
    <div className='container-outer'>
      <Header />
      <div className='container-inner' id='aboutContainer'>
        <div className='row justify-content-center'>
          <div className='col-lg-12'>
            <h1 dangerouslySetInnerHTML={{__html: data.data.about.aboutFields.aboutHeading}}></h1>
            <div dangerouslySetInnerHTML={{__html: data.data.about.aboutFields.aboutContent}}></div>
          </div>

          <div className='col-lg-12'>
            <figure>
              <blockquote className="blockquote">
                <p>{data.data.themeSettingsNext.themeSettingsFields.footerQuote}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title={data.data.themeSettingsNext.themeSettingsFields.footerQuoteAuthor}>{data.data.themeSettingsNext.themeSettingsFields.footerQuoteAuthor}</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}