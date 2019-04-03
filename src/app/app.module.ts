import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//TODO: import formularios reactivos
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OrdersComponent } from "./orders/orders.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrdersService } from "./shared/orders.service";

//environment import
import { environment } from 'src/environments/environment';

//angularfire imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent, OrdersComponent, OrderListComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,    
    FormsModule,
    AppRoutingModule,
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
