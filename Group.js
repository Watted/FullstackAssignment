function Group(nameOfGroup) {
    this.nameOfGroup = nameOfGroup;
    this.usersOfGroup = [];

}
Group.prototype.getGroupName = function () {
    return this.nameOfGroup;
};
Group.prototype.setGroupName = function(name){
    this.nameOfGroup = name;
};
Group.prototype.getUsersOfGroup = function () {
    return this.usersOfGroup;
};
Group.prototype.getLength = function () {
    return this.usersOfGroup.length;
};
Group.prototype.getUser = function (i) {
    return this.usersOfGroup[i];
};
Group.prototype.setUsersOfGroup = function(user){
    this.usersOfGroup.push(user);
};
Group.prototype.removeUser = function(user){
    for (var i =0 ;i<this.usersOfGroup.length;i++){
        if (this.usersOfGroup[i]===user) {
            this.usersOfGroup.splice(i, 1);
            return true;
        }
    }
    return false;
};

Group.prototype.printAllUsers = function(){
    for (var j =0;j<this.usersOfGroup.length;j++) {
        console.log("\t" + '' + this.usersOfGroup[j] + ' (' + /*users.getUserAge(user[j])*/ + ')');
    }
}

Group.prototype.checkIfExist = function (user) {
    for (var i =0 ;i<this.usersOfGroup.length;i++){
        if (this.usersOfGroup[i]===user){
            return true;
        }
    }
    return false;
};

module.exports = Group;