var app = new Vue({
    el: '#app',
    data: {
        titulo: "Mantenedor de Productos",
        //un estado para los botones para que desaparezcan y aparezcan
        mensaje: " ",
        btn1: true,
        btn2: false,
        btn3: true,
        producto: [],
        //agregamos las varibles
        nuevoNombre: null,
        nuevaDescripcion: null,
        nuevoPrecio: null,
        //agreamos los errores para validar
        errorNombre: false,
        errorDescripcion: false,
        errorPrecio: false,
        //mensaje para el usuario
        mensajediv: false
    },
    methods: {
        agregarProducto: function(){
            //validamos las entradas, ponemos un error en el campo requerido
            if(this.nuevoNombre==null){
                this.errorNombre=true;
            }else{
                this.errorNombre = false;
            }
            if(this.nuevaDescripcion==null){
                this.errorDescripcion=true;
            }else{
                this.errorDescripcion = false;
            }
            if(this.nuevoPrecio>0){
                this.errorPrecio=false;
            }else{
                this.errorPrecio = true;
            }
            //validamos que todos los campos esten completos
            if(this.errorNombre==true ||this.errorDescripcion==true ||this.errorPrecio==true){
                
            }else{ //luego de validar los errores, ingresamos los datos a la tabla
                this.producto.push({
                    nombre : this.nuevoNombre,
                    descripcion : this.nuevaDescripcion,
                    precio : "$ "+this.nuevoPrecio
                });
                //mostramos el mensaje de enviado
                this.enviado = true;
                this.mensajediv = false;
                //reiniciamos las varibles
                this.nuevoNombre = null,
                this.nuevaDescripcion = null,
                this.nuevoPrecio = null

            }           
        },
        eliminarProducto: function(index){
            var auxiliar = this.producto[index].nombre;
            this.producto.splice(index,1); //eliminamos el arreglo
            this.mensajediv = true;
            this.enviado = false;
            this.mensaje = "Se ha eliminado el producto: "+auxiliar;
        },
        cambiarbtn: function(index){
            this.btn1= false;
            this.btn2=true; //?????
            this.btn3=false;
            this.mensajediv = true;
            this.enviado = false;
            this.mensaje = "Se esta editando el producto: "+this.producto[index].nombre;
        },
        editarProducto: function(index){
            
            if(this.nuevoNombre==null){
                this.producto[index].nombre = this.producto[index].nombre;
            }else{
                this.producto[index].nombre = this.nuevoNombre;
            }
            if(this.nuevaDescripcion==null){
                this.producto[index].descripcion = this.producto[index].descripcion;
            }else{
                this.producto[index].descripcion = this.nuevaDescripcion;
            }
            
            if(this.nuevoPrecio>0){
                this.errorPrecio=false;
                this.producto[index].precio = "$ "+this.nuevoPrecio;
            }else{
                this.errorPrecio = true;
            }
            if(this.nuevoPrecio==null){
                this.producto[index].precio = this.producto[index].precio;
                this.errorPrecio = false;
            }
            if(this.errorPrecio == true){

            }else{
            this.mensaje = "Se ha guardado la edición";
           
            this.btn1 = true;
            this.btn2 = false;
            this.btn3 = true;
            //reiniciamos las varibles
            this.nuevoNombre = null,
            this.nuevaDescripcion = null,
            this.nuevoPrecio = null
            }     
    }
    }
});