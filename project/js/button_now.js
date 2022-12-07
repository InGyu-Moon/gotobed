const add_n = document.querySelector("#add_n");
const Now = document.querySelector("#now");

function NowButtonSubmit(event){
    event.preventDefault();
    const date = new Date;

    const now_hour = date.getHours();
    const now_minute = date.getMinutes();
    
    add_n.innerText="";

    let now_hour1=Number(now_hour)+4;
    let now_minute1=Number(now_minute)+30;

    if(now_minute1>=60){
        now_minute1-=60;
        now_hour1+=1;
    }
    if(now_hour1 >24){
        now_hour1-=24;
        add_n.innerText+=" 오전 " + now_hour1 + "시 " + now_minute1 + "분, ";    
    } else if(now_hour1 > 12){
        now_hour1-=12;
        add_n.innerText+=" 오후 " + now_hour1 + "시 " + now_minute1 + "분, ";
    }else{
        add_n.innerText+=" 오전 " + now_hour1 + "시 " + now_minute1 + "분, ";    
    }

    let now_hour2=Number(now_hour)+6;
    let now_minute2=Number(now_minute);

    if(now_minute2>=60){
        now_minute2-=60;
        now_hour2+=1;
    }
    if(now_hour2 >24){
        now_hour2-=24;
        add_n.innerText+=" 오전 " + now_hour2 + "시 " + now_minute2 + "분, ";    
    } else if(now_hour2 > 12){
        now_hour2-=12;
        add_n.innerText+=" 오후 " + now_hour2 + "시 " + now_minute2 + "분, ";
    }else{
        add_n.innerText+=" 오전 " + now_hour2 + "시 " + now_minute2 + "분, ";    
    }

    let now_hour3=Number(now_hour)+7;
    let now_minute3=Number(now_minute)+30;

    if(now_minute3>=60){
        now_minute3-=60;
        now_hour3+=1;
    }
    if(now_hour3 >24){
        now_hour3-=24;
        add_n.innerText+=" 오전 " + now_hour3 + "시 " + now_minute3 + "분 중 에 일어나세요! ";    
    } else if(now_hour3 > 12){
        now_hour3-=12;
        add_n.innerText+=" 오후 " + now_hour3 + "시 " + now_minute3 + "분 중 에 일어나세요! ";
    }else{
        add_n.innerText+=" 오전 " + now_hour3 + "시 " + now_minute3 + "분 중 에 일어나세요! ";    
    }


}
Now.addEventListener("submit",NowButtonSubmit);