import React, { useState } from 'react';
import './Tab.css';

const tabs = ['Home', 'Profile', 'Settings'] as const;
type TabType = typeof tabs[number]; // 'Home' | 'Profile' | 'Settings'

const Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Home');

  const renderContent = (): JSX.Element => {
    switch (activeTab) {
      case 'Home':
        return <p> Welcome to the Home tab!</p>;
      case 'Profile':
        return <p> This is your Profile.</p>;
      case 'Settings':
        return <p> Here are your Settings.</p>;
      default:
        return <p>Unknown tab</p>;
    }
  };

  
  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tab;
