import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [ 
            { path: 'ptHeader', loadChildren: 'app/masters/parameter-table-header/parameter-table-header.module#ParameterTableHeaderModule' },
            { path: 'menu-authority', loadChildren: 'app/masters/menu-authority/menu-authority.module#MenuAuthorityModule' },           
            { path: 'menu', loadChildren: 'app/masters/menu/menu.module#MenuModule' },
            { path: 'employees', loadChildren: 'app/masters/employees/employees.module#EmployeesModule' },            
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'authorities', loadChildren: 'app/masters/authorities/authorities.module#AuthoritiesModule' },
            { path: 'ptDetail', loadChildren: 'app/masters/parameter-table-detail/parameter-table-detail.module#ParameterTableDetailModule' },
            { path: 'leaveType', loadChildren: 'app/masters/leave-type/leave-type.module#LeaveTypeModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
