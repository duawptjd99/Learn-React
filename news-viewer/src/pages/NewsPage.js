import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
  //카테고리 미선택시 all로 디폴트
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
