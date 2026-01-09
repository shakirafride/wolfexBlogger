import React from 'react';
import { BrowserRouter, Switch, Route, } from "react-router-dom";

import Homepage from '../HomePage/HomePage'
import HeroBlogSingle from '../HeroBlogSingle/HeroBlogSingle';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import LifeStylePage from '../LifeStylePage/LifeStylePage'
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import ForgotPassword from '../ForgotPassword';
import BreakingSingle from '../BreakingSingle/BreakingSingle';
import HighlightSingle from '../HighlightSingle/HighlightSingle';
import SponsoredSingle from '../SponsoredSingle/SponsoredSingle';
import FeaturesSingle from '../FeaturesSingle/FeaturesSingle';
import VideoNewsSingle from '../VideoNewsSingle/VideoNewsSingle';
import FoodBlogPage from '../FoodBlogPage/FoodBlogPage';
import BusinessBlogPage from '../BusinessBlogPage/BusinessBlogPage';
import TravelBlogPage from '../TravelBlogPage/TravelBlogPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/hero-blog-single/:slug" component={HeroBlogSingle} />
          <Route path="/breaking-single/:slug" component={BreakingSingle} />
          <Route path="/highlight-single/:slug" component={HighlightSingle} />
          <Route path="/sponsor-single/:slug" component={SponsoredSingle} />
          <Route path="/features-single/:slug" component={FeaturesSingle} />
          <Route path="/video-single/:slug" component={VideoNewsSingle} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/blog-single/:slug' component={BlogDetails} />
          <Route path='/blog-left-sidebar' component={BlogPageLeft} />
          <Route path='/blog-fullwidth' component={BlogPageFullwidth} />
          <Route path='/blog-single-left-sidebar/:slug' component={BlogDetailsLeftSiide} />
          <Route path='/blog-single-fullwidth/:slug' component={BlogDetailsFull} />
          <Route path='/lifestyle' component={LifeStylePage} />
          <Route path='/foods' component={FoodBlogPage} />
          <Route path='/business' component={BusinessBlogPage} />
          <Route path='/travels' component={TravelBlogPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path='/product-single/:id' component={ProductSinglePage} />
          <Route path='/cart' component={CartPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route path='/order_received' component={OrderRecived} />
          <Route path='/404' component={ErrorPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={SignUpPage} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
