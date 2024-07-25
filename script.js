document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById('task-list');
    const addNewButton = document.getElementById('add-new');
    const totalTasks = document.getElementById('count');
    const remainingTasks = document.getElementById('remaining_done');
    const completedTasks = document.getElementById('count_done');
    const getStartedBtn = document.querySelector('.get-started-btn');
    const header = document.querySelector('.header');
    const dateTime = document.querySelector('.DateTime');
    const taskDetails = document.querySelector('.TaskDetails');
    const dateTime2 = document.querySelector('.DateTime2');
    const taskDetails2 = document.querySelector('.TaskDetails2');

    const updateTaskCounts = () => {
        const total = taskList.getElementsByTagName('li').length;
        const completed = taskList.querySelectorAll('.fa-check-circle').length;
        const remaining = total - completed;
        
        totalTasks.innerText = total;
        remainingTasks.innerText = remaining;
        completedTasks.innerText = completed;

        document.getElementById('count2').innerText = total;
        document.getElementById('remaining_done2').innerText = remaining;
        document.getElementById('count_done2').innerText = completed;
    };

    const addTask = () => {
        const li = document.createElement('li');
        li.className = 'lihiden';
        li.innerHTML = `
            <span class="check_button"><i class="fa fa-circle-thin" aria-hidden="true"></i></span>
            <span contenteditable="true">Enter your task</span>
            <span class="delete_button"><i class="fa fa-trash" aria-hidden="true"></i></span>
        `;

        taskList.appendChild(li);
        updateTaskCounts();
        
        li.querySelector('span[contenteditable="true"]').addEventListener('focus', function () {
            if (this.innerText === 'Enter your task') {
                this.innerText = '';
                this.style.color = '#ffffff';
            }
        });
    };

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-trash')) {
            const li = e.target.closest('li');
            taskList.removeChild(li);
            updateTaskCounts();
        } else if (e.target.classList.contains('fa-circle-thin') || e.target.classList.contains('fa-check-circle')) {
            const li = e.target.closest('li');
            e.target.classList.toggle('fa-circle-thin');
            e.target.classList.toggle('fa-check-circle');
            li.classList.toggle('completed');
            updateTaskCounts();
        }
    });

    addNewButton.addEventListener('click', (e) => {
        e.preventDefault();
        addTask();
    });

    getStartedBtn.addEventListener('click', () => {
        header.style.display = 'none';
        dateTime.style.display = 'block';
        taskDetails.style.display = 'flex';
        dateTime2.style.display = 'block';
        taskDetails2.style.display = 'flex';
        addNewButton.style.display = 'block';
    });

    const updateDateTime = () => {
        const now = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const day = days[now.getDay()];
        const dayNumber = now.getDate();
        const month = months[now.getMonth()];

        document.getElementById('Day').innerText = day + ',';
        document.getElementById('DayNumber').innerText = dayNumber;
        document.getElementById('Month').innerText = month;

        document.getElementById('Day2').innerText = day + ',';
        document.getElementById('DayNumber2').innerText = dayNumber;
        document.getElementById('Month2').innerText = month;
    };

    updateDateTime();
    updateTaskCounts();
});
