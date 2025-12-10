
$(document).ready(function () {
    new SizeChartLinksManager();
});



function SizeChartLinksManager() {
    var parkerSizeSelect = document.getElementById('PERSON[PERSON_PREFERENCES][PARKA_SIZE]')
        , wrapper
        ;

    console.log('SizeChartLinksManager initialized');


    if (parkerSizeSelect) {
        var parkerSizeChartlink = document.createElement('a');
        parkerSizeChartlink.href = '#';
        parkerSizeChartlink.textContent = 'Size Chart';
        parkerSizeChartlink.addEventListener('click', function (event) {
            event.preventDefault();
            $('#parka-size-modal').modal({});
        });

        // Wrap parkaSizeSelect in a div
        wrapper = document.createElement('div');
        wrapper.className = 'size-chart-wrapper';
        parkerSizeSelect.parentNode.insertBefore(wrapper, parkerSizeSelect);
        wrapper.appendChild(parkerSizeSelect);
        wrapper.appendChild(parkerSizeChartlink);
    }

    var bootSizeSelect = document.getElementById('PERSON[PERSON_PREFERENCES][BOOT_SIZE]');

    if (bootSizeSelect) {
        var bootSizeChartlink = document.createElement('a');
        bootSizeChartlink.href = '#';
        bootSizeChartlink.textContent = 'Size Chart';
        bootSizeChartlink.addEventListener('click', function (event) {
            event.preventDefault();
            $('#boot-size-modal').modal({});
        });

        // Wrap parkaSizeSelect in a div
        wrapper = document.createElement('div');
        wrapper.className = 'size-chart-wrapper';
        bootSizeSelect.parentNode.insertBefore(wrapper, bootSizeSelect);
        wrapper.appendChild(bootSizeSelect);
        wrapper.appendChild(bootSizeChartlink);
    }

}
