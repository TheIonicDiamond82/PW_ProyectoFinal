<template>
    <div class="ClientesLista">
    <!--<button @click.prevent="traeArticulos()">Datos</button>-->
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Clave del cliente.</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>RFC</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cli in clientes" :key="cli.cveCli"> 
                <td >
                    <a href="" @click.prevent="detalleCliente(cli.cveCli)">{{cli.cveCli}}</a>
                </td>
                <td >
                    {{cli.Nombre}}
                </td>
                <td >
                    {{cli.Direccion}}
                </td>
                <td >
                    {{cli.RFC}}
                </td>
                <td >
                   <button id="edit" class="btn btn-info btn-md" @click.prevent="editarCliente(cli.cveCli)">Editar</button>
                    <button class="btn btn-danger btn-md" @click.prevent="eliminarCliente(cli.cveCli)">Eliminar</button>
                </td>

            </tr>
        </tbody>
    </table>
    <button @click="nuevoCliente()" class="btn btn-success btn-lg" id="btnN">Nuevo cliente</button>
    </div>
</template>

<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "ClientesLista",
    components: {},
    data: function()
    {
        return {
            clientes: []
        };
    },
    created()
    {
        this.traeClientes();
    },
    methods: {
        traeClientes: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/clientes").then(
                function(response)
                {
                    console.log(response);
                    a=response.data;
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.clientes=a;
        },
        detalleCliente: function(id)
        {
            this.$router.push({name:"detallecliente", params:{id: id } });
        },
        editarCliente: function(id)
        {
            this.$router.push({name:"editarcliente", params:{id: id } });
        },
        eliminarCliente: async function(id)
        {
            /*const res = await axios.delete(URL_DATOS+"/articulos/"+id);
            console.log(res)*/
            if(confirm("¿Seguro que deseas eliminar a este cliente?"))
           {
                const res = await axios.delete(URL_DATOS+"/clientes/"+id)
                this.traeClientes();
                console.log(res)
                
            }
            else{
                
            }
        },
        nuevoCliente: function()
        {
            this.$router.push({name:"nuevocliente", params:{ } });
        },
    },
}
</script>
<style>
#btnN
{
    left:0;
}
#edit
{
    margin-right: 8px;
}
</style>
