import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label className="title">Name</label>
      <input
        type="text"
        placeholder="Your Name"
        name="First name"
        ref={register({ maxLength: 80 })}
      />

      <label className="title">Learning Type</label>
      <div>
        <input
          type="radio"
          id="in-person"
          name="learning-type"
          value="in-person"
        />
        <label for="in-person">All my classes are in-person</label>
      </div>

      <div>
        <input type="radio" name="learning-type" value="mix" />
        <label for="mix">I have a mix of in-person and online classes</label>
      </div>

      <div>
        <input type="radio" id="other" name="learning-type" value="other" />
        <label for="other">All of my classes are online</label>
      </div>

      <div className="buttons flex-center">
        <Button dark text={"Submit Customized Petition"} type="submit" />
        <div className="divider">or</div>
        <Button dark text={"Submit Default Petition"} type="button" />
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
}
