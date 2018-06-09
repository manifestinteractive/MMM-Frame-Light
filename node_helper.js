/* Magic Mirror
 * Module: MMM-Frame-Light
 *
 * By Peter Schmalfeldt
 * MIT Licensed.
 */

var NodeHelper = require('node_helper');

module.exports = NodeHelper.create({
	sendNotificationTest: function (payload) {
		this.sendSocketNotification('MIRROR_LIGHTS_ON', payload);
	}
});
