$('div[data-role=page]').on('swipeleft, swiperight ', go);

function go(event) {
    switch(event.type) {
        case 'swiperight':
            console.log('swiperight');
            $('#divid2,#divid3').toggle(false);
            $('#divid1').toggle(true);
            break;
        case 'swipeleft':
            console.log('swipeleft');
            $('#divid1,#divid2').toggle(false);
            $('#divid3').toggle(true);
            break;
    }
}