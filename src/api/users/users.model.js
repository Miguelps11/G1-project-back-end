const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { setError } = require('../../utils/error/error');

const { validationPassword, validationEmail } = require('../../utils/validators/validators');
const userSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        password: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true }
        
    }
);

userSchema.pre("save", function(next){
    if (!validationPassword(this.password)) {
        
        return next(setError(404, 'Recuerda que la contraseña debe tener al menos 8 caracteres, 1 de ellos especial, 1 letra mayuscula, 1 letra minuscula, 1 numero.'))
    }
    if (!validationEmail(this.email)) {
       
        return next(setError(404, 'Chequear que el email es correcto'))
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model('users', userSchema);
module.exports = User;