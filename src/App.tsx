import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Components } from './pages/Components'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* コンポーネント確認用ページ */}
          <Route path="/components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
