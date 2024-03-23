import React from 'react'
// import rate from '../../images/rate.png'
import RateItem from './RateItem';
import RatePost from './RatePost';
import Pagination from '../../Utils/Pagination';
import { useParams } from 'react-router-dom';
import ViewAllReviewHook from '../../Custom/Review/ViewAllReviewHook';

const RateContainer = ({ rateAvg, rateQty }) => {
    const { id } = useParams()
    const [allReview, onPress] = ViewAllReviewHook(id)

    return (
        <div className='container border py-3'>
            <div className='flex justify-start gap-2 items-center'>
                <div className="text-xl font-bold text-zinc-600">Ratings</div>
                <div className="text-amber-400 text-lg"><i class="fa-solid fa-star"></i></div>
                <div className="text-amber-400">{rateAvg}</div>
                <div className="text-sm text-zinc-500">({`Rating ${rateQty}`})</div>
            </div>
            <RatePost />

            <div className='my-8'>
                {
                allReview.data ? (allReview.data.map((review, index) => {
                    return (<RateItem key={index} review={review} />)
                })) : <h6>There are no reviews now</h6>
            }

            </div>
            {
                allReview.paginationResult && allReview.paginationResult.numberOfPages >= 2 ? (<Pagination pageCount={allReview.paginationResult ? allReview.paginationResult.numberOfPages : 0} onPress={onPress} />) : null
            }
        </div>
    )
}

export default RateContainer
