import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Components } from './pages/Components'
import { BB } from 'pages/BB'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/bb" element={<BB />} />
          {/* コンポーネント確認用ページ */}
          <Route path="/components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
