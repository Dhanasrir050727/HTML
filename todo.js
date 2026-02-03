document.addEventListener('DOMContentLoaded',()=>{
    const taskInput=document.getElementById('task-input');
    const addtask=document.getElementById('add-task-btn');
    const tasklist=document.getElementById('task-list');
    const emptyimage=document.getElementById('image');

    const toggleEmptyState=()=>{
        emptyimage.style.display=tasklist.children.length===0?'block':'none';
    };

    const addTask=(event)=>{
        event.preventDefault();
        const tasktext=taskInput.value.trim();
        if(!tasktext){
            return;
        }
        const li=document.createElement('li');
        li.innerHTML = `
  <input type="checkbox" class="checkbox">
  <span>${tasktext}</span>
  <button class="delete-btn">&#10005;</button>
`;

        tasklist.appendChild(li);
        taskInput.value='';
        toggleEmptyState();
    };
        const deleteTask = (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const listItem = event.target.closest('li');
            listItem.remove();
            toggleEmptyState();
        }
    };
    addtask.addEventListener('click',addTask);
    taskInput.addEventListener('keypress',(e)=>{
        if(e.key==='Enter'){
            addTask(e);
        }
    })
    tasklist.addEventListener('click',deleteTask);
})