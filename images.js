function displayImage(imageNumber) {
    var element = document.getElementById(imageNumber + 'div');
    var imageLocation = element.getAttribute('imageLocation');

    var size = 'col-md-8 offset-md-2';
    var modal = 'xl';
    if (document.getElementById(imageNumber + 'div').hasAttribute('type')) {
        if (document.getElementById(imageNumber + 'div').getAttribute('type')=='long') {
            size = 'col-md-5 offset-md-3';
            modal = 'l';
        }
    }

    // Storing HTML code block in a variable
    var codeBlock1 =
    '<img id="' + imageNumber +  '" class="img-fluid img-thumbnail ' + size + ' "' +
                'data-toggle="modal" data-target="#' + imageNumber + 'Modal"/>' +
    '<div class="modal fade" id="' + imageNumber + 'Modal" tabindex="-1" role="dialog" ' +
                'aria-labelledby="' + imageNumber + 'ModalLabel" aria-hidden="true">' +
    '    <div class="modal-dialog modal-dialog-centered modal-' + modal + '" role="document">' +
    '        <div class="modal-content">' +
    '            <div class="modal-body">' +
    '                <img id="' + imageNumber + 'ModalDisplay" class="img-fluid"/>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    // Inserting the code block to wrapper element
    document.getElementById(imageNumber + 'div').innerHTML = codeBlock1;

    var image = '../../images/' + imageLocation;
    document.getElementById(imageNumber).src = image;
    document.getElementById(imageNumber + 'ModalDisplay').src = image;
}

function displayImages(number) {
    var imagePrefix='image';
    for (i = 1; i <= number; i++) {
        displayImage(imagePrefix + i);
    }
}