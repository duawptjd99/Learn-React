import { Route } from '../node_modules/react-router-dom/index';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
