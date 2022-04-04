import React from "react";
import { Layout, Seo } from "components";
import { useForm } from "@formspree/react";
import {
  FormWrapper,
  InputWrapper,
  ButtonWrapper,
} from "../style/contactStyle";

const Contact = () => {
  const [state, handleSubmit] = useForm("xoqrnpln");
  if (state.succeeded) {
    return <p>Thanks for contacting us!</p>;
  }

  return (
    <Layout>
      <Seo title="Contact Us" description="Message us with questions" />

      <FormWrapper>
        <h1>Contact Us</h1>
        <form
          action="https://formspree.io/f/xoqrnpln"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div>
            <label>
              <span>Your email</span>
              <InputWrapper>
                <input type="email" required name="email" />
              </InputWrapper>
            </label>
          </div>
          <div>
            <label>
              <span>Your message</span>
              <InputWrapper>
                <textarea required name="message" />
              </InputWrapper>
            </label>
          </div>
          <ButtonWrapper>
            <button type="submit"> Send </button>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    </Layout>
  );
};

export default Contact;
