import React from "react";
import Container from "./Container";

const Info = () => {
  return (
    <Container>
      <h1>What is our message?</h1>
      <p>
        The purpose of this website is to act as an email petition on behalf of
        the University of Toronto student body. All of us are feeling the
        ramifications of the Covid-19 pandemic, not the least of which are the
        changes to the way we are recieving our post-secondary education.
      </p>
      <p>
        Most, if not all of us, will be taking classes online in the coming
        semester. Althought this "hybrid" style of education may be the best
        available alternative to the traditional format, the cost of taking
        classes should be adjusted to reflect current circumstances. Incidental
        fees should be waved as students will not be able to take advantage of
        the programmes and facilities which they fund. The goal of this petition
        is to directly bring cost concerns to the attention of the
        administration.
      </p>
      <p>
        For many students, this is not a matter of choice. Numerous
        international, out of province, and even many UofT students from Ontario
        are not in a position where they could take advantage of the many
        facilities and amenities for which they are being charged.
      </p>
      <p>
        We are looking to take a stand to demand a decrease in the cost of
        attending the University of Toronto in the Fall 2020 Semester.
      </p>
      <h1>What is this?</h1>
      <p>
        There are many petitions out there. So, why use this one? First of all,
        the more petitions that are out there supporting the same cause, the
        better. Secondly, this one is designed to be harder to ignore or
        dismiss.
      </p>
      <p>
        Our tactic is to provide a platform for students to send an email to the
        administration easily, by only clicking a few buttons. This is a more
        direct approach with the same ease of use as a normal petition from a
        site like change.org.
      </p>
      <h1>How to use it.</h1>
      <p>
        Simply click one of the buttons on this page, fill out a form (this
        information helps us keep track of who has signed the peition, for
        legitimacy purposes), and click the button send the automatically
        drafted email.
      </p>
      <p>
        We take care of drafting the email and select who it should go to based
        on your campus, however, feel free to add your own personal remarks.
      </p>
      <style jsx>
        {`
          @media screen and (min-width: 50rem) p {
            padding: 0 6rem;
          }
        `}
      </style>
    </Container>
  );
};

export default Info;
