<template>
    <div class="Nuevo">
    <h2>Datos del articulo</h2><br>
    <label for="txtdescripcion">Nombre del articulo - Nuevo</label>
    <input type="text" name ="txtdescripcion" id = "txtdescripcion" v-model="articulos.descripcion" class="form-control">
    <br>
    <label for="txtprecio">Precio</label>
    <input type="text" name ="txtprecio" id = "txtprecio" v-model="articulos.precio" class="form-control">
    <br>
    <label for="txtcantidad">Cantidad</label>
    <input type="text" name ="txtcantidad" id = "txtcantidad" v-model="articulos.cantidad" class="form-control">
    <br>
    <button @click.prevent ="nuevo()" class="btn btn-success btn-lg">Agregar el articulo</button>
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "Nuevo",
    components: {},
    data: function()
    {
        return {
            articulos:[]
        };
    },
    methods: {
        nuevo: async function()
        {
             const res = await axios.post(URL_DATOS+"/articulos",{
                descripcion: this.articulos.descripcion,
                precio:this.articulos.precio,
                cantidad: this.articulos.cantidad,
            });
            
        }
    },
}
</script>