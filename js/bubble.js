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
        this.bubble_count = bubble_count
        this.bool_x       = Array(this.bubble_count).fill(1)
        this.bool_y       = Array(this.bubble_count).fill(1)
        this.max_x        = document.body.scrollWidth
        this.max_y        = document.body.scrollHeight
        this.x_speed      = x_speed
        this.y_speed      = y_speed
        this.randSpeeds   = {x:range(1,15),y:range(1,15)}
        this.randSpeed    = false
        this.randSize     = false
        this.randSizes    = range(2,150,2)
        this.x            = []
        
    }
    path = (x,y,i)=>{
        if(this.x[i]>=0 && this.x[i]<=this.max_x-0 && bool_x) this.x[i]+=x_k
        else{
            if(x>=0){
                bool_x = 0
                this.x[i]-=this.randSpeed ? rand(this.randSpeeds.x): this.x_speed
            }
            else{
                bool_x = 1
                this.x[i]+=this.randSpeed ? rand(this.randSpeeds.x): this.x_speed
            }
        }
        if(this.y[i]>=0 && this.y[i]<=this.max_y-0  && this.bool_y[i]) this.y[i]+=y_k
        else{
            if(y>=0){
                bool_y = this.randSpeed ? rand(this.randSpeeds.y): this.x_speed
                y-=y_k
            }
            else{
                bool_y = this.randSpeed ? rand(this.randSpeeds.y): this.x_speed
                y+=y_k
            }
        }
        return [x,y]
    }
    animate = () =>{
        this.parent.classList.toggle('bg')
        let i=0,div,y=0;
        for(i=0;i<this.bubble_count;i++){
            y=rand(this.randSizes)
            div=document.createElement('div');
            div.className = 'bubble'
            div.style.width  = `${y}px`
            div.style.height = `${y}px`
            this.parent.appendChild(div)
        }
        for(i=0;i<this.bubble_count;i++){
            this.x[i]=0
            this.y[i]=0;
            for(let j=0;j<this.bubble_count;j++){{
                [x,y]=this.path(x,y,j)
                div.style.left = `${x}px`
                div.style.top  = `${y}px`
            }
        }
    }
}

let b = new bubble('main',40)
b.animate()