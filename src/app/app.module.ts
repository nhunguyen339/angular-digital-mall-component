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


@NgModule({
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

  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
