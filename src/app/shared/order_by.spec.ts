import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { OrderByPipe } from './order_by.pipe';

describe('TitleCasePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  let pipe = new OrderByPipe();
  let mock = JSON.parse(`[
    {
      "id":627907,
      "name":"Homyel",
      "coord":{"lat":52.4345,"lon":30.9754},
      "main":{"temp":280.15,
              "pressure":1006,
              "humidity":75,
              "temp_min":280.15,
              "temp_max":280.15},
      "dt":1488794400,
      "wind":{"speed":6,
              "deg":120,
              "gust":9},
      "sys":{"country":""},
      "rain":null,
      "snow":null,
      "clouds":{"all":0},
      "weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01d"}]
    },
    {
      "id":619762,
      "name":"Yakubovka",
      "coord":{"lat":52.4167,"lon":31.0293},
      "main":{"temp":280.15,
              "pressure":1006,
              "humidity":75,
              "temp_min":280.15,
              "temp_max":280.15},
      "dt":1488794400,
      "wind":{"speed":6,
              "deg":120,
              "gust":9},
      "sys":{"country":""},
      "rain":null,
      "snow":null,
      "clouds":{"all":0},
      "weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01d"}]}]`);

  it('transforms array', () => {
    expect(pipe.transform(mock, 'id')).toBe(mock);
  });
});
