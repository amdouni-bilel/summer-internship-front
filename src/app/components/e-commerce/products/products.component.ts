import { Component, OnInit } from '@angular/core';
import { Categories, Colors, Types } from 'src/app/shared/data/e-commerce/products';
import { productDataBase } from 'src/app/shared/data/e-commerce/productsData';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productData = productDataBase;
  categoryData = Categories;
  colorData = Colors;
  typesData = Types;

  constructor() { }

  ngOnInit(): void {
  }

}
