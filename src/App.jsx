import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './pages/Home'

const route = createBrowserRouter([
  {
    path: '',
    element: <RootLayout/>,
    errorElement: '',
    children: [
      {index: true, path: '', element: <Home/>}
    ]
  }
])

function App() {
  return <RouterProvider router={route}/>
}

export default App
