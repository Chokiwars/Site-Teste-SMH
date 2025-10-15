import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ProposalEngine from './pages/proposal-engine';
import Homepage from './pages/homepage';
import ServicesPage from './pages/services';
import Header from 'components/ui/Header';


const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <Header />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/proposal-engine" element={<ProposalEngine />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<NotFound />} />
        
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
