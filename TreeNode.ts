class TreeNode {
    left: any;
    right: any;
    color: boolean;
    val: number;
    
    constructor(left: any, right: any, val: number, color: boolean) {
        if(typeof left==null){
            this.left = null
        }else{
            this.left = left;
        }
        if(typeof right==null){
            this.right = null
        }else{
            this.right = right;
        }
        
        this.color = color;
        this.val = val;
    }
}

export default TreeNode;