'use strict';

console.log('Enter indoor.js');


//var datafolder = 'sensorlogs_testdata';
var datafolder = 'sensorlogs';

MG._hooks = {};

// Temp and Humidity
d3.json(datafolder + '/th.json', function (data) {
  $('#tempHumidity img').remove();
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++)
      data[i][j].at = new Date(data[i][j].at);
  }

  MG.data_graphic({
    data: data,
    full_width: true,
    right: 0,
    european_clock: true,
    missing_is_hidden: true,
    aggregate_rollover: true,
    x_accessor: 'at',
    y_accessor: 'value',
    target: '#tempHumidity',
    legend: ['Temp (C)', 'Relative Humidity (%)'],
    legend_target: '.thlegend'

  });
});

// Temp and Humidity Room
d3.json(datafolder + '/throom.json', function (data) {
  $('#tempHumidityRoom img').remove();
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++)
      data[i][j].at = new Date(data[i][j].at);
  }

  MG.data_graphic({
    data: data,
    full_width: true,
    right: 0,
    european_clock: true,
    missing_is_hidden: true,
    aggregate_rollover: true,
    baselines: [{value: 65, label: 'Target to keep below'}],
    x_accessor: 'at',
    y_accessor: 'value',
    target: '#tempHumidityRoom',
    legend: ['Temp (C)', 'Relative Humidity (%)'],
    legend_target: '#thlegendroom'

  });
});


// Air Pressure
d3.json(datafolder + '/pressure.json', function (data) {
  $('#pressure img').remove();
  for (var i = 0; i < data.length; i++) {
    data[i].at = new Date(data[i].at);
  }

  MG.data_graphic({
    data: data,
    full_width: true,
    right: 0,
    european_clock: true,
    missing_is_hidden: true,
    area: false,
    min_y: 925,
    max_y: 990,
    x_accessor: 'at',
    y_accessor: 'value',
    target: '#pressure',
    legend: ['Pressure (hPa)'],
    legend_target: '.pressurelegend'

  });
});

// Light
d3.json(datafolder + '/luminocity.json', function (data) {
  $('#light img').remove();
  for (var i = 0; i < data.length; i++) {
    data[i].at = new Date(data[i].at);
  }

  MG.data_graphic({
    data: data,
    full_width: true,
    right: 0,
    european_clock: true,
    missing_is_hidden: true,
    area: false,
    baselines: [{value: 600, label: 'Regular light bulb'}],
    min_y_from_data: true,
    x_accessor: 'at',
    y_accessor: 'value',
    target: '#light',
    legend: ['Light (Lux)'],
    legend_target: '.lightlegend'

  });
});
