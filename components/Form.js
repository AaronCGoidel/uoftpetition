import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import templeate from "../lib/template";

const Form = (props) => {
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    props.submit(data);
    // const t = templeate(data);
    // window.location = `mailto:xyz@abc.com?subject=${t.subject}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <label className="title">Name</label>
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        ref={register({ maxLength: 80 })}
        required
      />
      <label className="title">Learning Type</label>
      <div>
        <input
          type="radio"
          id="in-person"
          name="learning-type"
          value="in-person"
          ref={register}
          required
        />
        <label htmlFor="in-person">All my classes are in-person</label>
      </div>
      <div>
        <input type="radio" name="learning-type" value="mix" ref={register} />
        <label htmlFor="mix">
          I have a mix of in-person and online classes
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="online"
          name="learning-type"
          value="online"
          ref={register}
        />
        <label htmlFor="online">All of my classes are online</label>
      </div>
      <div className="buttons flex-center">
        <Button dark text={"Send Your Petition"} type={"submit"} />
        <div className="divider">or</div>
        <Button dark text={"Get Plaintext"} type="button" />
      </div>
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
          }

          input[type="text"] {
            flex: 1;
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
            margin: 0 1rem;
          }
        `}
      </style>
    </form>
  );
};

export default Form;
