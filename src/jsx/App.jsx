import React, { /* useState, */useEffect, useRef } from 'react';
import '../styles/styles.less';

import FDIExplorer from './components/FDIExplorer.jsx';

function App() {
  useEffect(() => {

  }, []);

  const chartFigureFDIExplorer = useRef(null);

  return (
    <div className="app">
      <FDIExplorer ref={chartFigureFDIExplorer} />
    </div>
  );
}

export default App;
