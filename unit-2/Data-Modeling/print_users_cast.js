/**
 * Create the data object that this function is expecting
 */

function printUsers(users){
    for(var i = 0; i < users.length; i++){
        var user = users[i];
        console.log(user.id + ": " + user.username);
    };
};

var users1 = [
    {
        id: 0, username: 'Jacob'
    },
    {
        id: 1, username: 'Chase'
    },
    {
        id: 42, username: 'Phi'
    }
];

printUsers(users1);