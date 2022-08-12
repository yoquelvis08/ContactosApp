const usersCtrl = {};

usersCtrl.renderSingUpForm = (req, res) => {
    res.render('users/singup');
}

usersCtrl.singup = (req, res) => {
    res.send('singup');
}

usersCtrl.renderSinginForm = (req, res) => {
    res.render('users/singin');
}

usersCtrl.singin = (req, res) => {
    res.send('singin');
}

usersCtrl.logout = (req, res) => {
    res.send('logout');
}


module.exports = usersCtrl;