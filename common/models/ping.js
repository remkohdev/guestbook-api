
module.exports = function(Ping) {

	Ping.disableRemoteMethod('patchOrCreate', true);
	Ping.disableRemoteMethod('find', true);
	Ping.disableRemoteMethod('replaceOrCreate', true);
	Ping.disableRemoteMethod('create', true);
	Ping.disableRemoteMethod('updateAttributes', false);
	Ping.disableRemoteMethod('replaceById', true);
	Ping.disableRemoteMethod('exists', true);
	Ping.disableRemoteMethod('deleteById', true);
	Ping.disableRemoteMethod('createChangeStream', true);
	Ping.disableRemoteMethod('count', true);
	Ping.disableRemoteMethod('findById', true);
	Ping.disableRemoteMethod('findOne', true);
	Ping.disableRemoteMethod('updateAll', true);
	Ping.disableRemoteMethod('upsertWithWhere', true);
	
/**
 * Does a ping check to see if the server is up

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Ping} result Result object
 */
  Ping.getPing = function(callback) {
	let msg = {
		'greeting': 'The server is UP and running!',
	};
	callback(null, msg);
  };

Ping.remoteMethod('getPing',
  { isStatic: true,
  accepts: [],
  returns: 
   [ { description: 'Ping Response',
       type: 'Ping',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '' },
  description: undefined }
);

}
