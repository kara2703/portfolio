import ContactForm from '@components/ContactForm';
import Header from '@components/Header';
import { Heading } from '@components/Heading';
import Page from '@components/Page';
import React from 'react';

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
