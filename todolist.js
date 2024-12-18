let todolist =[{name:'', duedate:''}];
function rendertodolist(){
    let tdlhtm=''
    for(let i=1;i<todolist.length;i++){
        //const name=todolist[i].name;
        //const duedate=todolist[i].duedate;
        const{name,duedate}=todolist[i];
        const htm=`
            <div class="dls">${name}</div><div class="dls">${duedate}</div>
            <button class="edelb" onclick="todolist.splice(${i},1); rendertodolist()">Delete</button>
        `;
        tdlhtm+=htm;
    }
    document.querySelector('.js-diplaylist').innerHTML=tdlhtm;
}
function delall(){
    todolist=[];
    document.querySelector('.js-diplaylist').innerHTML='';
}
function addtodo() {
    const inpe= document.querySelector('.js-inpt');
    const inpd= document.querySelector('.js-inpdt');
    const val=inpe.value;
    const date=inpd.value;
    todolist.push({name:val, duedate:date});
    inpe.value='';
    inpd.value='';
    rendertodolist();
}