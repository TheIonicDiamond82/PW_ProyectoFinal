<template>
    <div class="FormBajas">
    <br>
    <h3>Bajas de articulos</h3><br>
    <label for="txtcve">Clave del articulo</label>
    <input type="text" name ="txtcve" id = "txtcve" v-model="bajas.cveArt" class="form-control">
    <br>
    <label for="txtcantidad">Cantidad de articulos</label>
    <input type="text" name ="txtcantidad" id = "txtcantidad" v-model="bajas.Cantidad" class="form-control">
    <br>
    <label for="txtprecio">Precio de venta del articulo</label>
    <input type="text" name ="txtprecio" id = "txtprecio" v-model="bajas.PrecioVenta" class="form-control">
    <br>
    <label for="txtcli">Cliente</label>
    <input type="text" name ="txtcli" id = "txtcli" v-model="bajas.Cliente" class="form-control">
    <br>
    <button @click.prevent ="nuevaBaja()" class="btn btn-success btn-lg">Realizar Baja</button>
    <button @click.prevent ="consultarBajas()" id="bottonconsult" class="btn btn-success btn-lg">Consulta de bajas</button>
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "FormBajas",
    components: {},
    data: function()
    {
        return {
            bajas:[]
        };
    },
    methods: {
        nuevaBaja: async function()
        {
            this.updateCantidad();
             const res = await axios.post(URL_DATOS+"/bajas/",{
                cveArt: this.bajas.cveArt,
                cantidad: this.bajas.Cantidad,
                pv:this.bajas.PrecioVenta,
                cliente: this.bajas.Cliente,
            });
            console.log(res);
        },
        updateCantidad: async function()
        {
             const res = await axios.put(URL_DATOS+"/bajas/",
             {
                cveArt: this.bajas.cveArt,
                cantidad: this.bajas.Cantidad
            });
            console.log(res);
           
        },consultarBajas: function()
        {
            this.$router.push({name:"tablabajas", params:{ } });
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