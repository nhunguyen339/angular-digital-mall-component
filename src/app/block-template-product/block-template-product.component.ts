import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo';


@Component({
  selector: 'app-block-template-product',
  templateUrl: './block-template-product.component.html',
  styleUrls: ['./block-template-product.component.css']
})
export class BlockTemplateProductComponent implements OnInit {
  photos : Photo[] = [];

  constructor( private photoService: PhotoService ) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos():void {
    this.photoService.getPhotos()
    .subscribe( photos => this.photos = photos.slice(1,5) );
  }

}
