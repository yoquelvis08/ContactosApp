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

contactsCtrl.renderEditForm = async (req, res) => {
    const contact = await Contact.findById(req.params.id).lean();
    res.render('contacts/edit-contact', { contact });
}

contactsCtrl.updateContact = async (req, res) => {
    const { name, lastname, email, phone } = req.body;

    await Contact.findByIdAndUpdate(req.params.id, {
        name,
        lastname,
        email,
        phone
    });

    res.redirect('/contacts');
}

contactsCtrl.deleteContact = async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.redirect('/contacts');
}

module.exports = contactsCtrl;