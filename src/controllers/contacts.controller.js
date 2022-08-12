const contactsCtrl = {};
const Contact = require('../models/Contact');

contactsCtrl.renderContactForm = (req, res) => {
    res.render('contacts/new-contact');
};

contactsCtrl.createNewContact = async (req, res) => {
    const {name, lastname, email, phone} = req.body;

    const newContact = new Contact({
        name,
        lastname,
        email,
        phone
    });

    await newContact.save();

    res.redirect('/contacts');
}

contactsCtrl.renderContacts = async (req, res) => {
    const contacts = await Contact.find().lean();
    res.render('contacts/all-notes', { contacts });
}

contactsCtrl.renderEditForm = (req, res) => {
    res.send('render edit form')
}

contactsCtrl.updateContact = (req, res) => {
    res.send('update contact')
}

contactsCtrl.deleteContact = async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.redirect('/contacts');
}

module.exports = contactsCtrl;