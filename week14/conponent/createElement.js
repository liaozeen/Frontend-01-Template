export function createElement(Cls,attributes,...children){
    let o

    if(typeof Cls === 'string'){
        o = new Wrapper(Cls)
    }else{
        o = new Cls({
            timer:{}
        })
    }

    for(let name in attributes){
        o.setAttribute(name,attributes[name])
    }

    // console.log(o)
    let visit = (children) => {
        for(let child of children){
            if(child instanceof Array){
                visit(child)
                continue;
            }
            if(typeof child === 'string'){
                child = new Text(child)
            }
            o.appendChild(child)
        }
    }
    visit(children)

    return o
}

export class Text{
    constructor(text){
        this.children = []
        this.root = document.createTextNode(text)
    }

    // 挂在到父元素上
    mountTo(parent){
        parent.appendChild(this.root)
    }
}

export class Wrapper{
    constructor(type){
        this.children = []
        this.root = document.createElement(type)
    }

    setAttribute(name,value){ // attribute
        this.root.setAttribute(name,value)
    }

    get style(){
        return this.root.style
    }

    appendChild(child){
        this.children.push(child)
    }

    addEventListener(){
        this.root.addEventListener(...arguments)
    }

    mountTo(parent){
        parent.appendChild(this.root)

        for(let child of this.children){
            child.mountTo(this.root)
        }
    }
}