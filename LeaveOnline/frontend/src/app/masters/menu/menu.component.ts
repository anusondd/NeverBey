import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from "@angular/forms";
import { TreeNode,Message, ConfirmationService, ConfirmDialogModule, LazyLoadEvent ,InputSwitchModule,ToggleButtonModule
} from "primeng/primeng";
import { MenuService } from "app/_services/menu.service";

import { SelectItem } from "primeng/components/common/api";
import { Menu } from "app/_models/Menu";




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers:[MenuService,ConfirmationService]
})
export class MenuComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuService , 
    private confirmationService: ConfirmationService
  ) { }

  menuform: FormGroup;
  msgs:Message[] = [];
  isModify: boolean = false;
  btnLabel: string = "Save";
  menu: Menu[];

  menu_name =[];
  
  totalRecords: number;
  stacked: boolean;
  selectedmenu: Menu[];
  activeFlag:boolean = false;

  display: boolean = false;


  files: TreeNode[];
  selectedFiles: TreeNode[];

  
  


  ngOnInit() {
      this.menuform = this.formBuilder.group({
      'id'          : new FormControl(''),
      'parent'      : new FormControl(new Menu()),
      'name'        : new FormControl('Admin',Validators.required),
      'order'       : new FormControl('1',Validators.required),
      'link'        : new FormControl('#',Validators.required),
      'picturePath' : new FormControl('fa fa-plus',Validators.required), 
      'menuIcon'    : new FormControl('fa fa-plus',Validators.required),       
      'activeFlag'  : new FormControl(false),
      
      },
      //{validator: this.CustomValidate},
    );

    
  }

  

  /* CustomValidate(c: AbstractControl): { invalid: boolean } {
    
    if (c.get('name').value == c.get('parent').value.name) {
        return {invalid: true};
    }
  } */

  

  

  nodeSelect(event){
    
    //console.log(event);   
    let parent = event.node.data;
    this.menuform.controls['parent'].setValue(parent);
    this.display = false; 

  }

  



  showDialog() {
    this.display = true;
    this.menuService.loadTreemenu()
    .then(files =>this.files= files);
    console.log(this.files);
    
}

  

  onSubmit(value: Menu) {
    console.log(value);
    this.msgs = [];
    // this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
     this.menuService.saveOrUpdate(value, this.isModify).then(result => {
      console.log(result);
      this.onResetForm();
      this.msgs.push(result);
      this.isModify = false;
      this.btnLabel = "Save";
      this.onReload();
    }),
      errors => {
        let error = errors.json();
        console.log(error);
        this.msgs.push(error);
        this.onReload();
      } 
  }

  onResetForm() {
    this.menuform.reset({});
  }

  onLoadMenu() {
    this.menuService.loadMenu().then(result => {
      this.menu = result;
      console.log(result);
    })
  }

  
  
  loadMenuLazy(event: LazyLoadEvent){
    //console.log(event);
    this.menuService.loadMenulLazy(event).then(result => {
      //this.menu = result;
      this.menu = result.listOfData;
      this.totalRecords = result.totalRecords;
    }


    );
    
  }
 
  selectMenu(menu:Menu) {
    //(<FormGroup>this.menuform).reset(value);
    console.log("menu ",menu);
     (<FormGroup>this.menuform).reset(menu, {onlySelf: true});
    
    this.isModify = true;
    this.btnLabel = "Update";
    
  }

  onRemove() {
    let jsonStr = JSON.stringify(this.selectedmenu);
    console.log(jsonStr);

    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.menuService.onRemovemenu(this.selectedmenu)
          .then(
          result => {
            console.log(result);
            this.onResetForm();
            this.selectedmenu = [];
            this.msgs.push(result);
            this.onReload();
          },
          errors => {
            let error = errors.json();
            //console.log(error);
            this.msgs.push(error)
          }
          );
      },
      reject: () => {
        //console.log("Reject");
      }
    });
  }

  cancleUpdate() {
    this.onResetForm();
    this.isModify = false;
    this.btnLabel = "Save";
  }


  onReload() {
    this.menuService.loadMenu().then(result => {
      this.menu = result;
      console.log(result);
    })

    this.ngOnInit();
  }



}
