import { useState } from "react";

const InputField = ({ label, type, value, onChange, disabled, error }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  
    const icon = type === 'password' ? (showPassword ? '👁️' : '🔒') : null;
  
    return (
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>{label}</label>
        <div style={{ position: 'relative' }}>
          {icon && (
            <span
              style={{
                position: 'absolute',
                left: '150px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
              onClick={handleTogglePassword}
            >
              {icon}
            </span>
          )}
          <input
            type={type === 'password' && showPassword ? 'text' : type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            style={{ borderColor: error ? 'red' : '' }}
          />
        </div>
        {error && <p style={{ color: 'red', margin: '5px 0 0 0' }}>{error}</p>}
      </div>
    );
  };
  export default InputField