<template>
    <div class="ArticulosLista">
    <!--<button @click.prevent="traeArticulos()">Datos</button>-->
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th>No.</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="art in articulos" :key="art.id"> 
                <td >
                    <a href="" @click.prevent="detalleArticulo(art.id)">{{art.id}}</a>
                </td>
                <td >
                    {{art.descripcion}}
                </td>
                <td >
                    {{art.precio}}
                </td>
                <td >
                    {{art.cantidad}}
                </td>
                <td >
                   <button id="edit" class="btn btn-info btn-md" @click.prevent="editarArticulo(art.id)">Editar</button>
                    <button class="btn btn-danger btn-md" @click.prevent="eliminarArticulo(art.id)">Eliminar</button>
                </td>

            </tr>
        </tbody>
    </table>
    <button @click="nuevoArticulo()" class="btn btn-success btn-lg" id="btnN">Nuevo articulo</button>
    </div>
</template>

<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "ArticulosLista",
    components: {},
    data: function()
    {
        return {
            articulos: []
        };
    },
    created()
    {
        this.traeArticulos();
    },
    methods: {
        traeArticulos: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/articulos").then(
                function(response)
                {
                    console.log(response);
                    a=response.data;
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.articulos=a;
        },
        detalleArticulo: function(id)
        {
            this.$router.push({name:"detalle", params:{id: id } });
        },
        editarArticulo: function(id)
        {
            this.$router.push({name:"editar", params:{id: id } });
        },
        eliminarArticulo: async function(id)
        {
           if(confirm("¿Seguro que deseas eliminar este articulo?"))
           {
                const res = await axios.delete(URL_DATOS+"/articulos/"+id)
                this.traeArticulos();
                console.log(res)
                
            }
            else{
                
            }
            
        },
        nuevoArticulo: function()
        {
            this.$router.push({name:"nuevo", params:{ } });
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