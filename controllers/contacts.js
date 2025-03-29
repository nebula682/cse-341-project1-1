const mongodb = require('../data/database');
const ObjectId = require( 'mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Contacts']
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({_id: contactId });
    result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(204).json(contacts[0]);
    });
}; 
const createContact = async(req, res) =>{
    //#swagger.tags=['Contacts']
    
    const Contact ={
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address


    };
    const response = await mongodb.getDatabase().db().collection('contacts').insertOne(Contact) ;
    if(response.acknowledged) {
        res.status(204).send();
    }
    else{
        res.status(500).json(response.error || 'Some error occured while updating the contact.');
    }
    
        

};

const updateContact = async(req, res) =>{
    //#swagger.tags=['Contacts']
    const contactId = new ObjectId(req.params.id);
    const Contact ={
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
        


    };
    const response = await mongodb.getDatabase().db().collection('contacts').replaceOne({_id: contactId}, Contact) ;
    if(response.modifiedCount > 0) {
        res.status(204).send();
    }
    else{
        res.status(500).json(response.error || 'Some error occured while updating the contact.');
    }
};

const deleteContact = async(req, res) =>{
    //#swagger.tags=['Contacts']
    const contactId = new ObjectId(req.params.id);
    
    const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({_id: contactId},);
    if(response.deletedCount > 0) {
        res.status(204).send();
    }
    else{
        res.status(500).json(response.error || 'Some error occured while updating the contact.');
    }
};


module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact,
}