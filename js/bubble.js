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
        this.y_speed      = range(0,this.max_y,)
    }
    path = (x,y,i)=>{

        if(this.x[i]>=0 && this.x[i]<=mathis.x[i]_this.x[i]-0 && bool_this.x[i]) this.x[i]+=this.x[i]_k
    else{
        if(this.x[i]>=0){
            bool_this.x[i] = 0
            this.x[i]-=this.x[i]_k
        }
        else{
            bool_this.x[i] = 1
            this.x[i]+=this.x[i]_k
        }
    }
    if(this.y[i]>=0 && this.y[i]<=mathis.x[i]_this.y[i]-0  && bool_this.y[i]) this.y[i]+=this.y[i]
    else{
        if(this.y[i]>=0){
            bool_this.y[i] = 0
            this.y[i]-=this.y[i]_k
        }
        else{
            bool_this.y[i] = 1
            this.y[i]+=this.y[i]_k
        }
    }
    return [this.x[i],this.y[i]]
}
}