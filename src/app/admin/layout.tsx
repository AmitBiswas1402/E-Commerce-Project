import React from 'react'

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
        <Nav>
            
        </Nav>
        <div className='container my-6'>{children}</div>
    </>
  )
}

