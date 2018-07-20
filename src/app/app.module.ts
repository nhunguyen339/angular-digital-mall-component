import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SlideComponent } from './homepage/slide/slide.component';
import { ListItemSupportComponent } from './homepage/list-item-support/list-item-support.component';
import { NewFeatureBestProductComponent } from './homepage/new-feature-best-product/new-feature-best-product.component';
import { ListItemCompanyComponent } from './homepage/list-item-company/list-item-company.component';
import { MoreDetailComponent } from './product-detail/more-detail/more-detail.component';
import { DescriptionComponent } from './product-detail/description/description.component';
import { ReviewComponent } from './product-detail/review/review.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SimilarProductComponent } from './homepage/similar-product/similar-product.component';
import { CategoryComponent } from './category/category.component';
import { FilterProductComponent } from './category/filter-product/filter-product.component';
import { SortWayComponent } from './category/sort-way/sort-way.component';
import { CategoryProductComponent } from './category/category-product/category-product.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BlockTemplateProductComponent } from './block-template-product/block-template-product.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ListProductCartComponent } from './cart/list-product-cart/list-product-cart.component';
import { TotalCartComponent } from './total-cart/total-cart.component';
import { ListItemPolicyComponent } from './list-item-policy/list-item-policy.component';
import { CheckoutProductComponent } from './checkout/checkout-product/checkout-product.component';
import { PersonalInformationComponent } from './checkout/checkout-product/personal-information/personal-information.component';
import { AddressesComponent } from './checkout/checkout-product/addresses/addresses.component';
import { ShippingMethodsComponent } from './checkout/checkout-product/shipping-methods/shipping-methods.component';
import { PaymentReviewComponent } from './checkout/checkout-product/payment-review/payment-review.component';
import { NewCustumerComponent } from './login/new-custumer/new-custumer.component';
import { RegisteredCustumerComponent } from './login/registered-custumer/registered-custumer.component';
import { ContactComponent } from './contact/contact.component';
import { ModalReviewComponent } from './product-detail/review/modal-review/modal-review.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BookService } from './models/book.service';
import { GenreService } from './models/genre.service';
import { BannerService } from './models/banner.service';
import { SearchComponent } from './nav/search/search.component';
import { AddGenreComponent } from './add-genre/add-genre.component';

import { AuthGuard } from './models/login-logout/auth.guard';
import { AuthenticationService } from './models/login-logout/authentication.service';
import { UserService } from './models/login-logout/user.service';
import { JwtInterceptor } from './models/login-logout/jwt.interceptor';
import { LoginStatusService } from './models/login-logout/login-status.service';
import { AppCustomModule } from './app-custom/app-custom.module';
import { ShoppingCartService } from './models/cart/shopping-cart.service';
import { NavListCartComponent } from './nav/nav-list-cart/nav-list-cart.component';
import { OrderService } from './models/cart/order.service';

@NgModule({
  imports: [
    BrowserModule,
    AppBootstrapModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppCustomModule,
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    HomepageComponent,
    SlideComponent,
    ListItemSupportComponent,
    NewFeatureBestProductComponent,
    ListItemCompanyComponent,
    MoreDetailComponent,
    DescriptionComponent,
    ReviewComponent,
    NavComponent,
    FooterComponent,
    SimilarProductComponent,
    CategoryComponent,
    FilterProductComponent,
    SortWayComponent,
    CategoryProductComponent,
    BreadcrumbComponent,
    BlockTemplateProductComponent,
    PaginationComponent,
    CartComponent,
    CheckoutComponent,
    ListProductCartComponent,
    TotalCartComponent,
    ListItemPolicyComponent,
    CheckoutProductComponent,
    PersonalInformationComponent,
    AddressesComponent,
    ShippingMethodsComponent,
    PaymentReviewComponent,
    NewCustumerComponent,
    RegisteredCustumerComponent,
    ContactComponent,
    ModalReviewComponent,
    PageNotFoundComponent,
    SearchComponent,
    AddGenreComponent,
    NavListCartComponent,
  ],
  providers: [
    BookService,
    GenreService,
    BannerService,
    AuthGuard,
    AuthenticationService,
    UserService,
    LoginStatusService,
    ShoppingCartService,
    OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
    // LocalStorageService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
