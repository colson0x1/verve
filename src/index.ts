import { User } from './models/User';

const user = new User({ id: 13, name: 'Madison Square Garden', age: 40 });

user.on('save', () => {
  console.log(user);
});

user.save();
