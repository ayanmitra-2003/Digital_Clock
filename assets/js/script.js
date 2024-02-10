const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const relogio = document.getElementById('relogio'); 


const clock = setInterval(function time() 
{ 
    let dateToday = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow" }));
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr <10) hr = '0' + hr;
    if(min <10) min = '0' + min;
    if(sec <10) sec = '0' + sec;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;

    if(hr >= 6 && hr < 12)
    {
       
        document.body.style.background = 'linear-gradient(120deg, #FAFFE3, #5DD9CF)';
        relogio.classList.add('fotomanha'); 
        
    } else if(hr >= 12 && hr <18 ){
        
        document.body.style.background = 'linear-gradient(180deg, #E8A4C5, #7093D8)';
        relogio.classList.add('fototarde');

    } else if(hr >= 18 && hr < 24 ){
       
    document.body.style.background = 'linear-gradient(180deg, #906CDD, #2A2553)';
    relogio.classList.add('fotonoite'); 

    } else if(hr < 6 && hr >= 0){
        document.body.style.background = 'linear-gradient(120deg, #185E9B, #3674BE)';
        relogio.classList.add('fotomadrugada'); 
    }
})

