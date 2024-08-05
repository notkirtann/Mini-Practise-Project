const time = document.querySelector('#clock')

setInterval(()=> {
    let date = new Date()
    time.innerHTML = date.toLocaleTimeString()
}, 1000);