import React, { /* useState, */useEffect, useRef } from 'react';
import '../styles/styles.less';

import FDIExplorer from './components/FDIExplorer.jsx';

function App() {
  useEffect(() => {

  }, []);

  const chartFigureFDIExplorer = useRef(null);

  return (
    <div className="app">
      <div className="title_container">
        <img src="https://static.dwcdn.net/custom/themes/unctad-2024-rebrand/Blue%20arrow.svg" className="logo" alt="UN Trade and Development logo" />
        <div className="title">
          <h3>Foreign direct investment explorer</h3>
          <h4>FDI flows by region and economy, dollars, 1990–2024</h4>
        </div>
      </div>
      <FDIExplorer ref={chartFigureFDIExplorer} />
    </div>
  );
}

export default App;
