import Home from "./pages/Home"
import { createHashRouter } from "react-router"
import { RouterProvider } from "react-router-dom"
import Download from "./layout/Download"

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/download',
    element: <Download />
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}