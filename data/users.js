import bcrypct from 'bcryptjs';

const users = [
  {
    name: 'Mony Admin',
    email: 'monyadmin@gmail.com',
    password: bcrypct.hashSync('1234', 8),
    isAdmin: true,
  },
  {
    name: 'Gersh Mirson',
    email: 'gershmirson@gmail.com',
    password: bcrypct.hashSync('1234', 8),
    isAdmin: false,
  },
  {
    name: 'Idan Davidov',
    email: 'idandavidov@gmail.com',
    password: bcrypct.hashSync('1234', 8),
    isAdmin: false,
  },
];

export default users;
