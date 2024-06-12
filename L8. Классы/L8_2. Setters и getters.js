'use strict'

const task = {
    title: 'Task1',
    dueTo: new Date('2023/07/07'),

    // metoda 'isOverDue()' - care controleaza daca
    // ia trecut termenul de executsie lui task
    isOverDue() {
        return this.dueTo < new Date()
    }
}

console.log(task)
console.log(task.isOverDue()) //true //este prosrocenaia

//acuma fix aceasta facem cu Setter si Getter

const taskGS = {
    title: 'Task1',
    dueTo: new Date('2023/07/07'),

    //Deja 'isOverDue()' nu este metoda, datorita lui 'Getter'
    get isOverDue() {
        return this.dueTo < new Date()
    },

    //analog cu 'Setter'
    set isOverDue(isOverDueTask) { //la 'set' tot timpul trebie ceva sa primeasca -'isOverDueTask'
        if (!isOverDueTask) {
            this.dueTo = new Date()
        }
    }
}

// console.log(taskGS.isOverDue()) //TypeError: taskGS.isOverDue is not a function
// ne adresam la 'isOverDue' ca la proprietate (fara paranteze '()')
console.log(taskGS.isOverDue) //true
taskGS.isOverDue = false //ne adresam ca la proprietate
//si atribuiem 'false' atunci data va fi de azi:dueTo: Wed Jun 12 2024
//daca true, atunci data va ramine:dueTo: Fri Jul 07 2023 
console.log(taskGS)
console.log(taskGS.isOverDue) //false //nu este prosrocenaia

console.log('Exemplu dat cu ajutorul Claselor:')

class Task {
    constructor(title, dueDate) {
        this.title = title,
            this.dueDate = dueDate
    }

    get isOverDue() {
        return this.dueDate < new Date()
    }

    set dueDate(date) { //validatsia datei
        if (date < new Date()) {
            return
        }
        this._dueDate = date

    }
}

const newTask = new Task('Task2', new Date('2024/08/08'))
//stabilim data limita executare a taskului
// console.log(newTask.dueDate = new Date('2024/12/12'))
console.log(newTask)
console.log(newTask.isOverDue) //false// nu e prosrocenaia
