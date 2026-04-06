// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import LegalConsent from './legalConsent';

function ContactForm() {
  const [state, handleSubmit] = useForm("xqedqvyr");
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  const handleAcceptConsent = (isAccepted) => {
    setIsConsentChecked(isAccepted);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label htmlFor="email">
        Your email:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="upload">
        Your file:
      </label>
      <input
        id="upload"
        type="file"
        name="upload"
      />
      <ValidationError 
        prefix="File" 
        field="upload"
        errors={state.errors}
      />
      <LegalConsent onAccept={handleAcceptConsent} />
      <button 
        type="submit" 
        disabled={state.submitting || !isConsentChecked}
      >
        Send
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;