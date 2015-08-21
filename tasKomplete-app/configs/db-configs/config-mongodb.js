/* Copyright Toorq Media Serivces
 * @Date 04/07/2014
 * @author Ram Kashyap
 * @details Creating a single open instance of mongoDb and returning it , this single instance is used for all db operations
 */
define(
    [
        'mongodb'
    ], 
    function(mongodb) {
        var MongoClient, mongoDB, ObjectID, that = this;

        function configure(callback) {
            that.MongoClient = mongodb.MongoClient,
                Server = mongodb.Server;
            var server = 'mongodb://localhost:27017/todoAppDB';

            that.MongoClient.connect(server, function(err, db){
                if(err){
                    var error = {
                        message: 'MongoDB connect failed',
                        error: err
                    }
                    callback(error);
                }else{
                    that.mongoDB = db;
                    that.ObjectID = mongodb.ObjectID;
                    callback(null, 'Connection with mongodb established');
                }
                
            });        
        }

        function mongoClientDB(){
            return that.mongoDB;
        }

        function mongoObjectId(){
            return that.ObjectID;
        }

        return {
            configure: configure,
            mongoClientDB: mongoClientDB,
            mongoObjectId: mongoObjectId
        }
    }
);