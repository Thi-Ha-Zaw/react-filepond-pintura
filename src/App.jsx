import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ExampleFilePond from './ExampleFilePond'

const App = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<ExampleFilePond />}></Route>
          </Routes>
    </div>
  )
}

export default App