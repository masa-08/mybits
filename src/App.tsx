import { BrowserRouter } from 'react-router-dom'
import { AppRoutes, ScrollToTop } from './routes'

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  )
}
