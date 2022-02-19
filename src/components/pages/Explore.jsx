import { Link } from 'react-router-dom';
import recentCategoryImg from '../../assets/jpg/rentCategoryImage.jpg';
import sellCategoryImg from '../../assets/jpg/sellCategoryImage.jpg';
import Slider from '../Slider';

const Explore = () => {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>
      <main>
        <Slider />

        <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img
              src={recentCategoryImg}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for Rent</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImg}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for Sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
