define(['jquery', 'combo_box', 'data'], function (jquery, controls, data) {

    var run = function () {
        var comboBox = controls.ComboBox(data);
    };

    return {
        run: run
    };
});