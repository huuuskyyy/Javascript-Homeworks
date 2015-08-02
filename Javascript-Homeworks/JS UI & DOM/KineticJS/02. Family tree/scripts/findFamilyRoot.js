function findRootPosition() {
    var family = [];

    for (var item in familyMembers) {
        family.push(familyMembers[item]);
    }

    var children = [];
    var length = family.length;

    for (var i = 0; i < length; i++) {

        if (family[i]['children'] != 'undefined') {
            extractChildren(family[i]['children']);
        }
    }

    var childrenLenght = children.length;
    var child;

    for (var i = 0; i < childrenLenght; i++) {

        for (var j = 0; j < family.length; j++) {
            if (children[i] == family[j]['mother'] || children[i] == family[j]['father']) {
                family.splice(j, 1);
                break;
            }
        }
    }

    var rootPosition = familyMembers.indexOf(family[0]);
    return rootPosition;


    function extractChildren(familyChildren) {

        for (var item in familyChildren) {
            children.push(familyChildren[item]);
        }
    }
}