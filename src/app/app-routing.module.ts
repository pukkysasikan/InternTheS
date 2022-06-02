import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'select-car',
    loadChildren: () => import('./select-car/select-car.module').then( m => m.SelectCarPageModule)
  },
  {
    path: 'detail-car',
    loadChildren: () => import('./detail-car/detail-car.module').then( m => m.DetailCarPageModule)
  },
  {
    path: 'cart-edit',
    loadChildren: () => import('./cart-edit/cart-edit.module').then( m => m.CartEditPageModule)
  },
  {
    path: 'cart-checkout',
    loadChildren: () => import('./cart-checkout/cart-checkout.module').then( m => m.CartCheckoutPageModule)
  },
  {
    path: 'cart-dialog',
    loadChildren: () => import('./cart-dialog/cart-dialog.module').then( m => m.CartDialogPageModule)
  },
  {
    path: 'car-promotion',
    loadChildren: () => import('./car-promotion/car-promotion.module').then( m => m.CarPromotionPageModule)
  },
  {
    path: 'my-booking',
    loadChildren: () => import('./my-booking/my-booking.module').then( m => m.MyBookingPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
