const r = new Renderer()
const getIngredient = function(){
    let input = $("#name").val()
    console.log(input)
    $.get(`/recipes/${input}`, function(response){
        $("#results").empty()
        r.render(response)
      $('img').on('click', function(){
    const id = $(this).closest('.box').find('h1').text()
    console.log(id)
})  
     })

}

//     // for(let i =0; i < data.length ; i++){
//     //     if(data[i].idMeal === id)
//     //         console.log(data[i].ingredients[0])
//     //     break
//     // }
// }
 // console.log(response) //array of apartments to render
        //Your code goes here.
        // const source = $("#player-template").html()
        // const template = Handlebars.compile(source)
        // const newHTML = template({recipe : response})
        // $("#results").append(newHTML)