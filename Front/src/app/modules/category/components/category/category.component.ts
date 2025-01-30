import { Component, effect, inject, model, signal } from '@angular/core';
import { materialImports } from "../../../shared/material.config";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../../shared/services/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { NewCategoryComponent } from './new-category/new-category.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [...materialImports, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  private categoryService = inject(CategoryService);
  private snackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);
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

  openCategoryDialog() {
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result == 1) {
        this.openSnackBar("Categoria Agregada", "Exitosa");
        this.getCategories();
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al guardar categoria", "Error");
      }
    });
  }
  
  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}

export interface CategoryElement {
  description: string;
  id: number;
  name: string;
}
