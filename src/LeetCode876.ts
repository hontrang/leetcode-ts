import {ListNode} from "./ListNode";

function middleNode(head: ListNode | null): ListNode | null {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast != null && fast.next != null && slow != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}


function main(): void {
    let head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    middleNode(head)?.printListNode();
}

main();