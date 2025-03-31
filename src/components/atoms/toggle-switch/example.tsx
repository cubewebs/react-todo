import React, { useState } from 'react';
import { ToggleSwitch } from './index';

const ToggleSwitchExample: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Toggle Switch Examples</h2>
      
      {/* Basic Toggle */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Basic Toggle</h3>
        <ToggleSwitch
          checked={isEnabled}
          onChange={setIsEnabled}
          label="Enable notifications"
        />
        <p>Current state: {isEnabled ? 'Enabled' : 'Disabled'}</p>
      </div>

      {/* Toggle with Required Field */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Required Toggle</h3>
        <ToggleSwitch
          checked={isDarkMode}
          onChange={setIsDarkMode}
          label="Dark Mode"
          required
        />
        <p>Current state: {isDarkMode ? 'Dark Mode On' : 'Dark Mode Off'}</p>
      </div>

      {/* Disabled Toggle */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Disabled Toggle</h3>
        <ToggleSwitch
          checked={isDisabled}
          onChange={setIsDisabled}
          label="Disabled toggle"
          disabled
        />
      </div>

      {/* Toggle without Label */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Toggle without Label</h3>
        <ToggleSwitch
          checked={isEnabled}
          onChange={setIsEnabled}
        />
      </div>

      {/* Toggle with Custom Class */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Toggle with Custom Class</h3>
        <ToggleSwitch
          checked={isEnabled}
          onChange={setIsEnabled}
          label="Custom styled toggle"
          className="custom-toggle"
        />
      </div>
    </div>
  );
};

export default ToggleSwitchExample; 