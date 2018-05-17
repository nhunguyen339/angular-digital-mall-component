import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SlideComponent } from './homepage/slide/slide.component';
import { ListItemSupportComponent } from './homepage/list-item-support/list-item-support.component';
import { NewFeatureBestProductComponent } from './homepage/new-feature-best-product/new-feature-best-product.component';
import { ListItemCompanyComponent } from './homepage/list-item-company/list-item-company.component';
import { BreadcrumbComponent } from './product-detail/breadcrumb/breadcrumb.component';
import { MoreDetailComponent } from './product-detail/more-detail/more-detail.component';
import { DescriptionComponent } from './product-detail/description/description.component';
import { ReviewComponent } from './product-detail/review/review.component';
import { ProductRelativeComponent } from './product-detail/product-relative/product-relative.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BlockTemplateProductComponent } from './homepage/block-template-product/block-template-product.component';
import { SimilarProductComponent } from './homepage/similar-product/similar-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    HomepageComponent,
    SlideComponent,
    ListItemSupportComponent,
    NewFeatureBestProductComponent,
    ListItemCompanyComponent,
    BreadcrumbComponent,
    MoreDetailComponent,
    DescriptionComponent,
    ReviewComponent,
    ProductRelativeComponent,
    NavComponent,
    FooterComponent,
    BlockTemplateProductComponent,
    SimilarProductComponent,

  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
