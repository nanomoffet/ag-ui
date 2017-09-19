import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {SearchRoutingModule} from './search-routing.module';
import { SearchComponent } from './search.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { BrowseSearchComponent } from './browse-search/browse-search.component';
import { ReadingLevelSearchComponent } from './reading-level-search/reading-level-search.component';
import { KidsCatalogSearchComponent } from './kids-catalog-search/kids-catalog-search.component';

@NgModule({
  imports: [
    SharedModule,
    SearchRoutingModule
  ],
  declarations: [SearchComponent, AdvancedSearchComponent, BrowseSearchComponent, ReadingLevelSearchComponent, KidsCatalogSearchComponent]
})
export class SearchModule { }
