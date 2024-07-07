import React from 'react';
import LandingPage from './components/LandingPage';
import CardSection from './components/CardSection';
import AddYourOwnSection from './components/AddYourOwnSection';
import TestimonialsSection from './components/TestimonialsSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <CardSection />
      <AddYourOwnSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}

export default App;
