(function(ext) {

	var hue = 0;
	var sat = 0;
	var bri = 127;
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.lampOn = function(callback) {
        // Make an AJAX call to the Open Weather Maps API
        var url = 'http://192.168.1.61/api/DLm-zlYP-nABkiO7iFLqAcoyTeuxk-EooFBj7EAO/lights/28/state';
         $.ajax({
            method: "PUT",
            cache: false,
            url: url,
            data: JSON.stringify({"on":true}),
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
        // Make an AJAX call to the Open Weather Maps API
        var url = 'http://192.168.1.61/api/DLm-zlYP-nABkiO7iFLqAcoyTeuxk-EooFBj7EAO/lights/28/state';
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
        // Make an AJAX call to the Open Weather Maps API
        var json = '{"on":true,"hue":' + hue + ',"sat":'+ sat + ',"bri":' + bri + '}';
        console.log(json);
        var url = 'http://192.168.1.61/api/DLm-zlYP-nABkiO7iFLqAcoyTeuxk-EooFBj7EAO/lights/28/state';
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
            ['w', 'Tänd', 'lampOn'],
            ['w', 'Släck', 'lampOff'],
            ['w', 'Hue %s Sat %s Bri %s', 'lampColor', hue, sat, bri],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Maxi', descriptor, ext);
})({});
