import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = () => {
  const [isPortalOpen, setPortalOpen] = useState(false);

  const togglePortal = () => {
    setPortalOpen(!isPortalOpen);
  };

  const portalRoot = document.getElementById('portal-root');

  return (
    <div>
      <button onClick={togglePortal}>
        {isPortalOpen ? 'Закрыть портал' : 'Открыть портал'}
      </button>

      {isPortalOpen &&
        ReactDOM.createPortal(
          <div className="portal-content">
            Содержимое портала
          </div>,
          portalRoot
        )}
    </div>
  );
};

export default PortalComponent;
