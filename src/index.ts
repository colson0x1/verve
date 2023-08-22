import { User } from './models/User';

// const user = new User({ id: 1 });
// user.set({ name: 'Colson NYC', age: 28 });

const user = new User({ name: 'Apple', age: 30 });

user.save();
