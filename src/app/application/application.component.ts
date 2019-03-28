import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Menu } from '../model/Menu';
import { Option } from '../model/Option';
import {CategoryArguments} from '../model/CategoryArguments';
import { Globals } from '../globals/Globals';
import { Arguments } from '../model/Arguments';
import { MatDialog} from '@angular/material';
import { MsfDynamicTableVariablesComponent } from '../msf-dynamic-table-variables/msf-dynamic-table-variables.component';
import { MsfContainerComponent } from '../msf-container/msf-container.component';
//import { MenuService } from '../services/menu.service';
import { ApplicationService } from '../services/application.service';
import { ExcelService } from '../services/excel.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  
  animal: string;
  name: string;

  optionSelected: any = {};

  categorySelected: any = {};

  categoryArgumentSelected: any = {};

  menu: Menu;
  menu_nav: any[] = [];
  status: boolean;
  ELEMENT_DATA: any[];
  //displayedColumns: string[] = [];
  variables;

  @ViewChild('msfContainerRef')
  msfContainerRef: MsfContainerComponent;

  @ViewChild('TABLE') table: ElementRef;

  constructor(public dialog: MatDialog, 
    public globals: Globals, /*private service: MenuService,*/ 
    private appService: ApplicationService, 
    private excelService: ExcelService,
    private UserService: UserService,
    private router: Router) {
    this.status = true;    
  }

  ngOnInit() {
      this.UserService.validarUsuario2(this);   
  }
  // getMenuData(): void {
  //   this.appService.loadMenuOptions(this, this.handlerGetSuccessMenuData, this.handlerGetErrorMenuData);
  //   this.optionSelected = {};
  // }

  // getCategoryArguments() {
  //   this.appService.loadCategoryArguments(this, this.handlerSuccessCategoryArguments, this.handlerErrorCategoryArguments);
  // }

  // handlerSuccessCategoryArguments(_this, result) {
  //   _this.categories = result;
  //   if (_this.optionSelected.id) {
  //     _this.getOptionCategoryArguments(_this.optionSelected);
  //   }
  // }

  // handlerErrorCategoryArguments(_this, result) {
  //   console.log(result);
  // }

  // handlerGetSuccessMenuData(_this, data) {
  //   _this.menu = data;
  //   _this.globals.isLoading = false;
  // }

  // handlerGetErrorMenuData(_this, result) {
  //   console.log(result);
  //   _this.globals.isLoading = false;
  // }

  /*getMenu(){
    this.service.getMenu(this,this.handlerSuccess,this.handlerError);
  }

  handlerSuccess(_this,data){
    _this.menu = data;
    _this.globals.isLoading = false; 
  }

  handlerError(_this,result){
    console.log(result);
    _this.globals.isLoading = false;  
  }*/

  toogle(){
    this.status  = !this.status ;
    if(!this.status && this.globals.currentAgts){
      this.globals.currentAgts.open=false;
    }if(this.status && this.globals.currentAgts){
      this.globals.currentAgts.open=true;
    }
  }

  search(){
    this.globals.isLoading=true;
    if(!this.globals.showMenu && this.globals.showCategoryArguments){
      this.globals.showTabs=true;
      this.globals.showCategoryArguments=false;
      this.globals.showcurrentAgts=false;
      setTimeout(() => {
        this.search2();
      }, 3000);   
    }     
  }

  search2(){
    this.globals.moreResults = false;
    this.globals.query = true;
    this.globals.map = false; /*kp 27022019*/
    if(!this.globals.showMenu && this.globals.showCategoryArguments){
      this.globals.showTabs=true;
      this.globals.showCategoryArguments=false;
      this.globals.showcurrentAgts=false;
    } 
    if(this.globals.currentOption.tabType === 'map'){
      this.globals.map = true;
      this.msfContainerRef.msfMapRef.getTrackingDataSource();       
    }else if(this.globals.currentOption.tabType === 'usageStatistics'){
      this.msfContainerRef.msfTableRef.getDataUsageStatistics();
    }else{ 
      this.msfContainerRef.msfTableRef.getData(false); 
    }        
  }

  moreResults(){
    if(this.globals.moreResultsBtn){
      this.globals.moreResults = false;
      this.globals.query = true;
      // if(this.globals.currentOption.metaData==2){
      //   this.globals.mapsc=true;
        
      // }else{
      //   this.globals.mapsc=false;
      // }
     // this.globals.tab = true;
      
      this.globals.isLoading = true;
  
      setTimeout(() => {
        this.moreResults2();
    }, 3000);
    }
  }

  
  moreResults2(){
    if(this.globals.currentOption.tabType === 'map'){
      this.globals.map = true;
      this.msfContainerRef.msfMapRef.getTrackingDataSource();
    }else if(this.globals.currentOption.tabType === 'usageStatistics'){
      this.msfContainerRef.msfTableRef.getDataUsageStatistics();
    }else{
      this.msfContainerRef.msfTableRef.getData(true);
    }
  }


  disabled(){
    let option:any = this.globals.currentOption;
    let disabled = false;
    if(option && option.menuOptionArgumentsAdmin){            
      for( let menuOptionArguments of option.menuOptionArgumentsAdmin){
          if(menuOptionArguments.categoryArgumentsId){   
            // if( menuOptionArguments.categoryArgumentsId){            
              // for( let i = 0; i < menuOptionArguments.categoryArgumentsId.length;i++){
                let category: CategoryArguments = menuOptionArguments.categoryArgumentsId;
                if(category && category.arguments){
                  for( let j = 0; j < category.arguments.length;j++){
                    let argument: Arguments = category.arguments[j];
                    if(argument.required){
                      if(argument.value1 == null || (argument.name2 && argument.value2 == null)){
                        return true;
                      }       
                    }
                  }
                }        
              // }   
            // }   
          }
        }
      }
    
    return disabled;
  }


  openChart(){
    this.globals.chart = !this.globals.chart;
    this.globals.selectedIndex = 3;
  }

  dynamicTable(){
    this.openDialog();
  }

  openDialog(): void {
    this.globals.generateDynamicTable = true;
    const dialogRef = this.dialog.open(MsfDynamicTableVariablesComponent, {
      width: '600px',
      data: {metadata:this.msfContainerRef.msfTableRef.metadata, variables: this.variables}      
    });

    const sub = dialogRef.componentInstance.dynamicTableOpen.subscribe(() => {
      this.msfContainerRef.msfDynamicTableRef.loadData();
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  showMenu(){
    if(!this.globals.showMenu){
      this.globals.showMenu = true;
      this.globals.showCategoryArguments= false;
      this.globals.showIntro = false;
    }else if(this.globals.showMenu && !this.globals.showIntro){
      this.globals.showMenu = false;
      this.globals.showCategoryArguments= false;
      this.globals.showIntro = true;
    }

  }

  backMenu(){
    if(!this.globals.showMenu && this.globals.showCategoryArguments){
      this.globals.showMenu = true;
      this.globals.showIntro = false;
      this.globals.showCategoryArguments = false;
      this.globals.showTabs=false;
      this.globals.dataSource = false;
    }
    else if(!this.globals.showMenu && this.globals.showTabs){
      this.globals.showMenu = false;
      this.globals.showIntro = false;
      this.globals.showCategoryArguments = true;
      this.globals.showTabs=false;
      this.globals.dataSource = false;
      
    }
  }

  exportToExcel():void {
    this.excelService.exportAsExcelFile(this.msfContainerRef.msfTableRef.table, this.globals.currentOption.label);
  }

  goTo(){
    this.router.navigate(['/welcome']);
  }

  closeTab(tab : any){
    if(tab==1){
      this.globals.query = false;
    }else if(tab==2){
     // this.globals.tab = false;
    }else if(tab==3){
      this.globals.generateDynamicTable = false;
    }else if(tab==4){
      this.globals.chart = false;
    }else if(tab==5){
      this.globals.map = false;
    }
  }

  
  logOut(){
    this.appService.confirmationDialog (this, "Are you sure you want to Log Out?",
      function (_this)
      {
        _this.globals.isLoading = false;
        window.localStorage.removeItem("token");
        _this.router.navigate(['']);
      });
  }
  
}
