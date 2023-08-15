import React from 'react'
import AdminHeader from './components/admin/AdminHader'
import { AdminSidebar } from "./components/admin/AdminSidebar"
import { AdminDashbord } from './components/admin/AdminDashbord'
import { AdminFooter } from './components/admin/AdminFooter'


export const AdminLayout = () => {
  return (
    <div>
       <AdminHeader />
       <AdminSidebar />
       <AdminDashbord />
       <AdminFooter />
    </div>
  )
}