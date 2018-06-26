var tabla = {
    data:[],
    setData:function(Data){
        tabla.data = Data;
    },

    clear:function(){
        $("#tabla-body").html("");
    },
    listAll:function(){
        tabla.clear();
        for(var i = 0; i < tabla.data.length; i++){
            $("#tabla-body").append(tabla.assamble(tabla.data[i]));
        }
    },
    assamble:function(Data){
        return '<div class="row">' +
                '<span class="col-2">' + '</span>' +
                '<span class="col-2">' + Data.brand + '</span>' +
                '<span class="col-2">' + Data.location + '</span>' +
                '<span class="col-2">' + Data.lunch + '</span>' +
                '<span class="col-2">' + Data.price + '</span>' +
                '<span class="col-2">' + '</span>' +
                '<span class="description col-12">' + "" + '</span>' +
            '</div>';
    },
    filtroBrand:function(){
        tabla.clear();
        var input = document.getElementById("BrandInput").value;
        if(input == ""){
            tabla.listAll();
        }
        for(var i = 0; i < tabla.data.length; i++){
            if(tabla.data[i].brand == input){
                $("#tabla-body").append(tabla.assamble(tabla.data[i]));
            }
        }
    },

    filtroLocation:function(){
        tabla.clear();
        var input = document.getElementById("LocationInput").value;
        if(input == ""){
            tabla.listAll();
        }
        for(var i = 0; i < tabla.data.length; i++){
            if(tabla.data[i].location == input){
                $("#tabla-body").append(tabla.assamble(tabla.data[i]));
            }
        }
    },

    filtroLaunch:function(){
        tabla.clear();
        var input = document.getElementById("LaunchInput").value;
        if(input == ""){
            tabla.listAll();
        }
        for(var i = 0; i < tabla.data.length; i++){
            if(tabla.data[i].lunch == input){
                $("#tabla-body").append(tabla.assamble(tabla.data[i]));
            }
        }
    },

    filtroPrice:function(){
        tabla.clear();
        var input = document.getElementById("PriceInput").value;
        if(input == ""){
            tabla.listAll();
        }
        for(var i = 0; i < tabla.data.length; i++){
            if(tabla.data[i].price == input){
                $("#tabla-body").append(tabla.assamble(tabla.data[i]));
            }
        }
    },
}
$("#action1").on("click", function(){
    tabla.filtroBrand();
})
$("#action2").on("click", function(){
    tabla.filtroLocation();
})
$("action3").on("click", function(){
    tabla.filtroLaunch();
})
$("#action4").on("click", function(){
    tabla.filtroPrice();
})

//ESTA PARTE DE ABAJO NO LA ENTENDI, TUVE QUE CONSULTARLE A UNO DE MIS COMPAÑEROS
$(function() {
   tabla.setData(elementsList);
    tabla.listAll();
}); 