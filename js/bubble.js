let $ = (a) => document.querySelector(a)

class bubble{
    constructor(parent_id){
        this.parent = $('#'+parent_id)
    }
}