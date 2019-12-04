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
var format_GELUID_VERKEER_1 = new ol.format.GeoJSON();
var features_GELUID_VERKEER_1 = format_GELUID_VERKEER_1.readFeatures(json_GELUID_VERKEER_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GELUID_VERKEER_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GELUID_VERKEER_1.addFeatures(features_GELUID_VERKEER_1);
var lyr_GELUID_VERKEER_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GELUID_VERKEER_1, 
                style: style_GELUID_VERKEER_1,
                interactive: true,
    title: 'GELUID_VERKEER<br />\
    <img src="styles/legend/GELUID_VERKEER_1_0.png" /> 50 - 50 <br />\
    <img src="styles/legend/GELUID_VERKEER_1_1.png" /> 50 - 55 <br />\
    <img src="styles/legend/GELUID_VERKEER_1_2.png" /> 55 - 60 <br />\
    <img src="styles/legend/GELUID_VERKEER_1_3.png" /> 60 - 65 <br />\
    <img src="styles/legend/GELUID_VERKEER_1_4.png" /> 65 - 70 <br />'
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
var format_ENERGIE_WINDMOLENS_3 = new ol.format.GeoJSON();
var features_ENERGIE_WINDMOLENS_3 = format_ENERGIE_WINDMOLENS_3.readFeatures(json_ENERGIE_WINDMOLENS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENERGIE_WINDMOLENS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENERGIE_WINDMOLENS_3.addFeatures(features_ENERGIE_WINDMOLENS_3);
var lyr_ENERGIE_WINDMOLENS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ENERGIE_WINDMOLENS_3, 
                style: style_ENERGIE_WINDMOLENS_3,
                interactive: true,
                title: '<img src="styles/legend/ENERGIE_WINDMOLENS_3.png" /> ENERGIE_WINDMOLENS'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GELUID_VERKEER_1.setVisible(false);lyr_VOGELS_2.setVisible(true);lyr_ENERGIE_WINDMOLENS_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GELUID_VERKEER_1,lyr_VOGELS_2,lyr_ENERGIE_WINDMOLENS_3];
lyr_GELUID_VERKEER_1.set('fieldAliases', {'SELECTIE': 'SELECTIE', 'KLASSE': 'KLASSE', 'SOORT': 'SOORT', });
lyr_VOGELS_2.set('fieldAliases', {'Vogel': 'Vogel', 'Straatnaam': 'Straatnaam', 'Huisnummer': 'Huisnummer', 'Verblijfplaats': 'Verblijfplaats', 'Voorziening': 'Voorziening', 'Aantal_2011': 'Aantal_2011', 'Aantal_2012': 'Aantal_2012', 'Aantal_2013': 'Aantal_2013', 'Aantal_2014': 'Aantal_2014', 'Aantal_2015': 'Aantal_2015', 'Aantal_2016': 'Aantal_2016', 'Aantal_2017': 'Aantal_2017', 'Aantal_2018': 'Aantal_2018', 'Aantal_2019': 'Aantal_2019', 'Foto1': 'Foto1', 'Foto2': 'Foto2', });
lyr_ENERGIE_WINDMOLENS_3.set('fieldAliases', {'Eigenaar': 'Eigenaar', 'Windpark': 'Windpark', 'Vermogen_kW': 'Vermogen_kW', 'Productie_MWh': 'Productie_MWh', 'Rotordiameter': 'Rotordiameter', 'Ashoogte': 'Ashoogte', 'Bouwjaar': 'Bouwjaar', });
lyr_GELUID_VERKEER_1.set('fieldImages', {'SELECTIE': 'Range', 'KLASSE': 'TextEdit', 'SOORT': 'TextEdit', });
lyr_VOGELS_2.set('fieldImages', {'Vogel': 'TextEdit', 'Straatnaam': 'TextEdit', 'Huisnummer': 'TextEdit', 'Verblijfplaats': 'TextEdit', 'Voorziening': 'TextEdit', 'Aantal_2011': 'TextEdit', 'Aantal_2012': 'TextEdit', 'Aantal_2013': 'TextEdit', 'Aantal_2014': 'TextEdit', 'Aantal_2015': 'TextEdit', 'Aantal_2016': 'TextEdit', 'Aantal_2017': 'TextEdit', 'Aantal_2018': 'TextEdit', 'Aantal_2019': 'TextEdit', 'Foto1': 'TextEdit', 'Foto2': 'TextEdit', });
lyr_ENERGIE_WINDMOLENS_3.set('fieldImages', {'Eigenaar': 'TextEdit', 'Windpark': 'TextEdit', 'Vermogen_kW': 'Range', 'Productie_MWh': 'Range', 'Rotordiameter': 'Range', 'Ashoogte': 'Range', 'Bouwjaar': 'Range', });
lyr_GELUID_VERKEER_1.set('fieldLabels', {'SELECTIE': 'no label', 'KLASSE': 'no label', 'SOORT': 'no label', });
lyr_VOGELS_2.set('fieldLabels', {'Vogel': 'no label', 'Straatnaam': 'no label', 'Huisnummer': 'no label', 'Verblijfplaats': 'no label', 'Voorziening': 'no label', 'Aantal_2011': 'no label', 'Aantal_2012': 'no label', 'Aantal_2013': 'no label', 'Aantal_2014': 'no label', 'Aantal_2015': 'no label', 'Aantal_2016': 'no label', 'Aantal_2017': 'no label', 'Aantal_2018': 'no label', 'Aantal_2019': 'no label', 'Foto1': 'no label', 'Foto2': 'no label', });
lyr_ENERGIE_WINDMOLENS_3.set('fieldLabels', {'Eigenaar': 'no label', 'Windpark': 'no label', 'Vermogen_kW': 'no label', 'Productie_MWh': 'no label', 'Rotordiameter': 'no label', 'Ashoogte': 'no label', 'Bouwjaar': 'no label', });
lyr_ENERGIE_WINDMOLENS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});