import React from 'react';
import Header from '../../components/Header';
import { Customers } from '@/app/components/Customers';


export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Customers />
    </div>
  );
}