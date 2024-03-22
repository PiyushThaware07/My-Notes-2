class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class LinkNode:
    def __init__(self):
        self.head = None

    def add_begin(self,data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    
    def print_list(self):
        if self.head is None:
            print("Linked List Empty !!!")
        else:
            while self.head!=None:
                print(self.head.data,end=" --> ")
                self.head = self.head.next
            print("NULL")
                       
    def get_Nthelement(self,n):
        length = 0
        head = self.head
        while head:
            length +=1
            head = head.next
        print(length)
        position_from_start = length-n
        print(position_from_start)
        head = self.head
        if position_from_start>=0:
            for i in range(position_from_start):
                head = head.next
            found = head.data
            print("Result",found)
        print(-1)

l1 = LinkNode()
l1.add_begin(500)
l1.add_begin(334)
l1.get_Nthelement(18)
l1.print_list()