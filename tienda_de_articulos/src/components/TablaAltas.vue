<template>
    <div class="TablaBajas">
    <!--<button @click.prevent="traeArticulos()">Datos</button>-->
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Clave del articulo</th>
                <th>Cantidad adquirida</th>
                <th>Costo de compra a proveedor</th>
                <th>Proveedor</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <br>
    <tr v-for="alt in altas" :key="alt.cveArt"> 
                <td >
                    {{alt.cveArt}}
                </td>
                <td >
                    {{alt.Cantidad}}
                </td>
                <td >
                    {{alt.Costo}}
                </td>
                <td >
                    {{alt.Proveedor}}
                </td>
                <td>
                    <button class="btn btn-danger btn-md" @click.prevent="eliminarAlta(alt.cveArt)">Eliminar alta</button>
                </td>
                </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";
export default {
    name: "TablaAltas",
    components: {},
    data: function()
    {
        return {
            altas: []
        };
    },
    created()
    {
        this.traeAltas();
    },
    methods: {
        traeAltas: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/altas").then(
                function(response)
                {
                    console.log(response);
                    a=response.data;
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.altas=a;
        },
        eliminarAlta: async function(id)
        {
            
              if(confirm("¿Seguro que deseas eliminar la alta?"))
           {
            const res = await axios.delete(URL_DATOS+"/altas/"+id);
                this.traeAltas();
                console.log('Borrar')
                
            }
            else{
                
            }
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