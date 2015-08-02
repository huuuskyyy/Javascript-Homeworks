var domModule = (function () {

    function appendChild(child, parent) {

        var newElement = document.createElement(child);
        document.querySelector(parent).appendChild(newElement);
    }

    function removeChild(child, parent) {

        var toBeRemoved = document.querySelector(child);
        document.querySelector(parent).removeChild(toBeRemoved);
    }

    function addHandler(target, type, event) {

        document.querySelector(target).addEventListener(type, event);
    }

    function createBuffer(selector) {

        var buffer = {
            selector: selector,
            children: []
        };

        return buffer;

    }

    function addElementsToBuffer(bufferTarget, newElement) {
        if (bufferTarget.children.length < 100) {

            bufferTarget.children.push(newElement)

        } else {

            var parent = document.querySelector(bufferTarget.selector);
            var docfrag = document.createDocumentFragment();
            for (var i = 0, len = bufferTarget.children.length; i < len; i++) {

                docfrag.appendChild(bufferTarget.children.pop());
            }

            parent.appendChild(docfrag);
        }

    }

    function getElement(target) {

        return document.querySelector(target);
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        createBuffer: createBuffer,
        addElementsToBuffer: addElementsToBuffer,
        getElement: getElement
    };

})();