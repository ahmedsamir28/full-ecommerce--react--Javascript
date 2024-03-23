import React from 'react';
import { useParams } from 'react-router-dom';
import ViewProductsDetailsHook from '../../Custom/Products/viewProductsDetailsHook';
import AddToCartHook from '../../Custom/Cart/AddToCartHook';
import { ToastContainer } from 'react-toastify';

const ProductText = () => {
  const { id } = useParams();
  const [item, images, cat, brand] = ViewProductsDetailsHook(id);
  const [colorClick, indexColor, addToCartHandel] = AddToCartHook(id, item)

  return (
    <div className='container flex flex-col items-start justify-center gap-4 py-5 h-96 rounded-lg'>
      <div className='text-sm font-bold capitalize text-zinc-400'> {cat.name} : </div>

      <div>
        <div className='text-sm text-zinc-600'>{item.title}</div>
        <div className='mt-2 text-amber-400'> {item.ratingsAverage}</div>
      </div>

      <div>
        <span className='font-medium capitalize text-zinc-600'> brand :<span className='capitalize text-md text-zinc-400'> {brand.name} </span>  </span>
      </div>

      <div className='flex items-center justify-start gap-2'>
        {
          item.availableColors ? (item.availableColors.map((color, index) => {
            return (
              <div
                key={index}
                onClick={() => colorClick(index, color)}
                style={{ backgroundColor: color, border: indexColor === index ? '3px solid black' : 'none' }}
                className='w-6 h-6 border rounded-full'>
              </div>
            )
          })) : null
        }

      </div>

      <div className='font-bold capitalize text-zinc-00'>
        Description :
      </div>

      <div className="text-sm text-zinc-600">
        {item.description}
      </div>

      <div className="flex items-center justify-start gap-3 mt-2">
        <div className="px-5 py-2 border-2 rounded-md bg-zinc-50">$ {item.price} </div>
        <div onClick={addToCartHandel} className="px-5 py-2 capitalize rounded-md cursor-pointer  hover:bg-amber-400 bg-base"> add to cart</div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductText;
