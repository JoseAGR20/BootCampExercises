function findByUserName(users, username) {
    return users.find(function(user) {
        return user.username === username;
    });
}

function removeUser(arr, username) {
    let atidx = arr.findIndex(function(user) {
        return user.username ===username;
    })
    if(atidx === -1) return;
    return arr.splice(atidx,1)[0];
}