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

    def middle_element(self):
        if self.head is None:
            print("-1")
        else:
            fast_pointer = self.head
            slow_pointer = self.head
            while fast_pointer!=None and fast_pointer.next!=None:
                slow_pointer = slow_pointer.next 
                fast_pointer = fast_pointer.next.next
            middle = slow_pointer
            print(slow_pointer.data)
                       
l1 = LinkNode()
l1.add_begin(6)
l1.add_begin(5)
l1.add_begin(4)
l1.add_begin(3)
l1.add_begin(2)
l1.add_begin(1)
l1.middle_element()
l1.print_list()