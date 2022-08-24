const users = [
    {
        id: 1,
        name: "Lesloulous",
        firstname: "Marina",
    },
    {
        id: 2,
        name: "Tiobarik",
        firstname: "Antoine",
    },
    {
        id: 3,
        name: "Prof",
        firstname: "Yohan",
    },
    {
        id: 4,
        name: "Pokora",
        firstname: "Julien",
    },
];

const Users = (req, res) => {
   res.status(200).send(users).json(users);
  };

const usersId = (req, res) => {
    const id = parseInt(req.params.id);
    const findId = users.find(user => id === (user.id));

    if(findId){
        res.status(200).json(findId);
    } else {
        res.status(404).send('Not Found');
    }
}
  

module.exports = {
    Users,
    usersId,
}