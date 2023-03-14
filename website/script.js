const images = document.querySelectorAll('.group img');
const fullscreen = document.createElement('div');
const exit = document.createElement('div');
const prev = document.createElement('div');
const next = document.createElement('div');
const play = document.createElement('div');
let index = 0;
let slideshowInterval;

fullscreen.classList.add('fullscreen');
exit.classList.add('exit');
exit.innerHTML = '&times;';
prev.classList.add('prev');
prev.innerHTML = '&lsaquo;';
next.classList.add('next');
next.innerHTML = '&rsaquo;';
play.classList.add('play');
play.innerHTML = '&#9658;';

images.forEach(image => {
	image.addEventListener('click', () => {
		index = Array.from(image.parentNode.children).indexOf(image);
		fullscreen.appendChild(image.cloneNode());
		fullscreen.appendChild(exit);
		fullscreen.appendChild(prev);
		fullscreen.appendChild(next);
		document.body.appendChild(fullscreen);
		document.body.appendChild(play);
		document.body.style.overflow = 'hidden';
	});

	image.addEventListener('keydown', e => {
		if (e.code === 'Enter' || e.code === 'Space') {
			e.preventDefault();
			index = Array.from(image.parentNode.children).indexOf(image);
			fullscreen.appendChild(image.cloneNode());
			fullscreen.appendChild(exit);
			fullscreen.appendChild(prev);
			fullscreen.appendChild(next);
			document.body.appendChild(fullscreen);
			document.body.appendChild(play);
			document.body.style.overflow = 'hidden';
		}
	});
});

exit.addEventListener('click', () => {
	fullscreen.innerHTML = '';
	document.body.removeChild(fullscreen);
	document.body.removeChild(play);
	document.body.style.overflow = 'auto';
});

prev.addEventListener('click', () => {
	index--;
	if (index < 0) {
		index = images.length - 1;
	}
	fullscreen.innerHTML = '';
	fullscreen.appendChild(images[index].cloneNode());
});

next.addEventListener('click', () => {
	index++;
	if (index >= images.length) {
		index = 0;
	}
	fullscreen.innerHTML = '';
	fullscreen.appendChild(images[index].cloneNode());
});

play.addEventListener('click', () => {
	if (slideshowInterval) {
		clearInterval(slideshowInterval);
		play.innerHTML = '&#9658;';
		slideshowInterval = null;
	} else {
		slideshowInterval = setInterval(() => {
			index++;
			if (index >= images.length) {
				index = 0;
			}
			fullscreen.innerHTML = '';
			fullscreen.appendChild(images[index].cloneNode());
		}, 5000);
		play.innerHTML = '&#9724;';
	}
});

document.addEventListener('keydown', e => {
	if (e.code === 'ArrowLeft') {
		index--;
		if (index < 0) {
			index = images.length - 1;
		}
		fullscreen.innerHTML = '';
		fullscreen.appendChild(images[index].cloneNode());
	} else if (e.code === 'ArrowRight') {
		index++;
		if (index >= images.length) {
			index = 0;
		}
		fullscreen.innerHTML = '';
		fullscreen.appendChild(images[index].cloneNode());
	} else if (e.code === 'Escape') {
		fullscreen.innerHTML = '';
		document.body.removeChild(fullscreen);
		document.body.removeChild(play);
		document.body.style.overflow = 'auto';
	} else if (e.code === 'KeyP') {
		if (slideshowInterval) {
			clearInterval(slideshowInterval);
			play.innerHTML = '&#9658;';
			slideshowInterval = null;
		} else {
			slideshowInterval = setInterval(() => {
				index++;
				if (index >= images.length) {
					index = 0;
				}
				fullscreen.innerHTML = '';
				fullscreen.appendChild(images[index
        ].cloneNode());
      }, 5000);
      play.innerHTML = '&#9724;';
    }
  }
});