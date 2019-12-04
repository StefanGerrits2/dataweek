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
var format_VOGELS_1 = new ol.format.GeoJSON();
var features_VOGELS_1 = format_VOGELS_1.readFeatures(json_VOGELS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOGELS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOGELS_1.addFeatures(features_VOGELS_1);
var lyr_VOGELS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VOGELS_1, 
                style: style_VOGELS_1,
                interactive: true,
                title: '<img src="styles/legend/VOGELS_1.png" /> VOGELS'
            });
var format_HONDEN_2 = new ol.format.GeoJSON();
var features_HONDEN_2 = format_HONDEN_2.readFeatures(json_HONDEN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HONDEN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HONDEN_2.addFeatures(features_HONDEN_2);
var lyr_HONDEN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HONDEN_2, 
                style: style_HONDEN_2,
                interactive: true,
    title: 'HONDEN<br />\
    <img src="styles/legend/HONDEN_2_0.png" /> Restrictiegebied<br />\
    <img src="styles/legend/HONDEN_2_1.png" /> Uitrengebied<br />\
    <img src="styles/legend/HONDEN_2_2.png" /> Verbodsgebied<br />\
    <img src="styles/legend/HONDEN_2_3.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_VOGELS_1.setVisible(true);lyr_HONDEN_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_VOGELS_1,lyr_HONDEN_2];
lyr_VOGELS_1.set('fieldAliases', {'Vogel': 'Vogel', 'Straatnaam': 'Straatnaam', 'Huisnummer': 'Huisnummer', 'Verblijfplaats': 'Verblijfplaats', 'Voorziening': 'Voorziening', 'Aantal_2011': 'Aantal_2011', 'Aantal_2012': 'Aantal_2012', 'Aantal_2013': 'Aantal_2013', 'Aantal_2014': 'Aantal_2014', 'Aantal_2015': 'Aantal_2015', 'Aantal_2016': 'Aantal_2016', 'Aantal_2017': 'Aantal_2017', 'Aantal_2018': 'Aantal_2018', 'Aantal_2019': 'Aantal_2019', 'Foto1': 'Foto1', 'Foto2': 'Foto2', });
lyr_HONDEN_2.set('fieldAliases', {'Soort': 'Soort', 'Restrictie': 'Restrictie', });
lyr_VOGELS_1.set('fieldImages', {'Vogel': 'TextEdit', 'Straatnaam': 'TextEdit', 'Huisnummer': 'TextEdit', 'Verblijfplaats': 'TextEdit', 'Voorziening': 'TextEdit', 'Aantal_2011': 'TextEdit', 'Aantal_2012': 'TextEdit', 'Aantal_2013': 'TextEdit', 'Aantal_2014': 'TextEdit', 'Aantal_2015': 'TextEdit', 'Aantal_2016': 'TextEdit', 'Aantal_2017': 'TextEdit', 'Aantal_2018': 'TextEdit', 'Aantal_2019': 'TextEdit', 'Foto1': 'TextEdit', 'Foto2': 'TextEdit', });
lyr_HONDEN_2.set('fieldImages', {'Soort': 'TextEdit', 'Restrictie': 'TextEdit', });
lyr_VOGELS_1.set('fieldLabels', {'Vogel': 'no label', 'Straatnaam': 'no label', 'Huisnummer': 'no label', 'Verblijfplaats': 'no label', 'Voorziening': 'no label', 'Aantal_2011': 'no label', 'Aantal_2012': 'no label', 'Aantal_2013': 'no label', 'Aantal_2014': 'no label', 'Aantal_2015': 'no label', 'Aantal_2016': 'no label', 'Aantal_2017': 'no label', 'Aantal_2018': 'no label', 'Aantal_2019': 'no label', 'Foto1': 'no label', 'Foto2': 'no label', });
lyr_HONDEN_2.set('fieldLabels', {'Soort': 'no label', 'Restrictie': 'no label', });
lyr_HONDEN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});