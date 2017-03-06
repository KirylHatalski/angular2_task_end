import { NgModule } from '@angular/core';

import { TableRowModule } from './tablerow/tablerow.module';
import { TableComponent } from './table.component';
import { SharedModule } from '../../shared/shared.module';
import { PositionCheckModule } from './position_check/position_check.module';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../../reducers';


@NgModule({
  imports: [
    TableRowModule,
    SharedModule,
    PositionCheckModule,
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    StoreModule.provideStore(reducer)
  ],
  declarations: [TableComponent],
  providers: [],
  exports: [
    // TableRowModule
    TableComponent
  ]
})
export class TableModule { }
