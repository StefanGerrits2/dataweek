var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_STADSWARMTEKOUDE_WIJK_1 = new ol.format.GeoJSON();
var features_STADSWARMTEKOUDE_WIJK_1 = format_STADSWARMTEKOUDE_WIJK_1.readFeatures(json_STADSWARMTEKOUDE_WIJK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STADSWARMTEKOUDE_WIJK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STADSWARMTEKOUDE_WIJK_1.addFeatures(features_STADSWARMTEKOUDE_WIJK_1);
var lyr_STADSWARMTEKOUDE_WIJK_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STADSWARMTEKOUDE_WIJK_1, 
                style: style_STADSWARMTEKOUDE_WIJK_1,
                interactive: true,
                title: '<img src="styles/legend/STADSWARMTEKOUDE_WIJK_1.png" /> STADSWARMTEKOUDE_WIJK'
            });
var format_VOGELS_2 = new ol.format.GeoJSON();
var features_VOGELS_2 = format_VOGELS_2.readFeatures(json_VOGELS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOGELS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOGELS_2.addFeatures(features_VOGELS_2);
var lyr_VOGELS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VOGELS_2, 
                style: style_VOGELS_2,
                interactive: true,
                title: '<img src="styles/legend/VOGELS_2.png" /> VOGELS'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_STADSWARMTEKOUDE_WIJK_1.setVisible(true);lyr_VOGELS_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_STADSWARMTEKOUDE_WIJK_1,lyr_VOGELS_2];
lyr_STADSWARMTEKOUDE_WIJK_1.set('fieldAliases', {'NETTYPE': 'NETTYPE', 'STATUS': 'STATUS', });
lyr_VOGELS_2.set('fieldAliases', {'Vogel': 'Vogel', 'Straatnaam': 'Straatnaam', 'Huisnummer': 'Huisnummer', 'Verblijfplaats': 'Verblijfplaats', 'Voorziening': 'Voorziening', 'Aantal_2011': 'Aantal_2011', 'Aantal_2012': 'Aantal_2012', 'Aantal_2013': 'Aantal_2013', 'Aantal_2014': 'Aantal_2014', 'Aantal_2015': 'Aantal_2015', 'Aantal_2016': 'Aantal_2016', 'Aantal_2017': 'Aantal_2017', 'Aantal_2018': 'Aantal_2018', 'Aantal_2019': 'Aantal_2019', 'Foto1': 'Foto1', 'Foto2': 'Foto2', });
lyr_STADSWARMTEKOUDE_WIJK_1.set('fieldImages', {'NETTYPE': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_VOGELS_2.set('fieldImages', {'Vogel': 'TextEdit', 'Straatnaam': 'TextEdit', 'Huisnummer': 'TextEdit', 'Verblijfplaats': 'TextEdit', 'Voorziening': 'TextEdit', 'Aantal_2011': 'TextEdit', 'Aantal_2012': 'TextEdit', 'Aantal_2013': 'TextEdit', 'Aantal_2014': 'TextEdit', 'Aantal_2015': 'TextEdit', 'Aantal_2016': 'TextEdit', 'Aantal_2017': 'TextEdit', 'Aantal_2018': 'TextEdit', 'Aantal_2019': 'TextEdit', 'Foto1': 'TextEdit', 'Foto2': 'TextEdit', });
lyr_STADSWARMTEKOUDE_WIJK_1.set('fieldLabels', {'NETTYPE': 'no label', 'STATUS': 'no label', });
lyr_VOGELS_2.set('fieldLabels', {'Vogel': 'no label', 'Straatnaam': 'no label', 'Huisnummer': 'no label', 'Verblijfplaats': 'no label', 'Voorziening': 'no label', 'Aantal_2011': 'no label', 'Aantal_2012': 'no label', 'Aantal_2013': 'no label', 'Aantal_2014': 'no label', 'Aantal_2015': 'no label', 'Aantal_2016': 'no label', 'Aantal_2017': 'no label', 'Aantal_2018': 'no label', 'Aantal_2019': 'no label', 'Foto1': 'no label', 'Foto2': 'no label', });
lyr_VOGELS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});