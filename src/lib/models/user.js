import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email for this user.'],
    unique: true,
    maxlength: [60, 'Email cannot be more than 60 characters']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password for this user.'],
    minlength: [8, 'Password cannot be less than 8 characters']
  }
});

// Pre-save hook to hash the password
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

export default UserModel;
