import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from 'pages/Home'
import { AddFriend } from 'pages/AddFriend'
import { Components } from './pages/Components'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ログイン画面 */}
          <Route path="/" element={<Login />} />
          {/* 掲示板画面 */}
          <Route path="/Home" element={<Home />} />
          {/* フレンド追加画面 */}
          <Route path="/AddFriend" element={<AddFriend />} />
          {/* コンポーネント確認用ページ */}
          <Route path="/components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
