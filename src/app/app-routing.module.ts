import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
// Routing
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotPageFoundComponent }
];

@NgModule({
  imports: [ 
    AuthRoutingModule,
    PagesRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
