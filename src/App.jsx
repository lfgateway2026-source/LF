import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import LegalConsent from './LegalConsent'; // لاحظ حرف L كبير هنا

function ContactForm() {
  const [state, handleSubmit] = useForm("xqedqvyr");
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  if (state.succeeded) {
      return (
        <div style={{ textAlign: 'center', padding: '30px', color: '#D4AF37' }}>
          <h2>✅ تم الإرسال بنجاح</h2>
          <p>شكراً لاهتمامكم بمنصة LF Gateway.</p>
        </div>
      );
  }

  return (
    <div style={{ direction: 'rtl', padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <label style={{ color: '#fff' }}>الاسم الكامل</label>
        <input type="text" name="name" required style={{ padding: '10px', backgroundColor: '#111', color: '#fff', border: '1px solid #333' }} />

        <label style={{ color: '#fff' }}>رقم الهاتف أو البريد</label>
        <input type="text" name="contact" required style={{ padding: '10px', backgroundColor: '#111', color: '#fff', border: '1px solid #333' }} />

        {/* المربع القانوني الذهبي والأسود */}
        <LegalConsent onAccept={(val) => setIsConsentChecked(val)} />

        <button 
          type="submit" 
          disabled={state.submitting || !isConsentChecked}
          style={{
            backgroundColor: isConsentChecked ? '#D4AF37' : '#444',
            color: '#000',
            padding: '15px',
            fontWeight: 'bold',
            cursor: isConsentChecked ? 'pointer' : 'not-allowed',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          {state.submitting ? 'جاري الإرسال...' : 'قدم الاهتمام'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;