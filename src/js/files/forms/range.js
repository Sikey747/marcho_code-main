// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');
	if (priceSlider) {
		let textFrom = +priceSlider.getAttribute('data-from');
		let textTo = +priceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start: [textFrom,textTo],
			connect: true,
			step:0.1,
			range: {
				'min': [textFrom],
				'max': [textTo]
			},
			/*
			format: wNumb({
				decimals: 0
			})
			*/
		});
		
		let changeValues = [
		document.getElementById('price-start'),
		document.getElementById('price-end')
	];

	priceSlider.noUiSlider.on('update', function (values, handle) {
		changeValues[handle].innerHTML = values[handle];
	});

		// priceStart.addEventListener('change', setPriceValues);
		// priceEnd.addEventListener('change', setPriceValues);
		
		// function setPriceValues() {
		// 	let priceStartValue;
		// 	let priceEndValue;
		// 	if (priceStart.value != '') {
		// 		priceStartValue = priceStart.value;
		// 	}
		// 	if (priceEnd.value != '') {
		// 		priceEndValue = priceEnd.value;
		// 	}
		// 	priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		// }


	}
}
rangeInit();
