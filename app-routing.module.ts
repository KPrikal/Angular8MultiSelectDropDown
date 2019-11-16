
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModelPopUpComponent } from './model-pop-up/model-pop-up.component';


const routes: Routes = [
                  {path:'', redirectTo:'AppComponent', pathMatch:'full'},
                  {path:'appCompo', component: AppComponent},
                  {path:'compModelPopup', component: ModelPopUpComponent}
                  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
