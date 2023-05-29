import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from 'pages/Home'
import { AddFriend } from 'pages/AddFriend'
import { Components } from './pages/Components'
import { MemberList } from 'Data/DummyData'

export const App = () => {
  const userdata = MemberList[0]
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ログイン画面 */}
          <Route path="/" element={<Login />} />
          {/* 掲示板画面 */}
          <Route
            path="/Home"
            element={<Home icon={userdata.src} username={userdata.name} />}
          />
          {/* フレンド追加画面 */}
          <Route path="/AddFriend" element={<AddFriend />} />
          {/* コンポーネント確認用ページ */}
          <Route path="/components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
