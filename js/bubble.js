let $     = (a,t=1)             => t ? document.querySelector(a) : document.querySelectorAll(a)
let rand  = (a)                 => a[Math.floor(Math.random()*a.length)]
let range = (start,end,step=1)  => {
    let arr = []
    let i;
    for(i=start;i<end+1;i+=step)
        arr.push(i)
    return arr
}
class Bubble{
    constructor(parent_id,bubble_count,x_speed=1,y_speed=1){
        this.parent       = $('#'+parent_id)
        this.bubble_count = bubble_count ?  bubble_count>500 ? alert('500<=bubble_count') : bubble_count : 10
        this.bool_x       = Array(this.bubble_count).fill(1)
        this.bool_y       = Array(this.bubble_count).fill(1)
        this.max_x        = screen.width
        this.max_y        = screen.height
        this.x_speed      = x_speed
        this.y_speed      = y_speed
        this.randSpeeds   = {x:range(1,10),y:range(1,10)}
        this.randSpeed    = false
        this.randSize     = false
        this.randSizes    = range(60,350,6)
        this.x            = Array(this.bubble_count).fill(0)
        this.y            = Array(this.bubble_count).fill(0)
        this.x_poss       = range(0,this.max_x,2)
        this.y_poss       = range(0,this.max_y,2)
        this.size         = 200
        this.y_offset     = 2
        this.x_offset     = 100
        this.timeout      = 15
    }
    path = (i,randSpeeds)=>{
        if(this.x[i]>=0 && this.x[i]<=this.max_x-this.x_offset && this.bool_x[i]) this.x[i]+=this.randSpeed ? rand(this.randSpeeds.y): this.x_speed
        else{
            if(this.x[i]>=this.x_offset){
                this.bool_x[i] = 0
                this.x[i]-=this.randSpeed ? randSpeeds.x : this.x_speed
            }
            else{
                this.bool_x[i] = 1
                this.x[i]+=this.randSpeed ? randSpeeds.x : this.x_speed
            }
        }
        if(this.y[i]>=0 && this.y[i]<=this.max_y-this.y_offset && this.bool_y[i]) this.y[i]+=this.randSpeed ? rand(this.randSpeeds.y): this.y_speed
        else{
            if(this.y[i]>=this.y_offset){
                this.bool_y[i] = 0
                this.y[i]-=this.randSpeed ? randSpeeds.y : this.y_speed
            }
            else{
                this.bool_y[i] = 1
                this.y[i]+=this.randSpeed ? randSpeeds.y : this.y_speed
            }
        }

        return [this.x[i],this.y[i]]
    }
    init = ()=>{
        this.parent.classList.toggle('bg')
        let i=0,div,y=0;
        for(i=0;i<this.bubble_count;i++){
            y= this.randSize ?  rand(this.randSizes) : this.size
            div=document.createElement('div');
            div.className = 'bubble'
            div.id        = `bubble-${i}`
            div.style.width  = `${y}px`
            div.style.height = `${y}px`
            this.x[i] = rand(this.x_poss)
            this.y[i] = rand(this.y_poss)
            div.style.left = `${this.x[i]}px`
            div.style.top  = `${this.y[i]}px`
            this.parent.appendChild(div)
        }
    }
    animate = () =>{
        let i;
        for(i=0;i<this.bubble_count;i++){
            [this.x[i],this.y[i]] = this.path(i,{
                x:rand(this.randSpeeds.x),
                y:rand(this.randSpeeds.y)
            })
            $(`#bubble-${i}`).style.left = `${this.x[i]}px`
            $(`#bubble-${i}`).style.top  = `${this.y[i]}px`
        }
        console.log(this.x,this.y)
    }
    start = (timeout=this.timeout) =>{
        this.init()
        setInterval(this.animate,timeout)
    }
}

