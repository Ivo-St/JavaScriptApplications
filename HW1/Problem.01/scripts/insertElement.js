var elementInsertion = elementInsertion || {};
(function () {
    function createElement(element, text) {
        text = text || 'This is preprogramed text';
        var result = $('<' + element + '>')
            .text(text);
        return result;
    }

    function addBeforeElement(element, elementToBeAdded, text) {
        var createdElement = createElement(elementToBeAdded, text);
        $(element).before(createdElement);
    }

    function addAfterElement(element, elementToBeAdded, text) {
        var createdElement = createElement(elementToBeAdded, text);
        $(element).after(createdElement);
    }

    elementInsertion.addBeforeElement = addBeforeElement;
    elementInsertion.addAfterElement = addAfterElement;
}());
