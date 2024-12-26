import { Component, effect, inject } from '@angular/core';
import { materialImports } from "../../../shared/material.config";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../../shared/services/category.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [...materialImports, FormsModule, ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  private categoryService = inject(CategoryService);
  categories: any[] = [];
  displayedColumns: string[] = ['id','name','description','actions'];
  dataSource = new MatTableDataSource<CategoryElement>();

  constructor() {
    this.getCategories();
  }

  getCategories() : void {
    this.categoryService.getCategories()
        .subscribe( (data: any) => {
          this.processCategoriesResponse(data);
        }), (error: any) => {
          console.log("error: ", error);
        }

  }
  
  processCategoriesResponse(resp:any) {
    const dataCategory: CategoryElement[] = [];
    if(resp.metadata[0].code == '00'){
      let listCategory = resp.categoryResponse.category;
      listCategory.forEach((element: CategoryElement) => {
        dataCategory.push(element);
      });
      this.dataSource = new MatTableDataSource<CategoryElement>(dataCategory);
    }
  }
}

export interface CategoryElement {
  description: string;
  id: number;
  name: string;
}
