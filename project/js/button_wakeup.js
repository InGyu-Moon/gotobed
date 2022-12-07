const WakeUpButton = document.querySelector("#wakeup");

const w_ampm = document.getElementById("w_ampm");
const w_hour = document.getElementById("w_hour");
const w_minute = document.getElementById("w_minute");  

const add = document.querySelector("#add_w");

function WakeUpButtonSubmit(event){
    event.preventDefault();
    add.innerText="";
    const ampm = w_ampm.value;
    const hour = w_hour.value;
    const minute = w_minute.value;

    let new_ampm =ampm;
    let new_hour1 = Number(hour)-7;
    let new_minute1 = Number(minute)-30;

    if(new_minute1<0){
        new_minute1+=60;
        new_hour1-=1;
    }
    if(new_hour1 <0){
        new_hour1+=12;
        if(new_ampm=="오전"){
            add.innerText+=" 오후 " + new_hour1 + "시 " + new_minute1 + "분, ";
        }
        if(new_ampm=="오후"){
            add.innerText+=" 오전 " + new_hour1 + "시 " + new_minute1 + "분, ";
        }

    }else{
        if(new_ampm=="오전"){
            add.innerText+=" 오전 " + new_hour1 + "시 " + new_minute1 + "분, ";
        }
        if(new_ampm=="오후"){
            add.innerText+=" 오후 " + new_hour1 + "시 " + new_minute1 + "분, ";
        }
    }

    let new_hour2 = Number(hour)-6;
    let new_minute2 = Number(minute);
    if(new_minute2<0){
        new_minute2+=60;
        new_hour2-=1;
    }
    if(new_hour2 <0){
        new_hour2+=12;
        if(new_ampm=="오전"){
            add.innerText+=" 오후 " + new_hour2 + "시 " + new_minute2 + "분, ";
            
        }
        if(new_ampm=="오후"){
            add.innerText+=" 오전 " + new_hour2 + "시 " + new_minute2 + "분, ";
        }

    }else{
        if(new_ampm=="오전"){
            add.innerText+=" 오전 " + new_hour2 + "시 " + new_minute2 + "분, ";
        }
        if(new_ampm=="오후"){
            add.innerText+=" 오후 " + new_hour2 + "시 " + new_minute2 + "분, ";
        }
    }

    let new_hour3 = Number(hour)-4;
    let new_minute3 = Number(minute)-30;
    if(new_minute3<0){
        new_minute3+=60;
        new_hour3-=1;
    }
    if(new_hour3 <0){
        new_hour3+=12;
        if(new_ampm=="오전"){
            add.innerText+=" 오후 " + new_hour3 + "시 " + new_minute3 + "분 중 에 주무세요! ";
            
        }
        if(new_ampm=="오후"){
            add.innerText+=" 오전 " + new_hour3 + "시 " + new_minute3 + "분 중 에 주무세요! ";
        }

    }else{
        if(new_ampm=="오전"){
            add.innerText+=" 오전 " + new_hour3 + "시 " + new_minute3 + "분 중 에 주무세요! ";
        }
        if(new_ampm=="오후"){
            add.innerText+=" 오후 " + new_hour3 + "시 " + new_minute3 + "분 중 에 주무세요! ";
        }
    }

}

WakeUpButton.addEventListener("submit",WakeUpButtonSubmit);