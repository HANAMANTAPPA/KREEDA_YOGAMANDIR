// const mongoose = require ('mongoose');
// const bcrypt = require ('bcrypt');

// const appSchema = new mongoose.Schema ({
//   userName: {type: String, required: true},
//   userID: {type: String, required: true, unique: true},
//   email: {type: String, required: true, unique: true},
//   pwd: {type: String, required: true},
//   height: {type: Number, required: true},
//   weight: {type: Number, required: true},
//   date: {type: String, required: true},
// });

// appSchema.pre ('save', async function (next) {
//   if (!this.isModified ('pwd')) {
//     return next ();
//   }
//   try {
//     const salt = await bcrypt.genSalt (10);
//     this.pwd = await bcrypt.hash (this.pwd, salt);
//     next ();
//   } catch (error) {
//     next (error);
//   }
// });

// appSchema.methods.comparePassword = async function (candidatePassword) {
//   return bcrypt.compare (candidatePassword, this.pwd);
// };

// const userModel = mongoose.model ('test', appSchema);

// module.exports = userModel;
