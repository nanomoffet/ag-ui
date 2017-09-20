import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { BrowseSearchComponent } from './browse-search/browse-search.component';
import { ReadingLevelSearchComponent } from './reading-level-search/reading-level-search.component';
import { KidsCatalogSearchComponent } from './kids-catalog-search/kids-catalog-search.component';
import { ResultsComponent } from './results/results.component';

const searchRoutes: Routes = [
  {
    path: '', children: [
    { path: '', redirectTo: 'basic', pathMatch: 'full' },
    { path: 'basic', component: SearchComponent},
    { path: 'results/:display/:term/:page/:length/:sort/:guid', component: ResultsComponent },
    { path: 'advanced', component: AdvancedSearchComponent },
    { path: 'browse', component: BrowseSearchComponent },
    { path: 'readinglevel', component: ReadingLevelSearchComponent },
    { path: 'kidscatalog', component: KidsCatalogSearchComponent }
  ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule {
}
