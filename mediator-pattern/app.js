class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, to) {
        this.chatroom.send(message,this,to);
    }
    recieve(message,from) {
        console.log(`${from.name} to ${this.name}: ${message}`); 
    }
}



class Chatroom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.chatroom = this;
    }
    send(message, from, to) {
        if (to) {
            to.recieve(message,from);
        } else {
            for (const key in this.users) {
                if (this.users[key] !== from) {
                    this.users[key].recieve(message,from);
                    
                }
            }
        }
    }
}

const dave = new User('Dave');
const larry = new User('Larry');
const sara = new User('Sara');
const murph = new User('Murph');

const chatroom = new Chatroom();

chatroom.register(dave);
chatroom.register(larry);
chatroom.register(sara);
chatroom.register(murph);

dave.send('Hello Sara. You are great', sara);
sara.send('Hello Murph. You are fun', murph);
larry.send('Fruits are in the kitchen');