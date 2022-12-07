<template>
    <div class="NuevoProveedore">
    <br>
    <h3>Nuevo Proveedor</h3><br>
    <label for="txtnombre">Nombre del proveedor</label>
    <input type="text" name ="txtnombre" id = "txtnombre" v-model="proveedores.Nombre" class="form-control">
    <br>
    <label for="txtdireccion">Dirección</label>
    <input type="text" name ="txtdireccion" id = "txtdireccion" v-model="proveedores.Direccion" class="form-control">
    <br>
    <label for="txtrfc">RFC</label>
    <input type="text" name ="txtrfc" id = "txtrfc" v-model="proveedores.RFC" class="form-control">
    <br>
    <br>
    <label for="txttelefono">Telefono</label>
    <input type="text" name ="txttelefono" id = "txttelefono" v-model="proveedores.Telefono" class="form-control">
    <br>
    <label for="txtobservaciones">Observaciones</label>
    <input type="text" name ="txtobservaciones" id = "txtobservaciones" v-model="proveedores.Observaciones" class="form-control">
    <br>
    <button @click.prevent ="nuevo()" class="btn btn-success btn-lg">Agregar nuevo proveedor</button>
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "NuevoProveedor",
    components: {},
    data: function()
    {
        return {
            proveedores:[]
        };
    },
    methods: {
        nuevo: async function()
        {
             /*const res = await axios.post(URL_DATOS+"/articulos/",{
                descripcion: this.articulos.descripcion,
                precio:this.articulos.precio,
                cantidad: this.articulos.cantidad,
            });
            console.log(res);*/
            console.log('Agregar');
        }
    },
}
</script>