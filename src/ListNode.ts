export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    printListNode() {
        let node: ListNode | null = this;
        while (node != null) {
            console.log(node.val);
            node = node.next;
        }
    }
}