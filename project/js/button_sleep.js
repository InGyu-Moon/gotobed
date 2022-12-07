const SleepButton = document.querySelector("#sleep");

const s_ampm = document.getElementById("s_ampm");
const s_hour = document.getElementById("s_hour");
const s_minute = document.getElementById("s_minute"); 

const add_s = document.querySelector("#add_s");

function SleepButtonSubmit(event){
    event.preventDefault();
    add_s.innerText="";
    const ampm_s = s_ampm.value;
    const hour_s = s_hour.value;
    const minute_s = s_minute.value;

    let new_ampm_s =ampm_s;
    let new_hour1_s = Number(hour_s)+4;
    let new_minute1_s = Number(minute_s)+30;

    if(new_minute1_s>=60){
        new_minute1_s-=60;
        new_hour1_s+=1;
    }
    if(new_hour1_s >12){
        new_hour1_s-=12;
        if(new_ampm_s=="오전"){
            add_s.innerText+=" 오후 " + new_hour1_s + "시 " + new_minute1_s + "분, ";
        }
        if(new_ampm_s=="오후"){
            add_s.innerText+=" 오전 " + new_hour1_s + "시 " + new_minute1_s + "분, ";
        }

    }else{
        if(new_ampm_s=="오전"){
            add_s.innerText+=" 오전 " + new_hour1_s + "시 " + new_minute1_s + "분, ";
        }
        if(new_ampm_s=="오후"){
            add_s.innerText+=" 오후 " + new_hour1_s + "시 " + new_minute1_s + "분, ";
        }
    }

    let new_hour2_s = Number(hour_s)+6;
    let new_minute2_s = Number(minute_s);
    if(new_minute2_s>=60){
        new_minute2_s-=60;
        new_hour2_s+=1;
    }
    if(new_hour2_s >12){
        new_hour2_s-=12;
        if(new_ampm_s=="오전"){
            add_s.innerText+=" 오후 " + new_hour2_s + "시 " + new_minute2_s + "분, ";
            
        }
        if(new_ampm_s=="오후"){
            add_s.innerText+=" 오전 " + new_hour2_s + "시 " + new_minute2_s + "분, ";
        }

    }else{
        if(new_ampm_s=="오전"){
            add_s.innerText+=" 오전 " + new_hour2_s + "시 " + new_minute2_s + "분, ";
        }
        if(new_ampm_s=="오후"){
            add_s.innerText+=" 오후 " + new_hour2_s + "시 " + new_minute2_s + "분, ";
        }
    }

    let new_hour3_s = Number(hour_s)+7;
    let new_minute3_s = Number(minute_s)+30;
    if(new_minute3_s>=60){
        new_minute3_s-=60;
        new_hour3_s+=1;
    }
    if(new_hour3_s >12){
        new_hour3_s-=12;
        if(new_ampm_s=="오전"){
            add_s.innerText+=" 오후 " + new_hour3_s + "시 " + new_minute3_s + "분 중 에 일어나세요! ";
            
        }
        if(new_ampm_s=="오후"){
            add_s.innerText+=" 오전 " + new_hour3_s + "시 " + new_minute3_s + "분 중 에 일어나세요! ";
        }

    }else{
        if(new_ampm_s=="오전"){
            add_s.innerText+=" 오전 " + new_hour3_s + "시 " + new_minute3_s + "분 중 에 일어나세요! ";
        }
        if(new_ampm=="오후"){
            add_s.innerText+=" 오후 " + new_hour3_s + "시 " + new_minute3_s + "분 중 에 일어나세요! ";
        }
    }

}

SleepButton.addEventListener("submit",SleepButtonSubmit);