"use strict";

let Concertsevents = document.createElement('div')
Concertsevents.setAttribute('id', 'concerts')

let allConcerts = [];

$.getJSON('https://apis.is/concerts', function(data) {
	
	for (let i = 0; i < data['results'].length; i++){
    	allConcerts.push({eventName: data['results'][i]['eventDateName'],
    	 locationName: data['results'][i]['eventHallName'],
    	  dateShow: moment(data['results'][i]['dateOfShow']).format('DoMMMM YYYY'),
    	   dateTime: moment(data['results'][i]['dateOfShow']).format('LT'),
    	    img: data['results'][i]['imageSource']});
	}

	function createElements(){
		for (let x = 0; x < data['results'].length; x++){

			let breakTag = document.createElement('br');
			let Concert = document.createElement('div');
			Concert.setAttribute('class', 'concert');
			Concert.setAttribute('id', allConcerts[x]['eventName']);

			let Image = document.createElement('img');
			Image.setAttribute('src', allConcerts[x]['img']);
			Concert.appendChild(Image);
			Concert.appendChild(breakTag);

			let infoElem = document.createElement('div');
			infoElem.setAttribute('class', 'info');
			Concert.appendChild(infoElem);

			let infoName = document.createElement('div');
			let strongName = document.createElement('strong');
			let infoNameText = document.createTextNode('Event Name:');
			strongName.appendChild(infoNameText);
			if (allConcerts[x]['eventName'].length > 25){
				allConcerts[x]['eventName'] = allConcerts[x]['eventName'].substring(0, 35);
			}
			let event = document.createTextNode(' ' + allConcerts[x]['eventName']);
			infoName.appendChild(strongName);
			infoName.appendChild(event);
			infoElem.appendChild(infoName);

			let infoLoca = document.createElement('div');
			let strongLoca = document.createElement('strong');
			let infoLocaText = document.createTextNode('Loaction:');
			strongLoca.appendChild(infoLocaText);
			if (allConcerts[x]['locationName'].length > 25){
				allConcerts[x]['locationName'] = allConcerts[x]['locationName'].substring(0, 35);
			}
			let loaction = document.createTextNode(' ' + allConcerts[x]['locationName']);
			infoLoca.appendChild(strongLoca);
			infoLoca.appendChild(loaction);
			infoElem.appendChild(infoLoca);

			let infoDate = document.createElement('div');
			let strongDate = document.createElement('strong');
			let infoDateText = document.createTextNode('date:');
			strongDate.appendChild(infoDateText);
			let date = document.createTextNode(' ' + allConcerts[x]['dateShow']);
			infoDate.appendChild(strongDate);
			infoDate.appendChild(date);
			infoElem.appendChild(infoDate);

			let infoTime = document.createElement('div');
			let strongTime = document.createElement('strong');
			let infoTimeText = document.createTextNode('Time:');
			strongTime.appendChild(infoTimeText);
			let time = document.createTextNode(' ' + allConcerts[x]['dateTime']);
			infoTime.appendChild(strongTime);
			infoTime.appendChild(time);
			infoElem.appendChild(infoTime);


			Concertsevents.appendChild(Concert)

			document.body.appendChild(Concertsevents);

		}
	}


	function sortByName(){
		
	let sortconserts = document.getElementById("concerts");
		while (sortconserts.firstChild){
			sortconserts.removeChild(sortconserts.firstChild);
		}
		Concertsevents.sort(function(a, b) {
		    let name_a = a.eventName.toUpperCase();
		    let name_b = b.eventName.toUpperCase();
		    return (name_a < name_b) ? -1 : (name_a > name_b) ? 1 : 0;
		});
		sortByName();
	}

createElements();
seacrhbar();
function seacrhbar() {
	let seacrhbar = document.querySelector('#concerts .concert');
	let input = document.querySelector("#myinput")
	let seacrh = [];
	seacrh_bar.each(function(){
		seacrh.push({
			element: this,
			text: this.id.trim().toUpperCase()

		});
	});
	function filttersearch(){
		let  query = this.value().trim().toUpperCase();
		seacrh.forEach(function(e){
			let index = 0;
			if (query){
				index.e.text.indexOf(query);
			}
			e.element.style.display = index === -1 ? 'none':'';
		});
		if ('oninput' in input){
			input.addEventListener('input',filttersearch);
		}
		else{
			input.addEventListener('keyup',filttersearch);
		}
	}
}
});