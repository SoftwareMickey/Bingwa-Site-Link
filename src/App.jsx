import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './pages/Home'
import PurchaseModal from './pages/modal/PurchaseModal'

const route = createBrowserRouter([
  {
    path: ':id',
    element: <RootLayout/>,
    errorElement: '',
    children: [
      {index: true, path: '', element: <Home/>},
      {path: 'purchase', element: <PurchaseModal/>}
    ]
  }
])

function App() {
  return <RouterProvider router={route}/>
}

export default App
