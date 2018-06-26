var Table = {
    data:[],

    setData:function(Data){
        Table.data = Data;
    },
    listAll:function(){
        for(var i = 0; i < this.data.length; i++){
            $("#table-body").append(Table.assamble(Table.data[i]));
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
}