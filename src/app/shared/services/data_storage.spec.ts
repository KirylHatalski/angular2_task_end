import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { DataStorageService } from './data_storage.service';

describe('data-stor service', () => {
  let service: DataStorageService,
      mock = {
        one: 1
      }

      beforeEach(() => { service = new DataStorageService(); });

  it('copy must be copy', () => {
    expect(service.deepObjectCopy(mock)).toEqual(mock);
  });
});
