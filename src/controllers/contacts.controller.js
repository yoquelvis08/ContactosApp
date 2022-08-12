const contactsCtrl = {};

contactsCtrl.renderContactForm = (req, res) => {
    res.render('contacts/new-contact');
};

contactsCtrl.createNewContact = (req, res) => {
    console.table(req.body)
    res.send('new contact')
}

contactsCtrl.renderContacts = (req, res) => {
    res.send('render contacts')
}

contactsCtrl.renderEditForm = (req, res) => {
    res.send('render edit form')
}

contactsCtrl.updateContact = (req, res) => {
    res.send('update contact')
}

contactsCtrl.deleteContact = (req, res) => {
    res.send('deleting contact')
}

module.exports = contactsCtrl;