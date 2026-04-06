import React, { useState } from 'react';

const LegalConsent = ({ onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    onAccept(e.target.checked);
  };

  return (
    <div style={{
      backgroundColor: '#000',
      border: '1px solid #D4AF37',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '20px',
      direction: 'rtl',
      textAlign: 'right',
      color: '#fff'
    }}>
      <h4 style={{ color: '#D4AF37', margin: '0 0 10px 0' }}>📋 موافقة قانونية</h4>
      <p style={{ fontSize: '0.85rem', marginBottom: '12px' }}>
        بإرسال هذه البيانات، أقر بصحة المعلومات المقدمة وأوافق على معالجتها من قبل منصة LF Gateway.
      </p>
      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
        <input 
          type="checkbox" 
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{ accentColor: '#D4AF37', width: '18px', height: '18px' }}
        />
        <span style={{ fontSize: '0.9rem' }}>أوافق على الشروط المذكورة أعلاه</span>
      </label>
    </div>
  );
};

export default LegalConsent;