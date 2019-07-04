class Renderer {
    render(data) {
        $('#results').empty()
        const source = $("#food-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({recipe : data})
        $("#results").append(newHTML)
        
}
}