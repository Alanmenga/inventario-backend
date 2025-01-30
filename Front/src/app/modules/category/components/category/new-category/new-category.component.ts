import { Component, inject, model, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { CategoryService } from "../../../../shared/services/category.service";

export interface DialogData {
    animal: string;
    name: string;
  }

@Component({
    selector: 'new-category',
    templateUrl: 'new-category.component.html',
    standalone: true,
    styleUrl: './new-category.component.css',
    imports: [
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatButtonModule,
      MatDialogTitle,
      MatDialogContent,
      MatDialogActions,
      MatDialogClose,
      MatIcon,
      ReactiveFormsModule
    ],
  })
  export class NewCategoryComponent implements OnInit{
    readonly dialogRef = inject(MatDialogRef<NewCategoryComponent>);
    // readonly data = inject<DialogData>(MAT_DIALOG_DATA);
    // readonly animal = model(this.data.animal);
    public categoryForm! : FormGroup;
    private fb = inject(FormBuilder);
    private categoryService = inject(CategoryService);
    
    ngOnInit(): void {
      this.categoryForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required]
      });
    }

    onSave(): void {
      let data = {
        name: this.categoryForm.get('name')?.value,
        description: this.categoryForm.get('description')?.value
      }

      this.categoryService.saveCategory(data)
          .subscribe( data => {
            console.log(data);
            this.dialogRef.close(1);
          }, (error: any) => {
            this.dialogRef.close(2);
          })
    }
        
    onCancel(): void {
      this.dialogRef.close(3);  
    }
  }