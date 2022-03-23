let $ = (a) => document.querySelector(a)
let rand  = (a) => a[Math.floor(Math.random()*a.length)]
let range = (start,end,step=1) => {
    let arr = []
    let i;
    for(i=start;i<end+1;i+=step)
        arr.push(i)
    return arr
}
class bubble{
    constructor(parent_id,bubble_count,x_speed=1,y_speed=1){
        this.parent       = $('#'+parent_id)
        this.ch
        this.bubble_count = bubble_count
        this.bool_x       = Array(this.bubble_count).fill(1)
        this.bool_y       = Array(this.bubble_count).fill(1)
        this.max_x        = document.body.scrollWidth
        this.max_y        = document.body.scrollHeight
        this.members_x    = range(0,this.max_x,x_speed)
        this.members_y    = range(0,this.max_y,y_speed)
    }
    path = (x,y,)=>{

        if(x>=0 && x<=this.max_x-0 && bool_x) x+=x_k
        else{
            if(x>=0){
                bool_x = 0
                x-=x_k
            }
            else{
                bool_x = 1
                x+=x_k
            }
        }
        if(y>=0 && y<=this.max_y-0  && bool_y) y+=y_k
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