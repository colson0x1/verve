import { User } from './models/User';

const user = new User({ name: 'Colson', age: 24 });

user.set({ name: 'Colson NYC' });

console.log(user.get('name'));
console.log(user.get('age'));
