import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xqedqvyr");

  if (state.succeeded) {
      return <p style={{color: '#D4AF37', textAlign: 'center', padding: '20px'}}>تم استلام بياناتك بنجاح في منصة LF Gateway.</p>;
  }

  return (
    <div style={{ direction: 'rtl', padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <label style={{ color: '#fff' }}>الاسم الكامل</label>
        <input type="text" name="name" required style={{ padding: '10px', backgroundColor: '#111', color: '#fff', border: '1px solid #333' }} />

        <label style={{ color: '#fff' }}>رقم الهاتف أو البريد</label>
        <input type="text" name="contact" required style={{ padding: '10px', backgroundColor: '#111', color: '#fff', border: '1px solid #333' }} />

        {/* هذه هي اللافتة البسيطة التي طلبتها */}
        <div style={{ backgroundColor: '#1a1a1a', border: '1px solid #D4AF37', padding: '15px', color: '#fff', fontSize: '0.9rem', borderRadius: '5px' }}>
          <strong style={{ color: '#D4AF37' }}>📋 ملاحظة هامة جدا:</strong>
          <p style={{ margin: '5px 0 0 0' }}>
            بإرسال هذه البيانات، أقر بصحة المعلومات المقدمة وأوافق على معالجتها من قبل منصة LF Gateway لأغراض الاستثمار والتواصل الرسمي.
          </p>
        </div>

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