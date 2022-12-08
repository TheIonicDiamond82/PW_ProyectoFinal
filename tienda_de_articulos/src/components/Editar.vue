<template>
    <div class="Editar">
    <br>
    <h3>Modificar articulo: {{id}}</h3><br>
    <label for="txtdescripcion">Nombre del articulo</label>
    <input type="text" name ="txtdescripcion" id = "txtdescripcion" v-model="articulos.descripcion" class="form-control">
    <br>
    <label for="txtprecio">Precio</label>
    <input type="text" name ="txtprecio" id = "txtprecio" v-model="articulos.precio" class="form-control">
    <br>
    <label for="txtcantidad">Cantidad</label>
    <input type="text" name ="txtcantidad" id = "txtcantidad" v-model="articulos.cantidad" class="form-control">
    <br>
    <button @click.prevent ="actualizar()" class="btn btn-primary btn-lg">Actualizar el articulo</button>
    </div>
</template>
<script>
import { URL_DATOS} from '../utils/constantes.js'
import axios from "axios"
export default {
    name:"Detalle",
    components:{},
    props:
    {
        id:Number,
    },
    data: function()
    {
        return {
            articulos:[],
        }
    },
    created()
    {
        this.traeDetalle();
    },
    methods: {
        traeDetalle: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/articulos/"+this.id).then(
                function(response)
                {
                    console.log(response.data[0]);
                    a=response.data[0];
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.articulos=a;
        },
        actualizar: async function()
        {
            const res = await axios.put(URL_DATOS+"/articulos/"+this.id,{
                descripcion: this.articulos.descripcion,
                precio:this.articulos.precio,
                cantidad: this.articulos.cantidad,
            });
            console.log(res);
            
        },
        
    },
};
</script>