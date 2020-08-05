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

    if (document.getElementById(imageNumber + 'div').hasAttribute('noSize')) {
        if (document.getElementById(imageNumber + 'div').getAttribute('noSize')=='true') {
            size = '';
        }
    }

    var captionCode = '';
    var figureSize = '';
    if (document.getElementById(imageNumber + 'div').hasAttribute('caption')) {
        var captionText = document.getElementById(imageNumber + 'div').getAttribute('caption');
        captionCode = '<figcaption class="figure-caption text-center">' + captionText + '</figcaption>'
        figureSize = size;
        size = '';
    }

    var imageCode = '<img id="' + imageNumber +  '" class="img-fluid ' + size + ' "' +
                'data-toggle="modal" data-target="#' + imageNumber + 'Modal" alt=""/>';

    var modalCode =
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

    // Storing HTML code block in a variable
    var codeBlock1 = '';
    if (captionCode == '') {
        codeBlock1 = imageCode + modalCode;
    } else {
        codeBlock1 = '<figure class="img-thumbnail ' + figureSize +'">' + imageCode + captionCode + '</figure>' + modalCode;
    }

    // Inserting the code block to wrapper element
    document.getElementById(imageNumber + 'div').innerHTML = codeBlock1;

    var image = '../../outdoor-blog/images/' + imageLocation;
    document.getElementById(imageNumber).src = image;
    document.getElementById(imageNumber + 'ModalDisplay').src = image;
}

function displayImages(number) {
    var imagePrefix='image';
    for (i = 1; i <= number; i++) {
        displayImage(imagePrefix + i);
    }
}