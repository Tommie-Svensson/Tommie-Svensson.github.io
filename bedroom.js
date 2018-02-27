(function(ext) {

	var hue = 10000;
	var sat = 0;
	var bri = 254;
    var color = 'white';
    var url = 'http://192.168.1.61/api/DLm-zlYP-nABkiO7iFLqAcoyTeuxk-EooFBj7EAO/groups/3/action';
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.lampOn = function(callback) {
         $.ajax({
            method: "PUT",
            cache: false,
            url: url,
            data: JSON.stringify({"on":true,"hue":10000}),
            contentType: "text/plain",
            success: function () {
                callback();
            },
            error: function (xhr, textStatus, error) {
                console.log(error);
                callback();
            }
        });
    };

    ext.lampOff = function(callback) {
         $.ajax({
            method: "PUT",
            cache: false,
            url: url,
            data: JSON.stringify({"on":false}),
            contentType: "text/plain",
            success: function () {
                callback();
            },
            error: function (xhr, textStatus, error) {
                console.log(error);
                callback();
            }
        });
    };

    ext.lampColor = function(hue, sat, bri, callback) {
        var json = '{"on":true,"hue":' + hue + ',"sat":'+ sat + ',"bri":' + bri + '}';
        console.log(json);
         $.ajax({
            method: "PUT",
            cache: false,
            url: url,
            data: json,
            contentType: "text/plain",
            success: function () {
                console.log('success');
                callback();
            },
            error: function (xhr, textStatus, error) {
                console.log(error);
                callback();
            }
        });
    };

    ext.testColor = function(color, callback) {
        //'red','blue','green','yellow','orange','purple','pink','white'
        switch(color) {
            case 'red':
                hue = 0;
                bri = 254;
                sat = 254;
                break;
            case 'blue':
                hue = 46920;
                bri = 254;
                sat = 254;
                break;
            case 'green':
                hue = 25500;
                bri = 254;
                sat = 254;
                break;
            case 'yellow':
                hue = 12750;
                bri = 254;
                sat = 254;
                break;
            case 'orange':
                hue = 8000;
                bri = 120;
                sat = 254;
                break;
            case 'purple':
                hue = 56100;
                bri = 120;
                sat = 254;
                break;
            case 'pink':
                hue = 56100;
                bri = 254;
                sat = 200;
                break;
            case 'white':
                hue = 0;
                bri = 254;
                sat = 0;
                break;
        }
        var json = '{"on":true,"hue":' + hue + ',"sat":'+ sat + ',"bri":' + bri + '}';
        console.log(json);
         $.ajax({
            method: "PUT",
            cache: false,
            url: url,
            data: json,
            contentType: "text/plain",
            success: function () {
                console.log('success');
                callback();
            },
            error: function (xhr, textStatus, error) {
                console.log(error);
                callback();
            }
        });
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['w', 'Turn on lamps', 'lampOn'],
            ['w', 'Turn off lamps', 'lampOff'],
            ['w', 'Hue %n Sat %n Bri %n', 'lampColor', hue, sat, bri],
            ['w', 'Color %m.colors', 'testColor', color],
        ],
        menus: {
            colors: ['red','blue','green','yellow','orange','purple','pink','white']
        },
        url: 'http://scratchx.org/?url=https://Tommie-Svensson.github.io/bedroom.js#scratch'
    };

    // Register the extension
    ScratchExtensions.register('Bedroom', descriptor, ext);
})({});