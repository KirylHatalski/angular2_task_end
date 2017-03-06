import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { DataStorageService } from './services/data_storage.service';
import { PositionService } from './services/position.service';
import { MarkerService } from './services/marker.service';

import { TemperaturePipe } from './temperature.pipe';
import { OrderByPipe } from './order_by.pipe';
import { HotnessDirective } from './hotness.directive';
import { IconDirective } from './icon.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [
    TemperaturePipe,
    OrderByPipe,
    IconDirective,
    HotnessDirective
  ],
  providers: [
    DataStorageService,
    PositionService,
    MarkerService
  ],
  exports:      [
    TemperaturePipe,
    OrderByPipe,
    IconDirective,
    HotnessDirective,
    CommonModule
                ]
})
export class SharedModule { }
