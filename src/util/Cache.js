/**
 * Created by tong on 6/7/2016.
 */

let caches = {};

let Cache = {
	get: function(key, namespace) {
		return this.getCache(namespace)[key];
	},

	set: function(key, value, namespace) {
		this.getCache(namespace)[key] = value;
	},

	contains: function(key, namespace) {
		return key in this.getCache(namespace);
	},

	remove: function(key, namespace) {
		delete this.getCache(namespace)[key];
	},

	clear: function(namesapce) {
		if (!namespace)
			caches = {};
		else if (caches[namespace])
			caches[namespace] = {};
	},

	getCache: function(namespace = 'default') {
		if (!caches[namespace])
			caches[namespace] = {};
		return caches[namespace];
	}
};

export default Cache;
