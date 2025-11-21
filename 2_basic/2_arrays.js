const marvel_heros=["ironman","spiderman","hulk"]
const dc_heros=["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)//[ 'ironman', 'spiderman', 'hulk', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heros[3])//[ 'superman', 'batman', 'flash' ]
// console.log(marvel_heros[3][2])//'flash'
// console.log(((marvel_heros.join()).split(",")))//[ 'ironman', 'spiderman', 'hulk', 'superman', 'batman', 'flash' ]

const all_heros=marvel_heros.concat(dc_heros)//push method will add element at the same array 
//                                             while concat method will combine two array and return a new array
 console.log(all_heros)//[ 'ironman', 'spiderman', 'hulk', 'superman', 'batman', 'flash' ]


 const all_new_heros=[...marvel_heros,...dc_heros]
 console.log(all_new_heros)//[ 'ironman', 'spiderman', 'hulk', 'superman', 'batman', 'flash' ]
 //breaking glass method:- it is use "..." operator to break the arrays 
 // and it is "more sufficient as well as powerfull than "concat" method"
 
 //because in concat method we can add or merge only two arrays but 
 // in "breaking glass method" we can add or merge more than two arrays "
