document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Kindly Enter Field Name!!!!")
    }

    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    Custom
                </span>
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    X
                </button>
            </div>
        `;

        document.querySelector('#newtask input').value  = "";

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}
