function showtime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    if(h>12){
        h=h-12
    }
    if(h==0){
        h=12
    }
    if(h<10){
        h='0'+h

    }
    if(m<10){
        m='0'+m

    }
    if(s<10){
        s='0'+s
    }
    document.getElementById('hh').innerText = h
    document.getElementById('mm').innerText = m
    document.getElementById('ss').innerText = s
    setInterval(showtime ,1000)
}
showtime()