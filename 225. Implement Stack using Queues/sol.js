/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.stack1=[]
    this.stack2=[]
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack1.unshift(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    var poped=this.stack1[0]
    while(this.stack1.length!=0 && this.stack1){
        this.stack2.unshift(this.stack1.shift())
    }
    this.stack2.pop()
    return poped
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.stack1.length>0) return this.stack1[0]
    return this.stack2[this.stack2.length-1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.stack2.length==0 && this.stack1.length==0) return true
    return false
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */