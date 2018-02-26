(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.lampOn = function() {
        // Make an AJAX call to the Open Weather Maps API
        var url = 'http://192.168.1.61/api/DLm-zlYP-nABkiO7iFLqAcoyTeuxk-EooFBj7EAO/lights/8/state';
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

    ext.lampOff = function() {
        // Make an AJAX call to the Open Weather Maps API
        var url = 'http://192.168.1.61/api/DLm-zlYP-nABkiO7iFLqAcoyTeuxk-EooFBj7EAO/lights/8/state';
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

    ext.lampColor = function(hue, sat) {
        // Make an AJAX call to the Open Weather Maps API
        var json = "on":true,"hue": + hue + ,"sat": + sat;
        var url = 'http://192.168.1.61/api/DLm-zlYP-nABkiO7iFLqAcoyTeuxk-EooFBj7EAO/lights/8/state';
         $.ajax({
            method: "PUT",
            cache: false,
            url: url,
            data: JSON.stringify({json}),
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

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', 'Tänd', 'lampOn'],
            [' ', 'Släck', 'lampOff'],
            [' ', 'Grön', 'lampGreen', hue, sat],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Maxi', descriptor, ext);
})({});