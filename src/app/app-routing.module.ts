import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
 import { GalleryComponent } from './gallery/gallery.component';
//  import{FormComponent} from './form/form.component';

const routes: Routes = [
    { path: 'form', component: FormComponent },
   
    
    
    { path: 'gallery', component: GalleryComponent },
    { path: '', redirectTo:'/form', pathMatch: 'full' } ,

];
@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}