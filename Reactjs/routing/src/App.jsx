import React from 'react'
import Dashboard from './Dashboard'
const App = () => {
  let isLoggedin = true;
  return (
    <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 text-3xl">
      {isLoggedin ? <Dashboard /> : "please login first"}
    </div>
  )
}

export default App;
