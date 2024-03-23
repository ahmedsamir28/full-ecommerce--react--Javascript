import React from 'react';
import ReactStars from "react-rating-stars-component";
import { useEffect } from 'react';
import { Input, Ripple, initTE } from "tw-elements";
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import AddRateHook from '../../Custom/Review/AddRateHook';


const RatePost = () => {
  const { id } = useParams();
  const [OnChangeRateText, OnChangeRateValue, rateText, rateValue, user, onSubmit] = AddRateHook(id)

  let name = ""
  if (user) {
    name = user.name
  }

  useEffect(() => {
    initTE({ Input, Ripple });
  }, []);

  const setting = {
    size: 15,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
      OnChangeRateValue(newValue);
    }
  };
  return (
    <div className='container'>
      <div className="">
        <div className="flex justify-start items-center gap-2 mt-4">
          <div className="capitalize text-md font-bold text-zinc-600">{name}</div>
          <ReactStars {...setting} />
        </div>
        <div>
          <div className="relative mb-3 mt-5" data-te-input-wrapper-init>
            <textarea
              value={rateText}
              onChange={OnChangeRateText}
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea1"
              rows="2"
              cols="20"
              placeholder="Write your comment"
            ></textarea>
            <label
              htmlFor="exampleFormControlTextarea1"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Example textarea
            </label>
          </div>
          <div className="flex justify-end ">
            <div onClick={onSubmit}
              className="capitalize text-md font-medium py-3 px-4 rounded-lg bg-base cursor-pointer hover:bg-amber-400 "
            >add comment</div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RatePost;

