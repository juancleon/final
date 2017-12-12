var mongoose = require('mongoose');

// User Schema
var VisitorSchema = mongoose.Schema({
	name: {
		type: String,
		index:true
	},
	email: {
		type: String
	},
	telephone: {
		type: String
	},
	company: {
		type: String
	},
  escortname: {
		type: String
	}
});

var Visitor = module.exports = mongoose.model('Visitor', VisitorSchema);

module.exports.createVisitor = function(newVisitor, callback){
  newVisitor.save(callback);
}
