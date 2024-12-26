import './homepage.scss';
import Bar from '../../components/searchbar/bar';

function Homepage() {
  return (
    <div className="homepage">
      
      <div className="txtContainer">
        <div className="wrapper">
          <h1 className='topic'>Discover a place you'll love to live</h1>
          <p className='desc'>Unlock the full potential of your real estate investments with our full suite of services. From dedicated property management to strategic asset optimization, our team of experts build innovative, tailored plans that streamline property operations, enhance tenant satisfaction, and increase overall returns.</p>
          <Bar />
        </div>
      
      </div>
      <div className="imgContainer">
        <img src="/main.png" alt="" />
      </div>
      
    </div>
  );
}
export default Homepage;