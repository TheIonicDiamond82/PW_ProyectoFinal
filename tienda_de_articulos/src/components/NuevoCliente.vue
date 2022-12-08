<template>
    <div class="NuevoCliente">
    <br>
    <h3>Nuevo Cliente</h3><br>
    <label for="txtnombre">Nombre del cliente</label>
    <input type="text" name ="txtnombre" id = "txtnombre" v-model="clientes.Nombre" class="form-control">
    <br>
    <label for="txtdireccion">Dirección</label>
    <input type="text" name ="txtdireccion" id = "txtdireccion" v-model="clientes.Direccion" class="form-control">
    <br>
    <label for="txtrfc">RFC</label>
    <input type="text" name ="txtrfc" id = "txtrfc" v-model="clientes.RFC" class="form-control">
    <br>
    <button @click.prevent ="nuevo()" class="btn btn-success btn-lg">Agregar nuevo cliente</button>
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "NuevoCliente",
    components: {},
    data: function()
    {
        return {
            clientes:[]
        };
    },
    methods: {
        nuevo: async function()
        {
             const res = await axios.post(URL_DATOS+"/clientes/",{
                nombre: this.clientes.Nombre,
                direccion:this.clientes.Direccion,
                rfc: this.clientes.RFC,
            });
            console.log(res);
            
        }
    },
}
</script>