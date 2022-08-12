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


// New contact
router.get('/contacts/add', renderContactForm);

router.post('/contacts/new-contact', createNewContact);


// Get all contacts
router.get('/contacts', renderContacts);


// Edit contacts
router.get('/contacts/edit/:id', renderEditForm);

router.put('/contacts/edit/:id', updateContact);

// Delete contacts
router.delete('/contacts/delete/:id', deleteContact);

module.exports = router;