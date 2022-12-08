<template>
    <div class="Editar">
    <br>
    <h3>Modificar cliente con matricula: {{id}}</h3><br>
    <label for="txtnombre">Nombre del cliente</label>
    <input type="text" name ="txtnombre" id = "txtnombre" v-model="clientes.Nombre" class="form-control">
    <br>
    <label for="txtdireccion">Dirección</label>
    <input type="text" name ="txtdireccion" id = "txtdireccion" v-model="clientes.Direccion" class="form-control">
    <br>
    <label for="txtrfc">RFC</label>
    <input type="text" name ="txtrfc" id = "txtrfc" v-model="clientes.RFC" class="form-control">
    <br>
    <button @click.prevent ="actualizar()" class="btn btn-primary btn-lg">Actualizar el articulo</button>
    </div>
</template>
<script>
import { URL_DATOS} from '../utils/constantes.js'
import axios from "axios"
export default {
    name:"DetalleCliente",
    components:{},
    props:
    {
        id:Number,
    },
    data: function()
    {
        return {
            clientes:[],
        }
    },
    created()
    {
        this.traeDetalleCliente();
    },
    methods: {
        traeDetalleCliente: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/clientes/"+this.id).then(
                function(response)
                {
                    console.log(response.data[0]);
                    a=response.data[0];
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.clientes=a;
        },
        actualizar: async function()
        {
            const res = await axios.put(URL_DATOS+"/clientes/"+this.id,{
                nombre: this.clientes.Nombre,
                direccion:this.clientes.Direccion,
                rfc: this.clientes.RFC,
            });
            console.log(res);
        },
        
    },
};
</script>