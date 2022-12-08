<template>
    <div class="ProveedoresLista">
    <!--<button @click.prevent="traeArticulos()">Datos</button>-->
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Clave del proveedor</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Observaciones</th>
                <th>RFC</th>
                <th>Telefono</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pro in proveedores" :key="pro.cveProv"> 
                <td >
                    <a href="" @click.prevent="detalleProveedor(pro.cveProv)">{{pro.cveProv}}</a>
                </td>
                <td >
                    {{pro.Nombre}}
                </td>
                <td >
                    {{pro.Direccion}}
                </td>
                <td >
                    {{pro.Observaciones}}
                </td>
                <td >
                    {{pro.RFC}}
                </td>
                <td >
                    {{pro.Telefono}}
                </td>
                <td >
                   <button id="edit" class="btn btn-info btn-md" @click.prevent="editarProveedor(pro.cveProv)">Editar</button>
                    <button class="btn btn-danger btn-md" @click.prevent="eliminarProveedor(pro.cveProv)">Eliminar</button>
                </td>

            </tr>
        </tbody>
    </table>
    <button @click="nuevoProveedor()" class="btn btn-success btn-lg" id="btnN">Nuevo proveedor</button>
    </div>
</template>

<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "ProveedoresLista",
    components: {},
    data: function()
    {
        return {
            proveedores: []
        };
    },
    created()
    {
        this.traeProveedores();
    },
    methods: {
        traeProveedores: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/proveedores").then(
                function(response)
                {
                    console.log(response);
                    a=response.data;
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.proveedores=a;
        },
        detalleProveedor: function(id)
        {
            this.$router.push({name:"detalleproveedor", params:{id: id } });
        },
        editarProveedor: function(id)
        {
            this.$router.push({name:"editarproveedor", params:{id: id } });
        },
        eliminarProveedor: async function(id)
        {
            
            
            if(confirm("¿Seguro que deseas eliminar este proveedor?"))
           {
                const res = await axios.delete(URL_DATOS+"/proveedores/"+id);
                this.traeProveedores();
                console.log(res)
                
            }
            else{
                
            }
        },
        nuevoProveedor: function()
        {
            this.$router.push({name:"nuevoproveedor", params:{ } });
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
