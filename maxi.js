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
        $.ajax({
              url: 'http://192.168.1.61/api/DLm-zlYP-nABkiO7iFLqAcoyTeuxk-EooFBj7EAO/lights/8/state',
              type: 'put',
              data: JSON.stringify({"on":true}'),
              dataType: 'json',
              success: callback
        });
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', 'Maxi', 'lampOn'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Maxi', descriptor, ext);
})({});