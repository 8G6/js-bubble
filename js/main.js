if(this.x[i]>=0 && this.x[i]<=this.max_x-0 && this.bool_x[i]) this.x[i]+=this.randSpeed ? rand(this.randSpeeds.y): this.x_speed
        else{
            if(this.x[i]>=0){
                this.bool_x[i] = 0
                this.x[i]-=this.randSpeed ? rand(this.randSpeeds.x): this.x_speed
            }
            else{
                this.bool_x[i] = 1
                this.x[i]+=this.randSpeed ? rand(this.randSpeeds.x): this.x_speed
            }
        }
        if(this.y[i]>=0 && this.y[i]<=this.max_y-0  && this.bool_y[i]) this.y[i]+=this.randSpeed ? rand(this.randSpeeds.y): this.y_speed
        else{
            if(this.y[i]>=0){
                this.bool_y[i] = 0
                this.y[i] -= this.randSpeed ? rand(this.randSpeeds.y): this.y_speed
            }
            else{
                this.bool_y[i] = 1
                this.y[i] += this.randSpeed ? rand(this.randSpeeds.y): this.y_speed
            }
        }