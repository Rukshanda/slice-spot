import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
  const totalCartQuntity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice)

  if(!totalCartQuntity) return null;
  return (
    <div relative>
   <div className=" fixed bottom-0 left-0 right-0 flex items-center justify-between bg-cstdarkest px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuntity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
    </div>
 
  );
}

export default CartOverview;
