import React from 'react';

function App() {
  const salute = (name) => `Hi ${name}`;
  return (
      <div>App..{salute('david')}</div>
  );
}

export default App;