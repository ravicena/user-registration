import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { reducers } from './reducers/reducers';
import { UserEffects } from './effects/user.effects';
import { UsersService } from './services/users.service';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { UnregisteredComponent } from './unregistered/unregistered.component';
import { AllusersComponent } from './allusers/allusers.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([UserEffects]),
        InputsModule,
        BrowserAnimationsModule,
        GridModule,
        MatTableModule,
        MatTabsModule
    ],
    declarations: [
        AppComponent,
        UserComponent,
        UnregisteredComponent,
        AllusersComponent
    ],
    providers: [
        UsersService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
