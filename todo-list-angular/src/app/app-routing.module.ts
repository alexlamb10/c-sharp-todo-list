import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { EditItemComponent } from './edit-item/edit-item.component';

const routes: Routes = [{ path: '', component: HomeScreenComponent },{ path: 'edit/:id', component: EditItemComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
