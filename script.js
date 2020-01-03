var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

const ulist = document.getElementById('ulist');
const input = document.getElementById('inpt');
const btn   = document.getElementById('add');

//When user clicked to the add button
btn.addEventListener('click', buttonClick);
function buttonClick()
{
    let newTask = input.value;
    input.value = "";
    if(newTask)
    {
        curr_date = new Date();
        var date = curr_date.getDate()+"/"+ (curr_date.getMonth()+1)+ "/" + curr_date.getFullYear() +" "+ curr_date.getHours()+ ":"+ curr_date.getMinutes()+ ":"+ curr_date.getSeconds();
    const tasks = document.createElement('li');
    const text = document.createElement('span');
        const datetime = document.createElement('span');
        datetime.classList.add('datetime')
    tasks.appendChild(text);
        tasks.appendChild(datetime);
        datetime.textContent = date;
    text.textContent = newTask+"    ";

    var buttons = document.createElement('div');
    buttons.classList.add("buttons");

    //Delete button added to DOM
    var remove = document.createElement('button');
    remove.classList.add('remove');
    buttons.appendChild(remove);
    remove.innerHTML = removeSVG;
    
   //Complete button added to DOM
    var complete = document.createElement('button');
    complete.classList.add('complete');
    buttons.appendChild(complete);
    complete.innerHTML= completeSVG;

    //up button added
    var up = document.createElement('button');
    up.classList.add('up');
    var icnUp = document.createElement('span');
    icnUp.className ='material-icons up';
    icnUp.innerHTML = 'keyboard_arrow_up';
    up.appendChild(icnUp);
    buttons.appendChild(up); 

    //down button added
    var down = document.createElement('button');
    down.classList.add('down');
    var icnDwn = document.createElement('span');
    icnDwn.className ='material-icons down';
    icnDwn.innerHTML = 'keyboard_arrow_down';
    down.appendChild(icnDwn);
    buttons.appendChild(down); 

    tasks.appendChild(buttons);
    ulist.appendChild(tasks);

    //Add click event to remove an item
    remove.addEventListener('click', removeItem);

    //Add click event to complete an item
    complete.addEventListener('click', completeItem);

    //Add click event to move items upward
    up.addEventListener('click', setUp); 

    //Add click event to move items down
    down.addEventListener('click', setDown);
    }
}
// funciton to remove items
function removeItem(){
   var listitem = this.parentNode.parentNode;
   var parent = listitem.parentNode;
   parent.removeChild(listitem);
}
 
//function to complete items
function completeItem(){
       var listitem = this.parentNode.parentNode;
           curr_date = new Date();
           var date = curr_date.getDate()+"/"+ (curr_date.getMonth()+1)+ "/" + curr_date.getFullYear() +" "+ curr_date.getHours()+ ":"+ curr_date.getMinutes()+ ":"+ curr_date.getSeconds();
       console.log(date);
       listitem.classList.toggle('checked');
}

//function to move items up
function setUp()
{
    var task_list = this.closest('ul');
    var item = this.closest('li');
    var prev_item = this.closest('li').previousSibling;
    if(prev_item!== 'undefined' && prev_item!==null)
    {
        task_list.insertBefore(item, prev_item);
    }
}

//function to move items down
function setDown()
{
    var task_list = this.closest('ul');
    var item = this.closest('li');
    var next_item = this.closest('li').nextSibling;
    if(next_item!== 'undefined' && next_item!==null)
    {
        task_list.insertBefore(next_item, item);
    }
}