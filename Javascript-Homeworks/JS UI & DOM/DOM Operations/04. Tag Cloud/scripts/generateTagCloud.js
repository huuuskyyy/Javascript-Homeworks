function generateTagCloud(tags, minFont, maxFont) {

    var tagsFrequences = extractTagsFrequences(tags);
    var mostFrequent = findMostFrequent(tagsFrequences);

    var div = document.createElement('div');
    div.style.width = tagsFrequences.length * 25 + 'px';
    div.style.display = 'inine-block';
    div.style.position = 'absolute';
    div.style.top = '100px';
    div.style.left = '100px';
    div.style.border = '1px solid black';
    div.style.overflow = 'auto';

    for (var child in tagsFrequences) {

        var span = document.createElement('span');
        var fontMargin = maxFont - minFont;
        var fontStep = Math.floor(fontMargin / (mostFrequent - 1));
        var fontSize = Math.floor(minFont + (fontStep * (tagsFrequences[child].frequence - 1)));

        span.innerHTML = tagsFrequences[child].value + "";
        span.style.fontSize = fontSize + 'px';
        span.style.display = 'inline-block';
        span.style.marginRight = '10px';

        div.appendChild(span);
    }
    document.body.appendChild(div);
}

function findMostFrequent(objects) {

    var biggest = objects[0].frequence;;

    for (var i = 1; i < objects.length; i++) {

        if (biggest < objects[i].frequence) {
            biggest = objects[i].frequence
        }
    }
    return biggest;
}

function extractTagsFrequences(tags) {

    var resultTags = [];
    var frequence = [];

    for (var i = 0, len = tags.length; i < len; i++) {
        var currentTag = tags[i].toLowerCase();
        var counter = 0;

        if (resultTags.indexOf(currentTag) < 0) {
            counter++;

            for (var j = i; j < tags.length; j++) {

                if (currentTag == tags[j].toLowerCase() && j != i) {

                    counter++;
                }
            }

            resultTags.push(currentTag);
            frequence.push(counter);
        }
    }

    var tagObjects = [];

    for (var i = 0; i < resultTags.length; i++) {

        tagObjects.push({ value: resultTags[i], frequence: frequence[i] });
    }

    return tagObjects;
}