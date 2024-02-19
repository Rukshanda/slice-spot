import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state)=> state.user.username)
  return (
    <div className="my-10 px-4 text-center font-serif sm:my-16">
      <h1 className="mb-8  text-xl font-semibold tracking-wide text-cstdarkred	md:text-3xl">
        Experience Slice Spot.
        <br />
        <span className="tracking-wide text-cstdefaultred	">
          Where Every Slice Tells a Tale!
        </span>
      </h1>

     {username === '' ? <CreateUser /> : <Button to='/menu' type='primary'>Back to menu {username}</Button>}
    </div>
  );
}

export default Home;
