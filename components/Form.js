import React, { useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import template from "../lib/template";

const Form = (props) => {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data, isEmail = true) => {
    props.submit(data);
    let t = template(data);
    props.closeForm();

    if (isEmail) {
      t = { ...t, body: t.body.replace(/(?:\r\n|\r|\n)/g, "%0D%0A") };
      window.location = `mailto:${t.to}?subject=${t.subject}&body=${t.body}`;
    } else {
      props.plaintextSubmit(t);
    }
  };

  const onSubmitPlain = (data) => {
    onSubmit(data, false);
  };

  return (
    <div>
      <h1>Send Your Petition</h1>
      <h4>The following form will help customize your email.</h4>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <label className="title">Name</label>
        <input
          type="text"
          placeholder="Your Name, First and Last"
          name="name"
          ref={register({ maxLength: 80 })}
          required
        />
        <label className="title">Learning Type</label>
        <div>
          <input
            type="radio"
            id="in-person"
            name="learning_type"
            value="in-person"
            ref={register}
            required
          />
          <label htmlFor="in-person">All my classes are in-person</label>
        </div>
        <div>
          <input
            type="radio"
            id="mix"
            name="learning_type"
            value="a mix of in-person and online"
            ref={register}
          />
          <label htmlFor="mix">
            I have a mix of in-person and online classes
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="online"
            name="learning_type"
            value="online"
            ref={register}
          />
          <label htmlFor="online">All of my classes are online</label>
        </div>
        <label className="title">At which UofT campus are you enrolled?</label>
        <div>
          <input
            type="radio"
            id="Mississauga"
            name="campus"
            value="Mississauga"
            ref={register}
            required
          />
          <label htmlFor="Mississauga">Mississauga</label>
        </div>
        <div>
          <input
            type="radio"
            id="Scarborough"
            name="campus"
            value="Scarborough"
            ref={register}
            required
          />
          <label htmlFor="Scarborough">Scarborough</label>
        </div>
        <div>
          <input
            type="radio"
            id="St-George"
            name="campus"
            value="St. George"
            ref={register}
            required
          />
          <label htmlFor="St-George">St. George</label>
        </div>
        <div>
          <input
            type="radio"
            id="St-George-Eng"
            name="campus"
            value="St. George (Engineering)"
            ref={register}
            required
          />
          <label htmlFor="St-George-Eng">St. George (Engineering)</label>
        </div>
        <div className="buttons flex-center">
          <Button dark text={"Send Your Petition"} type={"submit"} />
          {/* <div className="divider">or</div>
          <Button
            dark
            text={"Get Plaintext"}
            type="button"
            onClick={handleSubmit(onSubmit)}
          /> */}
        </div>
      </form>
      <style jsx>
        {`
          .title {
            font-size: 1.2em;
            margin-top: .5rem;
            margin-bottom: .5rem;
          }

          .form {
              display: flex;
              flex-direction: column;
              flex: 1;
          }

          input[type="text"] {
            padding: 1.2rem 1rem;
            border-radius: 12px;
            border 1px solid #6c6c6c;
            font-size: 14px;
          }

          input[type="radio"] {
              margin-right: 5px;
              margin-bottom: 10px;
          }

          .divider {
            width: 100%;
            display: flex;
            align-items: center;
            text-align: center;

            color: #6c6c6c;
          }

          .divider::before,
          .divider::after {
            content: "";
            flex: 1;
            border-bottom: 1px solid #6c6c6c;
            margin: 1.5rem; 1rem;
          }

          .buttons {
            flex: 1;
            margin-top: 1rem;
            padding: 2rem 0;
          }

          @media screen and (max-width: 50rem) {
            .buttons {
              margin-top: 0;
              padding-bottom: 1rem;
              padding-top: .1rem;
            }

            .divider::before,
            .divider::after {
              margin: .1rem 1rem;
            }

            .divider {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Form;
