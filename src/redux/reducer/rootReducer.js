import { combineReducers } from "redux";
import CategoryReducer from "./categoryReducer";
import BrandsReducer from "./brandsReducer";
import SubCategoryReducer from "./subCategoryReducer";
import productsReducer from "./productsReducer";
import AuthReducer from "./authReducer";
import ReviewReducer from "./reviewReducer";
import WishListReducer from "./wishListReducer";
import couponReducer from "./couponReducer";
import userAddressesReducer from "./userAddressesReducer";
import CartReducer from "./cartReducer";
import CheckoutReducer from "./checkoutReducer";
import OrderReducer from "./orderReducer";

// import { combineReducers } from 'redux'
export default combineReducers({
    allCategory:CategoryReducer,
    allBrands:BrandsReducer,
    subCategory: SubCategoryReducer,
    allProducts: productsReducer,
    authReducer: AuthReducer,
    reviewReducer: ReviewReducer,
    addToWishListReducer: WishListReducer,
    couponReducer: couponReducer,
    userAddressesReducer: userAddressesReducer,
    cartReducer: CartReducer,
    checkoutReducer: CheckoutReducer,
    orderReducer:OrderReducer
})
