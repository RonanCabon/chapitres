function showTraduction() {
	let elements = document.getElementsByClassName('bled-traduction-es');
	for (let ind=0;ind<elements.length;ind++) {
		elements[ind].style.visibility = 'visible';
	}
}

function hideTraduction() {
	let elements = document.getElementsByClassName('bled-traduction-es');
	for (let ind=0;ind<elements.length;ind++) {
		elements[ind].style.visibility = 'hidden';
	}
}

function initTraductionVisibility(){
	let elements = document.getElementsByClassName('bled-traduction-es');
	for (let ind=0;ind<elements.length;ind++) {
		elements[ind].style.visibility = 'visible';
	}
}

function toggleTraduction(){
	let elements = document.getElementsByClassName('bled-traduction-es');
	for (let ind=0;ind<elements.length;ind++) {
		elements[ind].style.visibility === 'hidden' ? elements[ind].style.visibility = 'visible' : elements[ind].style.visibility = 'hidden';
	}
}