import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { GetApiComponent } from './api-integration/get-api/get-api.component';
import { PostApiComponent } from './api-integration/post-api/post-api.component';

export const routes: Routes = [
    {
        path:'data-binding',
        component: DataBindingComponent
    },
    {
        path:'directives',
        component:DirectivesComponent
    },
    {
        path:'pipes',
        component:PipesComponent
    },
    {
        path:'template-forms',
        component:TemplateFormsComponent
    },
    {
        path:'reactive-forms',
        component:ReactiveFormsComponent
    },
    {
        path:'get-api',
        component:GetApiComponent
    },
    {
        path:'post-api',
        component:PostApiComponent
    }
];
