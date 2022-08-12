const { Router } = require('express');
const router = Router();

const { 
    renderContactForm, 
    createNewContact, 
    renderContacts, 
    renderEditForm, 
    updateContact, 
    deleteContact 
} = require('../controllers/contacts.controller');


const {isAuthenticated} = require('../helpers/auth');


// New contact
router.get('/contacts/add', isAuthenticated, renderContactForm);

router.post('/contacts/new-contact', isAuthenticated, createNewContact);


// Get all contacts
router.get('/contacts', isAuthenticated, renderContacts);


// Edit contacts
router.get('/contacts/edit/:id', isAuthenticated, renderEditForm);

router.put('/contacts/edit/:id', isAuthenticated, updateContact);

// Delete contacts
router.delete('/contacts/delete/:id', isAuthenticated, deleteContact);

module.exports = router;