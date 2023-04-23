import ContactForm from '@components/ContactForm';
import Header from '@components/Header';
import { Heading } from '@components/Heading';
import Page from '@components/Page';
import React from 'react';
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4V13E5MCHH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4V13E5MCHH');
</script>
export interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <Page title="Contact" description="Contact me!" header={<Header />}>
      <Heading id="about-me">About Me</Heading>

      <p>
        Hi! My name is <span className="text-bold">Anoushka Rakesh Kabra</span>. I am a very curious
        person who enjoys learning about computer science, economics and finance. I am currently a
        computer science student at
        {/* <a
          className="text-yellow-600 underline"
          href="http://cis.cornell.edu/cornell-computing-information-science"
        > */}
        <b> Cornell University, College of Engineering </b>
        {/* </a> */}. When not programming, I am reading, dancing, or working out. I love travelling
        and have visited about 31 countries.
      </p>

      <Heading id="contact">Contact</Heading>
      <ContactForm />
    </Page>
  );
};

export default ContactPage;
