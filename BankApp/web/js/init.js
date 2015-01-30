(function ($) {
    $(function () {
        console.log('init');
        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

function openModal(text, title) {
    var $modal = $('#modal1');
    $modal.children('p').text(text || '');
    $modal.children('h4').text(title || '');
    $modal.openModal();
    return $modal;
}

function concat() {
    var arr = [],
            len = arguments.length;

    for (var i = 0; i < len - 1; i++) {
        arr.push(arguments[i]);
    }


    var seperator = ' ';
    if (len > 2) {
        seperator = arguments[len - 1];
    } else {
        arr.push(arguments[len - 1]);
    }
    return arr.join(seperator);

}

console.log(concat('ahmad', 'moussawi'));
console.log(concat('ahmad', 'moussawi', '&'));