import React from 'react';
import AdminHeader from './components/admin/AdminHeader';
import AdminSidebar from './components/admin/AdminSidebar';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminFooter from './components/admin/AdminFooter';
export default function AdminLayout() {
  return (
    <div>
    <AdminHeader />
    <AdminSidebar />
    <AdminDashboard />
    <AdminFooter />
    </div>
  )
}
