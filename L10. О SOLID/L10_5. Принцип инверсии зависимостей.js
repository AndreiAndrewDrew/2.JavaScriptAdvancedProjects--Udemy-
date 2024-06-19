'use strict'

class DB {
    save(items) {
        console.log(`Saved to DB: ${items}`)
    }
    //se salveaza in baza de date
}

class MongoDb extends DB {
    save(items) {
        console.log(`Saved to MongoDB: ${items}`)
    }
}

class ToDoList {
    items = [1, 2, 3, 4]
    db
    constructor(db) { //asa realizatie 'ToDoList' nu depinde de baza de date
        //putem sai dam orice baza de date
        this.db = db
    }
    saveToDB() {
        this.db.save(this.items)
    }
}

const list1 = new ToDoList(new DB())
list1.saveToDB() //Saved to DB: 1,2,3,4

const list2 = new ToDoList(new MongoDb())
list2.saveToDB() //Saved to MongoDB: 1,2,3,4