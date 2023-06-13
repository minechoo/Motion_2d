const frame = document.querySelector('section');
const boxs = document.querySelector('article');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', () => {
	frame.append(frame.firstElementChild);
});

prev.addEventListener('click', () => {
	frame.prepend(frame.lastElementChild);
});
