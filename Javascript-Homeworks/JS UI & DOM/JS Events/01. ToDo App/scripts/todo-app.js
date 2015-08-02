function createToDoApp() {

    var addButton = document.getElementById('addItem');
    addButton.addEventListener('click', addNewTask, false);

    var removeButton = document.getElementById('removeItem');
    removeButton.addEventListener('click', removeTask, false);

    var minimizeButton = document.getElementById('minimize');
    minimizeButton.addEventListener('click', minimize, false);

    var restoreButton = document.getElementById('restore');
    restoreButton.addEventListener('click', restore, false);

    function restore() {

        var container = document.getElementById('container');
        container.style.display = 'inline-block';

        var restoreDiv = document.getElementById('minimized');
        restoreDiv.style.display = 'none';

    }

    function minimize() {

        var container = document.getElementById('container');
        container.style.display = 'none';

        var restoreDiv = document.getElementById('minimized');
        restoreDiv.style.display = 'inline-block';

    }

    function removeTask() {

        event.preventDefault();
        var tasks = document.getElementsByTagName('p');

        for (var task in tasks) {

            if (tasks[task].className == 'marked') {
                tasks[task].parentNode.removeChild(tasks[task]);
            }

        }

    }

    function addNewTask() {
        event.preventDefault();
        var input = document.getElementById('input');
        var display = document.getElementById('display');
        var newTask = document.createElement('p');
        newTask.className = 'none';
        newTask.addEventListener('click', changeClass, false);
        newTask.innerHTML = input.value;
        newTask.style.backgroundColor = '#DEC3E3';
        display.appendChild(newTask);
    }

    function changeClass() {

        event.preventDefault();

        if (this.className == 'none') {
            this.className = 'marked'
            this.style.backgroundColor = '#D97591';
        } else {
            this.className = 'none';
            this.style.backgroundColor = '#DEC3E3';
        }
    }
}