import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container-fluid">
        <div class="row header">
            <div class="col">
                <div class="container">
                    <h1>My Application</h1>
                    <p class="mb-0">Welcome to your app template</p>
                </div>
            </div>
        </div>
    </div>

    
    <div class="container">
        <div class="row">
            
            <div class="col-md-6 mb-3">
                <div class="left-column">
                    <h2>Left Column</h2>
                    <p>This is the left column content area.</p>
                    <p>Add your forms, inputs, or navigation here.</p>
                </div>
            </div>

            
            <div class="col-md-6 mb-3">
                <div class="right-column">
                    <h2>Right Column</h2>
                    <p>This is the right column content area.</p>
                    <p>Add your results, charts, or additional content here.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
