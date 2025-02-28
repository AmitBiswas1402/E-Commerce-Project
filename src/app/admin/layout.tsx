import Nav, { NavLink } from '@/components/Nav';
import React from 'react'

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
        <Nav>
          <NavLink href='/admin'>Dashboard</NavLink>
          <NavLink href='/admin/products'>Products</NavLink>
          <NavLink href='/admin/users'>Customer</NavLink>
          <NavLink href='/admin/orders'>Orders</NavLink>
            
        </Nav>
        <div className='container my-6'>{children}</div>
    </>
  )
}

