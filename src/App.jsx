import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ContactForm } from './components/ContactForm';
import { WhyChoose } from './components/Contents';

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero/>
      <Services />
      <WhyChoose />
      <ContactForm />
    </div>
  );
}
