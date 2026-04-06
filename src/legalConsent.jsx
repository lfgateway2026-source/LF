import React, { useState } from 'react';

const LegalConsent = ({ onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="legal-container" style={{
      backgroundColor: '#111', 
      border: '1px solid #D4AF37', 
      padding: '20px', 
      borderRadius: '10px',
      marginTop: '20px',
      textAlign: 'right',
      direction: 'rtl',
      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.1)'
    }}>
      <h3 style={{ color: '#D4AF37', marginBottom: '15px', fontSize: '1.2rem' }}>
        📜 إقرار ومصادقة قانونية
      </h3>
      
      <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
        بإكمالك لعملية التسجيل، أنت تقر بأن جميع البيانات المدخلة (الاسم، اللقب، رقم الهاتف، الإيميل، تفاصيل المشروع ومكان الإقامة) هي بيانات حقيقية وتخصك شخصياً. 
        كما تصادق على مشاركة هذه البيانات مع المستثمرين والشركاء المعنيين داخل منصة <span style={{color: '#D4AF37'}}>LF Gateway</span> لغرض دراسة الفرص الاستثمارية.
      </p>

      <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input 
          type="checkbox" 
          id="terms" 
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            onAccept(e.target.checked);
          }}
          style={{ 
            accentColor: '#D4AF37', 
            width: '18px', 
            height: '18px',
            cursor: 'pointer'
          }} 
        />
        <label htmlFor="terms" style={{ color: '#fff', cursor: 'pointer', fontSize: '0.95rem' }}>
          أوافق على الشروط والقوانين وأتحمل مسؤولية صحة بياناتي.
        </label>
      </div>
    </div>
  );
};

export default LegalConsent;