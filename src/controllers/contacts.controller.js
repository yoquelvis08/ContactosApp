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

    newContact.user = req.user.id;
    await newContact.save();
    req.flash('success_msg', 'Contacto agregado correctamente.');
    res.redirect('/contacts');
}

contactsCtrl.renderContacts = async (req, res) => {
    const contacts = await Contact.find({user: req.user.id}).lean();
    res.render('contacts/all-notes', { contacts });
}

contactsCtrl.renderEditForm = async (req, res) => {
    const contact = await Contact.findById(req.params.id).sort({createdAt: 'desc'}).lean();
    if (contact.user != req.user.id) {
        req.flash('error_msg', 'Usuario no autorizado.');
        return res.redirect('/contacts');
    }
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

    req.flash('success_msg', 'Contacto actualizado correctamente.');
    res.redirect('/contacts');
}

contactsCtrl.deleteContact = async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Contacto eliminado correctamente.');
    res.redirect('/contacts');
}

// Pruebas

contactsCtrl.renderSendForm = async (req, res) => {
    const contact = await Contact.findById(req.params.id).lean();
    res.render('contacts/send-email', { contact });
}

module.exports = contactsCtrl;