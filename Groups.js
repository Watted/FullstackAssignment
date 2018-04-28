const group = require('./Group');
const userToGroup = require('./UserToGroup');
function Groups() {
    this.groups = [];
}
Groups.prototype.checkIfExist = function(name) {
    for (var i = 0; i < this.groups.length;i++){
        if (this.groups[i].getGroupName()===name){
            return true;
        }
    }
};
Groups.prototype.getName = function(i) {
    return this.groups[i].getGroupName();
};
Groups.prototype.getLength = function(group) {
    return this.groups.length;
};
Groups.prototype.addGroup = function(group) {
    var flag=0;
    for (var i = 0 ; i< this.groups.length;i++){
        if (this.groups[i].getGroupName() === group.getGroupName()){
            flag = 1;
        }
    }
    if (flag===0) {
        this.groups.push(group);
        console.log('The group created\n');
    }else{
        console.log("The group is already exist!");
    }

};

Groups.prototype.removeGroup = function(group) {
    var flag = 0;
    for (var i = 0 ; i< this.groups.length;i++){
        if (this.groups[i].getGroupName() === group){
            flag=1;
            this.groups.splice(i, 1);
            console.log('the group removed\n');
            break;
        }
    }
    if(flag===0){
        console.log("The group doesn't exist!!");
    }
};

Groups.prototype.print = function() {
    for (var i = 0; i<this.groups.length;i++){
        console.log(this.groups[i].getGroupName());
    }
};

module.exports = Groups;