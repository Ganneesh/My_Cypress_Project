function test(person) {
    if (person == { name: 'paul' }) {
      return 'hey paul'
    } else {
      return 'hey arnold'
    }
  }
  let ans=test({ name: 'paul' })
  console.log(ans)

let users = [
    { name: 'John', age: 25, occupation: 'IT' },
    { name: 'Lenny', age: 51, occupation: 'Manager' },
    { name: 'Andrew', age: 43, occupation: 'Support' },
    { name: 'Peter', age: 81, occupation: 'Support' },
    { name: 'Anna', age: 39, occupation: 'Manager' },
    { name: 'Albert', age: 76, occupation: 'Manager' },


]

// users.push({name:'Ganesh',age: 35,occupation: 'Test Engineer',})

// console.log(users)

// //console.log(users);
// /**
//  output:
// users = [
// { name: 'Lenny', age: 51, occupation: 'Manager' },
// { name: 'Albert', age: 76, occupation: 'Manager' }
// ]
//  */

for(let i=0;i<users.length;i++)

{
    //onsole.log(users[i])
    if( users[i].age>=51 && users[i].occupation==='Manager')
        {
            console.log(users[i])
        }
       
    }




// let test

// console.log(test)