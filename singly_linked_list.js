
//creating node
class Node{
    constructor(value, next=null){
        this.value=value;
        this.next=next;
    }
}

//creating linked list
class LinkedList{
    constructor(value){
        let node = new Node(value);
        this.head = node;
        this.tail=node;
        this.length=1;
    }

//adding value in last position
    append(value){
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

//adding value in first position
    prepand(value){
        let node = new Node(value, this.head);
        this.head=node;
        this.length++;
    }

//printing all the values
    print(){
        let data=this.head;
        while(data){
            console.log(data.value);
            data=data.next;
        }
    }


//adding value any positiom
    appendAt(value,position){
        if(position==1){
            this.prepand(value);

        }
        else if(position ==this.length+1){
            this.append(value);
        }
        else{
            let node = new Node(value);
            let preNode = this.findNode(position-1);
            node.next = preNode.next;
            preNode.next = node;
            this.length++;

        }


        
    }

//deleting value in any position
    deleteAt(position){
        if(position==1){
            this.head= this.head.next;
            this.length--;
        }
        else{
            let preNode = this.findNode(position-1);
            preNode.next = preNode.next.next;
            this.length--;
        }
    }

//updating value
    update(value,position){
        let node = this.findNode(position);
        node.value=value;
    }


//find any node
    findNode(n){
        let count = 1;
        let data = this.head;
        while(data){
            if(count==n) break;
            count++;
            data=data.next;
        }
        return data;
    }
}

let list = new LinkedList(100);
list.append(200);
list.prepand(50);
list.appendAt(40,1);
list.appendAt(300,5);
list.appendAt(700,4);
list.deleteAt(1);
list.deleteAt(3);
list.update(900,3);

//list.print()


console.log(list.head)
