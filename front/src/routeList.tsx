// src/components/RouteList.tsx
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { StatisticsPage } from './pages/statisticsPage';
import { NotFoundPage } from './pages/notFoundPage';
import Navbar from './components/navbar';
import LoginPage from './pages/loginPage';
import ProductPage from './pages/productPage';
import ProductListPage from './pages/productListPage';

export const RouteList = () => (
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<StatisticsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
