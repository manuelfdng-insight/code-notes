import React from 'react';
import GunplaForm from './components/GunplaForm';
import GunplaList from './components/GunplaList';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1>Gunpla Models Manager</h1>
      <GunplaForm />
      <GunplaList />
    </div>
  );
}

export default App;