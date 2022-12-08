<template>
    <div class="FormAltas">
    <br>
    <h3>Altas de articulos</h3><br>
    <label for="txtcve">Clave del articulo</label>
    <input type="text" name ="txtcve" id = "txtcve" v-model="altas.cveArt" class="form-control">
    <br>
    <label for="txtcantidad">Cantidad de articulos</label>
    <input type="text" name ="txtcantidad" id = "txtcantidad" v-model="altas.Cantidad" class="form-control">
    <br>
    <label for="txtcosto">Costo de la compra a proveedor</label>
    <input type="text" name ="txtcosto" id = "txtcosto" v-model="altas.Costo" class="form-control">
    <br>
    <label for="txtprov">Proveedor</label>
    <input type="text" name ="txtprov" id = "txtprov" v-model="altas.Proveedor" class="form-control">
    <br>
    <button @click.prevent ="nuevaAlta()" class="btn btn-success btn-lg">Realizar Alta</button>
    <button @click.prevent ="consultarAltas()" id="bottonconsult" class="btn btn-success btn-lg">Consulta de altas</button>
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "FormAltas",
    components: {},
    data: function()
    {
        return {
            altas:[]
        };
    },
    methods: {
        nuevaAlta: async function()
        {
            this.updateCantidad();
             const res = await axios.post(URL_DATOS+"/altas/",{
                cveArt: this.altas.cveArt,
                cantidad: this.altas.Cantidad,
                costo:this.altas.Costo,
                proveedor: this.altas.Proveedor,
            });
            console.log(res);
           
        },
         updateCantidad: async function()
        {
             const res = await axios.put(URL_DATOS+"/altas/",
             {
                cveArt: this.altas.cveArt,
                cantidad: this.altas.Cantidad
            });
            console.log(res);
           
        },
        consultarAltas: function()
        {
            this.$router.push({name:"tablaaltas", params:{ } });
        },
    },
}
</script>
<style>
#bottonconsult
{
    position: absolute;
    left: 2%;
    bottom: 3%;
}
</style>