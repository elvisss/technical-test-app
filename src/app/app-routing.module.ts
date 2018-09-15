import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';

const appRoutes: Routes = [
    {
        path        : '',
        component: Part1Component
    },
    {
        path        : 'part2',
        component: Part2Component
    },
    {
        path      : '**',
        redirectTo: ''
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
