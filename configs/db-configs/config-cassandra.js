/**
 * @author booleanhunter
 * @about Creating a single open instance of cassandraDb and returning it , this single instance is used for all db operations
 */

var cql = require('node-cassandra-cql');
var cassandraClient, dataTypes, cqlTypes, that = this;

function configure(callback) {

	that.cassandraClient = new cql.Client({
	    hosts: ['127.0.0.1:9042'],
	    keyspace: 'taskomplete_db',
	});

	// var cql = require('cassandra-driver');
	// var cassandraClient = new cql.Client({
	//     hosts: ['127.0.0.1:9042'],
	//     keyspace: 'toorq_db',
	//     contactPoints: ['localhost']
	// });

	that.dataTypes = cql.types.dataTypes,
	that.cqlTypes = cql.types;

	that.cassandraClient.connect(function established(err){
	    if(err){
	    	var error = {
	    		message: 'Cassandra connect failed',
	    		error: err
	    	}
	        callback(err);
	    }else{
	        callback(null, 'Connection with Cassandra established');
	    }
	});
}

function cassandraClient(){
	return that.cassandraClient;
}

function dataTypes(){
	return that.dataTypes;
}

function cqlTypes(){
	return that.cqlTypes;
}

exports.configure = configure;
exports.cassandraClient = cassandraClient;
exports.dataTypes = dataTypes;
exports.cqlTypes = cqlTypes;