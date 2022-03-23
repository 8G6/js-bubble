let $     = (a,t=1)             => t ? document.querySelector(a) : document.querySelectorAll(a)
let rand  = (a)                 => a[Math.floor(Math.random()*a.length)]
let range = (start,end,step=1)  => {
    let arr = []
    let i;
    for(i=start;i<end+1;i+=step)
        arr.push(i)
    return arr
}
class bubble{
    constructor(parent_id,bubble_count,x_speed=1,y_speed=1){
        this.parent       = $('#'+parent_id)
        this.childern     = 
        this.bubble_count = bubble_count
        this.bool_x       = Array(this.bubble_count).fill(1)
        this.bool_y       = Array(this.bubble_count).fill(1)
        this.max_x        = document.body.scrollWidth
        this.max_y        = document.body.scrollHeight
        this.x_speed      = x_speed
        this.y_speed      = y_speed
    }
    path = (x,y,i)=>{
        if(this.x[i]>=0 && this.x[i]<=max_x-0 && bool_x) x+=x_k
        else{
            if(x>=0){
                bool_x = 0
                this.x[i]-=x_k
            }
            else{
                bool_x = 1
                this.x[i]+=x_k
            }
        }
        if(y>=0 && y<=max_y-0  && bool_y) y+=y_k
        else{
            if(y>=0){
                bool_y = 0
                y-=y_k
            }
            else{
                bool_y = 1
                y+=y_k
            }
        }
        return [x,y]
    }
}