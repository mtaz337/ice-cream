import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Headers from './components/Headers/Headers';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <Layout>
      <Headers/>
      <Body/>
      <Footer/>
    </Layout>
  );
}

export default App;
