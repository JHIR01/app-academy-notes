/**
 * Create the data object that this function is expecting
 */

function printUserWebsites(users){
    for(var i = 0; i < users.length; i++){
        var user = users[i];
        console.log("--" + user.username + "--");
        for(var j = 0; j < user.sites.length; j++){
            var site = user.sites[j];
            console.log(' -' + site.url);
        };
    };
};

var users2 = [
    {
        username: 'azablan',
        sites: [
            {url: 'www.alvin.com'},
            {url: 'facebook.com'}
        ]
    },
    {
        username: 'Jacob',
        sites: [
            {url: 'www.chase.net'},
            {url: 'YouTube.com'}
        ]
    },
    {
        username: 'Henry',
        sites: [
            {url: 'mangadex.org'},
            {url: 'monkeytype.com'}
        ]
    }
];

printUserWebsites(users2);