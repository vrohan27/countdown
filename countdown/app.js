const eventDate = "17 Dec 2022";

function countdown(){
    const date = new Date(eventDate);
    const currentdate = new Date();
    const seconds = (date - currentdate) / 1000;
     const days = Math.round(seconds/3600/24);
     const hours = Math.round(seconds/3600)%24;
     const minutes = Math.round(seconds/60)%24%60;
    const realseconds = Math.round(seconds)%60;

    // console.log(days,hours,minutes,realseconds);
    const time = document.querySelector('.countdiv');

    let html = `
    
    <div class="row ">
		<div class="col-lg-3 col col-md-3 col-sm-3 pt-5 rowbox">${days}
			<div class="rowtext">Day</div>
		</div>
		<div class="col-lg-3 col-md-3 col-sm-3 pt-5 rowbox">${hours}
			<div class="rowtext">Hours</div>
		</div>
		<div class="col-lg-3 col-md-3 col-sm-3 pt-5 rowbox">${minutes}
			<div class="rowtext">Min</div>
		</div>
		<div class="col-lg-3 col-md-3 col-sm-3 pt-5 rowbox">${realseconds}
			<div class="rowtext">Sec</div>
		</div>
	</div>

    `;
    time.innerHTML = html;
}
countdown();
setInterval(countdown,1000)