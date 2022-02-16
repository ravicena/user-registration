import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   template: `
<mat-tab-group>
  <mat-tab style="color:red" label="Registered Users"> <app-user></app-user> </mat-tab>
  <mat-tab label="Unregistered Users"> <app-unregistered></app-unregistered> </mat-tab>
  <mat-tab label="All Project Memberships"><app-allusers></app-allusers> </mat-tab>
</mat-tab-group>
     `
})
export class AppComponent {
} 