import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { GalleryComponent } from './gallery/gallery.component';
// import{FormComponent} from './form/form.component';

const routes: Routes = [
    

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    { path: '/form', component: FormComponent },
    { path: '/gallery', component: GalleryComponent },

];
NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}