
module.exports = function(Message) {

	Message.disableRemoteMethod('patchOrCreate', true);
	Message.disableRemoteMethod('find', true);
	Message.disableRemoteMethod('findById', true);
	Message.disableRemoteMethod('replaceOrCreate', true);
	Message.disableRemoteMethod('create', true);
	Message.disableRemoteMethod('updateAttributes', false);
	Message.disableRemoteMethod('replaceById', true);
	Message.disableRemoteMethod('exists', true);
	Message.disableRemoteMethod('deleteById', true);
	Message.disableRemoteMethod('createChangeStream', true);
	Message.disableRemoteMethod('count', true);
	Message.disableRemoteMethod('findOne', true);
	Message.disableRemoteMethod('updateAll', true);
	Message.disableRemoteMethod('upsertWithWhere', true);
	
/**
 * getMessages

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Message} result Result object
 */
  Message.getMessages = function(callback) {
	console.log('=====>getMessages');
	Message.find((err, messages) => {
	if (err) {
		console.log(err);
		callback(err);
	}
	console.log(messages);
	callback(null, messages);
	});
  };


/**
 * addMessage
 * @param {Message} message new Message
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Message} result Result object
 */
  Message.addMessage = function(message, callback) {
	console.log('=====>addMessage');
	Message.create(message, (err, newMessage)=>{
	if (err) {
		console.log(err);
		callback(err);
	}
	console.log(newMessage);
	callback(null, newMessage);
	});
  };

Message.remoteMethod('getMessages',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts: [],
  returns: 
   [ { description: 'Array of Message model instances',
       type: [ 'Message' ],
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/messages' },
  description: undefined }
);

Message.remoteMethod('addMessage',
  { isStatic: true,
  consumes: [ 'application/json' ],
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'message',
       type: 'Message',
       description: 'new Message',
       required: undefined,
       http: { source: 'body' } } ],
  returns: 
   [ { description: 'Message model instance',
       type: 'Message',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '/messages' },
  description: undefined }
);

}
