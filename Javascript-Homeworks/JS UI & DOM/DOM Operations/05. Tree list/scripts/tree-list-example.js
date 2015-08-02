function createTreeListExample() {
    generateListItemHardcode();
    setDisplayPropertyToUls();
    addEventToLis();

    function setDisplayPropertyToUls() {

        var uls = document.getElementsByTagName('ul');

        for (var i = 1; i < uls.length; i++) {
            uls[i].style.display = 'none';
        }
    }

    function addEventToLis() {

        var lis = document.getElementsByTagName('li');

        for (var i = 0; i < lis.length; i++) {
            lis[i].addEventListener('click', showOrHideSubItems);
        }
    }

    function generateListItemHardcode() {

        var list = document.createElement('ul');

        for (var i = 0; i < 5; i++) {
            var li = document.createElement('li');

            li.innerHTML = 'List item # ' + (i + 1);

            var ulSub = document.createElement('ul');

            for (var k = 0; k < 5; k++) {
                var liSubTwo = document.createElement('li');
                liSubTwo.innerHTML = 'Sub item' + (k + 1);

                var ulSubSub = document.createElement('ul');

                for (var j = 0; j < 5; j++) {
                    var liSubThree = document.createElement('li');
                    liSubThree.innerHTML = "Sub sub item " + (j + 1);
                    ulSubSub.appendChild(liSubThree);
                }

                liSubTwo.appendChild(ulSubSub);
                ulSub.appendChild(liSubTwo);
            }

            li.appendChild(ulSub);

            list.appendChild(li);
        }
        document.body.appendChild(list);
    }

    function showOrHideSubItems(event) {

        if (this === event.target && this.getElementsByTagName('ul')[0].style.display == 'block') {

            this.getElementsByTagName('ul')[0].style.display = 'none';
        } else {

            this.getElementsByTagName('ul')[0].style.display = 'block'
        }

    }
}