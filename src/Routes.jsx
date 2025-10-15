import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ProposalEngine from './pages/proposal-engine';
import Homepage from './pages/homepage';
import Header from "components/ui/Header";
import FormularioPedidos from "pages/FormularioPedidos/FormularioPedidos";

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
        <Route path="/formulario-pedidos" element={<FormularioPedidos/>} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
