

let myobj={

show:function(){
   return  (this.firstname+" "+this.lastname)
}
}


const myinfo={

    firstname:"Ganesh",
    lastname:"Madane"

}

let show=myobj.show.apply(myinfo)
console.log(show)