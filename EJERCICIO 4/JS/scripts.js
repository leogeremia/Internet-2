$("#submit").on("click", function (event) {
    event.preventDefault();
    var title = $("#title").val();
    var description = $("#description").val();
    var cast = $("#cast").val();
    var gender = $("#gender").val();
    var poster = $("#poster").val();
    var score = $("#score").val();
    console.log(title, description, cast, gender, poster, score);
    sendData({
        title: title,
        description: description,
        cast: cast,
        gender: gender,
        poster: poster,
        score: score,
    }).then(succes, onerror);
    //Se setean los parametros que luego seràn rellenados y enviados para almacenarse. Ir a la pagina. Console. Network. Envio formulario.
    //se agrega un item. Lo abro, header -- preview "la info ha sido guardada por ejemplo".
    function succes(response) {
        $(".hide").append("<p>" + response.msg + "</p>");
        $(".hide").show();

    };
    function onerror(err) {

    };


});

function getAllFilms() {
    $.ajax({
        url: "http://192.168.1.115:3000/peliculas",
        method: "GET",
    }).then(succesget, onerrorget);

};


function succesget(response) {
    listMovies.setData(response);
    listMovies.listAll();

};

function onerrorget(err) {

};

function getFilmsById(id) {
    return $.ajax({
        url: "http://192.168.1.115:3000/peliculas/"+id,
        method: "GET",
    })

};

// --------------- x --------------------- //


var listMovies = {

    data: [],

    setData: function (response) {

        listMovies.data = response

    },

    listAll: function () {
        for (var i = 0; listMovies.data.length > i; i++) {
            $(".wrapper").append(listMovies.assemble(listMovies.data[i]));
        };


        $(".morei").on("click", function () {

            clear();
            var id= $(this).attr("data-id");
            
            getFilmsById(id).then(function(res){
             console.log(res);       
           
                $(".wrapper").html(oneassamble(res))
                
$(".back").on("click",function(){
    clear();
    getAllFilms();
});

            });
            

        })
    },

    assemble: function (data) {
        return '<article>' +
            '<img class="posters" src="' + data.poster + '" />'
            + "<HR WIDTH=250 SIZE=3>"
            + '<h5>' + data.title + '</h5>'
            + '<br>'
            + '<p class="titulos">Gender:</p>'
            + '<p class="info">' + data.gender + '</p>'
            + '<p class="titulos">Score:</p>'
            + '<p class="info">' + data.score + '</p>'
            + ' <button class="morei" data-id="'+data._id+'">More Information</button>'
            + '</article>'
    },
}

//------------------x-----------------//

getAllFilms();

function sendData(params) {
    return $.ajax({
        method: "POST",
        url: "http://192.168.1.115:3000/peliculas",
        data: params,
    })

}

function clear() {

    $(".wrapper").html(" ")

}

function oneassamble(data) {
    return '<article>' +
    ' <button class="back">Back</button>'
        +'<img class="posters" src="' + data.poster + '" />'
        + "<HR WIDTH=250 SIZE=3>"
        + '<h5>' + data.title + '</h5>'
        + '<br>'
        + '<p class="titulos">Gender:</p>'
        + '<p class="info">' + data.gender + '</p>'
        + '<p class="titulos">Score:</p>'
        + '<p class="info">' + data.score + '</p>'
        + '</article>'
        + '<article class="moreinfo">'
        + '<h5>More Information</h5>'
        + '<br>'
        + '<p class="titulos">Description:</p>'
        + '<p class="info">' + data.description + '</p>'
        + '<p class="titulos">Cast:</p>'
        + '<p class="info">' + data.cast + '</p>'
        + '</article>'


};




















//function assemble(data){
//    return   "<td><tr><img src="+poster1.png+"></tr>"+
//            +"<tr>Id:"+pid+"</tr>"+
//            +"<tr>Title:"+title+"</tr>"+
//            +"<tr>Description:"+description+"</tr>"+
//            +"<tr>Cast:"+cast+"</tr>"+
//            +"<tr>Length:"+length+"</tr>"+
//            +"<tr>Score:"+score+"</tr></td>"
//};

//Submit envia por defecto el formulario. Y refresca para eso. Como vamos a hacerlo manual, no es necesario que se refresque.
//Submit tambièn ejecuta las acciones que quiere el formulario.
//Event es para decirle que pase lo que digamos. preventDefault es para que no se refresque. Corto el evento.


//----------------------------------------x----------------------------------------

//se toman los valores de los inputs, y se asignan a variables 
//lo de event es cuando usas el boton que refresca la pagina
//form es para formulario, con lebels para las categorias

//Orden para que funcione todo bien 

//JQUERY
//BOOTSTRAP
//*.CSS
//<BODY>
//MICODIGO
//<SCRIPT
//</BODY>

//----------------------------------------x----------------------------------------

//Enviamos esta info en modo post para que se almacene.

//Toma de data los parametros (que se le entregan en la funcion on(click etc) ) y los envia en metodo post a esa url


