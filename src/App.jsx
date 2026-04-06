import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xqedqvyr");

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

        {/* السطر الذهبي الذي كان أخضر في صورتك */}
        <p style={{ color: '#D4AF37', fontSize: '0.9rem', textAlign: 'right', margin: '10px 0' }}>
          بإرسال هذه البيانات، أقر بصحة المعلومات المقدمة وأوافق على معالجتها من قبل منصة LF Gateway.
        </p>

        <button 
          type="submit" 
          disabled={state.submitting}
          style={{ backgroundColor: '#D4AF37', color: '#000', padding: '15px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
        >
          {state.submitting ? 'جاري الإرسال...' : 'قدم الاهتمام'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;