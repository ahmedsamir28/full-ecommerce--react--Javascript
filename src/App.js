import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import BrandsPage from "./Pages/Brand/BrandsPage";
import CategoriesPages from "./Pages/Category/CategoriesPages";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from "./Pages/Products/shopProductsPage";
import CartPage from "./Pages/Cart/CartPage";
import PayMethoudPage from "./Pages/Checkout/PayMethoudPage";
import AdminProductsPage from "./Pages/Admin/AdminProductsPage";
import AdminOrdersPage from "./Pages/Admin/AdminOrdersPage";
import AdminOrdersDetailsPage from "./Pages/Admin/AdminOrdersDetailsPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import AdminBrandPage from "./Pages/Admin/AdminBrandPage";
import AdminCategoryPage from "./Pages/Admin/AdminCategoryPage";
import AdminSubCategoryPage from "./Pages/Admin/AdminSubCategoryPage";
import AdminAddProductsPage from "./Pages/Admin/AdminAddProductsPage";
import UserOrdersPage from "./Pages/User/UserOrdersPage";
import FavoriteProductsPage from "./Pages/User/FavoriteProductsPage";
import UserAddressesPage from "./Pages/User/UserAddressesPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminEditProductsPage from "./Pages/Admin/AdminEditProductsPage";
import ForgetPasswordPage from "./Pages/Auth/ForgetPasswordPage";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage";
import VerifyPasswordPage from "./Pages/Auth/VerifyPasswordPage";
import AdminAddCouponPage from "./Pages/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./Pages/Admin/AdminEditCouponPage";
import ProtectedRoute from "./Utils/ProtectedRoute";
import ProtectedRouteHook from "./Custom/Auth/ProtectedRouteHook";
import ProductsByCategory from "./Pages/Products/ProductsByCategory";
import ProductsByBrand from "./Pages/Products/ProductsByBrand";


function App() {
  const [isUser, isAdmin, userData] = ProtectedRouteHook()

  return (
    <>
      <Navbar />

      <BrowserRouter>

        <Routes>

          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/categories" element={<CategoriesPages />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route element={<ProtectedRoute auth={isAdmin} />}>

            <Route path="/admin/products" element={<AdminProductsPage />} />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route path="/admin/orders/:id" element={<AdminOrdersDetailsPage />} />
            <Route path="/admin/addbrand" element={<AdminBrandPage />} />
            <Route path="/admin/addcategory" element={<AdminCategoryPage />} />
            <Route path="/admin/addsubcategory" element={<AdminSubCategoryPage />} />
            <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
            <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage />} />
            <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
            <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage />} />

          </Route>

          <Route element={<ProtectedRoute auth={isUser} />}>

            <Route path="/user/allorders" element={<UserOrdersPage />} />
            <Route path="/user/favoriteproducts" element={<FavoriteProductsPage />} />
            <Route path="/user/addresses" element={<UserAddressesPage />} />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route path="/user/edit-address/:id" element={<UserEditAddressPage />} />
            <Route path="/user/profile" element={<UserProfilePage />} />

          </Route>

          <Route path="/user/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
          <Route path="/user/reset-password" element={<ResetPasswordPage />} />


          <Route path="/order/paymethoud" element={
            <ProtectedRoute auth={isUser}>
              <PayMethoudPage />
            </ProtectedRoute>

          } />

          <Route path="/products/category/:id" element={<ProductsByCategory/>} />
          <Route path="/products/brand/:id" element={<ProductsByBrand/>} />
        </Routes>

      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
