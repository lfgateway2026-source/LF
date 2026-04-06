import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import LegalConsent from './legalConsent'; // تأكد أن الملف في نفس المجلد

function ContactForm() {
  const [state, handleSubmit] = useForm("xqedqvyr");
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  if (state.succeeded) {
      return <p style={{color: '#D4AF37', textAlign: 'center', padding: '20px', backgroundColor: '#111', borderRadius: '10px'}}>شكراً لثقتك! تم استلام بياناتك بنجاح في منصة LF Gateway.</p>;
  }

  return (
      <form onSubmit={handleSubmit} encType="multipart/form-data" style={{display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', margin: '0 auto'}}>
        
        <label htmlFor="email" style={{color: '#fff', textAlign: 'right'}}>البريد الإلكتروني:</label>
        <input id="email" type="email" name="email" required style={{padding: '12px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#222', color: '#fff'}} />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* المربع القانوني الذهبي والأسود */}
        <LegalConsent onAccept={(isAccepted) => setIsConsentChecked(isAccepted)} />

        {/* زر الإرسال - مربوط بالموافقة */}
        <button 
          type="submit" 
          disabled={state.submitting || !isConsentChecked}
          style={{
            backgroundColor: isConsentChecked ? '#D4AF37' : '#444',
            color: '#000',
            padding: '14px',
            fontWeight: 'bold',
            cursor: isConsentChecked ? 'pointer' : 'not-allowed',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            transition: '0.3s'
          }}
        >
          {state.submitting ? 'جاري الإرسال...' : 'إرسال البيانات للمستثمرين'}
        </button>
      </form>
  );
}

export default ContactForm;