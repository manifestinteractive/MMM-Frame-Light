/* global Module */

/* Magic Mirror
 * Module: MMM-Frame-Light
 *
 * By Peter Schmalfeldt
 * MIT Licensed.
 */

Module.register('MMM-Frame-Light', {
	requiresVersion: '2.1.0',

	getStyles: function () {
		return [
			'MMM-Frame-Light.css',
		];
	},

	notificationReceived: function (notification, payload) {
		if(notification === 'MIRROR_LIGHTS_ON') {
			if (document.documentElement) {
				document.documentElement.classList.add('lights-on');
			}
		}

		if(notification === 'MIRROR_LIGHTS_OFF') {
			if (document.documentElement) {
				document.documentElement.classList.remove('lights-on');
			}
		}
	}
});
