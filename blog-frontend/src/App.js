import { Route, Routes } from '../node_modules/react-router-dom/index';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PostListPage />} path="/@:username" exact />
        <Route element={<PostListPage />} path="/" exact />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<WritePage />} path="/wrtie" />
        <Route element={<PostPage />} path="/@:username/:postId" />
      </Routes>
    </>
  );
};

export default App;
