class UserList {
    constructor () {
        this.users = [];
        }

    addUser(user) {
        this.users.push(user);
    }

    getUserById() {
        return this.users;
}

    getUserById(id) {
        const user = this.users.find(user => user.id == id);
        if(!user) {
            throw new Error('User not found!');
        }
        return user;
}

    updateUserById(id, UpdateData) {
        let user = this.getUserById(id);
        Object.assign(user, UpdateData);
        return user;
}

    deleteUserById(id) {
        this.users = this.users.filter(user => user.id != id);

}

}

module.exports = UserList;