import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../model/book.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() livro: BookModel
  constructor() { }

  ngOnInit(): void {
  }

}
