const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//direction to User.js
const User = require('./User');
const Users = require('./Users');
const Group = require('./Group');
const Groups = require('./Groups');
const UserToGroups = require('./UserToGroups');

let users = new Users();
let groups = new Groups();
let userToGroups = new UserToGroups();
var choice=1;

menuOptions();

function menuOptions(){
    r1.question('0) Enter to exit\n1) Enter to create a user\n2) Enter to delete a user.\n3) Enter to print the list of users\n' +
        '4) Enter to create a group\n5) Enter to delete a group\n6) Enter to print the list of groups\n' +
        '7) Enter to add user to group\n8) Enter to remove user from group\n9) Enter to print all the users in the groups\n' +
        '10) Enter to update user password and age\n', main)
    function main(input){
        choice = parseInt(input);
        switch (choice) {
            case 0:
                process.exit(1);
                break;
            case 1:
                createUser();
                break;
            case 2:
                deleteUser();
                break;
            case 3:
                printUsernames();
                break;
            case 4:
                createGroup();
                break;
            case 5:
                deleteGroup();
                break;
            case 6:
                printGroups();
                break;
            case 7:
                addUserToGroup();
                break;
            case 8:
                removeUserFromGroup();
                break;
            case 9:
                printGroupUsers();
                break;
            case 10:
                updateUserOption();
                break;
            default:
                console.log("Wrong answer, please try again!!");
                menuOptions();
                break;
        }
    }
}
function updateUserOption() {
    var username,age,password;
    r1.question('input the username that you want to change it: ',updateUser);
    function updateUser(input) {
        username = input;
        if (users.checkIfExist(username)){
            r1.question('input a new password to change it: ', updatePassword);
        }
    }
    function updatePassword(input) {
        password = input;
        r1.question('input your age: ',updateAge);
    }
    function updateAge(input) {
        age = input;
        users.updateUser(username,password,age);
        menuOptions();
    }

}
function printGroupUsers() {
    var user = [];
    var nameGroup;
    for (var i = 0; i< groups.getLength();i++){
        nameGroup = groups.getName(i);
        user = userToGroups.printGroupAndUsers(nameGroup);
        console.log(nameGroup);
        for (var j =0; j<user.length;j++){
            if (users.checkIfExist(user[j])) {
                console.log("\t" + '' + user[j] + ' (' + users.getUserAge(user[j]) + ')');
            }
        }
    }
    menuOptions();
}

function removeUserFromGroup() {
    var nameOfGroup, username;
    r1.question('input the username to delete: ',removeUser);
    function removeUser(input) {
        username = input;
        r1.question('input the group name: ', groupName);
    }
    function groupName(input) {
        nameOfGroup = input;
        userToGroups.removeUserFromGroup(username,nameOfGroup);
        menuOptions();
    }
}

function addUserToGroup() {
    var nameOfGroup, username;
    r1.question('input the username: ',addUser);
    function addUser(input) {
        username = input;
        if (users.checkIfExist(username)) {
            r1.question('input the group name: ', addGroupName);
        }else{
            console.log("there isn't user name like: "+username);
            console.log('please try again\n');
            menuOptions();
        }
    }
    function addGroupName(input) {
        nameOfGroup = input;
        if (groups.checkIfExist(nameOfGroup)) {
            userToGroups.addUserToGroup(username, nameOfGroup);
        }else{
            console.log("there isn't group name like: "+ nameOfGroup);
            console.log('please try again\n');
        }
        menuOptions();
    }

}

function printGroups() {
    groups.print();
    menuOptions();
}

function deleteGroup() {
    var groupName;
    r1.question('input the group name to delete: ',groupToDelete);
    function groupToDelete(input) {
        groupName = input;
        groups.removeGroup(groupName);
        menuOptions();

    }
}

function createGroup() {
    var nameOfGroup;
    r1.question('input the group name: ', addGroupName);

    function addGroupName(input) {
        nameOfGroup = input;
        var group = new Group(nameOfGroup);
        groups.addGroup(group);
        menuOptions();
    }
}

function deleteUser() {
    var username;
    r1.question('input the username to delete: ',usernameToDelete);
    function usernameToDelete(input) {
        username = input;
        users.removeUser(username);
        menuOptions();

    }
}

function printUsernames() {
    users.print();
    menuOptions();
}
function createUser() {
    var username, password, age;
    r1.question('input your username: ', passwordQuestion);

    function passwordQuestion(input) {
        username = input;
        r1.question('input your password: ', ageQuestion);
    }

    function ageQuestion(input) {
        password = input;
        r1.question('input your age: ', lastThing);
    }

    function lastThing(input) {
        age = input;
        var user = new User(username, password, age);
        users.addUser(user);
        menuOptions();
    }

}



