import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'Gersh Mirson',
    email: 'gershmirson@gmail.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: false,
  },
  {
    name: 'Idan Davidov',
    email: 'idandavidov@gmail.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: false,
  },
];

export default users;
