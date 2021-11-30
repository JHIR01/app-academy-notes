/**
 * Create the data object that this function is expecting
 */

function printUsersWebsitesInfo(users){
    for(var i = 0; i < users.length; i++){
        var user = users[i];
        console.log('--' + user.username + '--');
        for(var j = 0; j < users.length;j++){
            var site = user.sites[j];
            console.log(' -' + site.url);
            console.log('   -load' + site.load + "%");
            console.log('   -# of users: ' + site.userCount);
            console.log('   -popularity score: ' + site.pop);
        }
    }
}

var users3 = [
    {
        username: 'Tommy',
        sites: [
            {
                url: 'tommy.com', 
                load: 21, 
                userCount: 100,
                pop: 42
            }, 
            {
                url: 'a/A.io', 
                load: 28, 
                userCount: 1000,
                pop: 32
            },
            {
                url: 'youtube.com', 
                load: 22, 
                userCount: 100,
                pop: 42
            }
        ]
    },
    {
        username: 'Fred',
        sites: [
            {
                url: 'Fred.com', 
                load: 21, 
                userCount: 100,
                pop: 42
            }, 
            {
                url: 'Fullstack.com', 
                load: 30, 
                userCount: 1000,
                pop: 42
            },
            {
                url: 'mangadex', 
                load: 12, 
                userCount: 1200,
                pop: 41
            }
        ]
    },
];

printUsersWebsitesInfo(users3);