import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PasswordGate from './components/PasswordGate';

// Pages
import Home from './pages/Home';
import Rsvp from './pages/Rsvp';
import Events from './pages/Events';
import Travel from './pages/Travel';
import Registry from './pages/Registry';
import Faq from './pages/Faq';

const App: React.FC = () => {
  return (
    <PasswordGate>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rsvp" element={<Rsvp />} />
            <Route path="events" element={<Events />} />
            <Route path="travel" element={<Travel />} />
            <Route path="registry" element={<Registry />} />
            <Route path="faq" element={<Faq />} />
          </Route>
        </Routes>
      </HashRouter>
    </PasswordGate>
  );
};

export default App;