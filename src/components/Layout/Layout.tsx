import React from "react"
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }: any) => {
  return (
    <div className="parent-wrapper">
      {children}
      <Toaster
          position="bottom-right"
          reverseOrder={false}
      />
    </div>
  )
}

export default Layout;