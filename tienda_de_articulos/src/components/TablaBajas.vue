<template>
    <div class="TablaBajas">
    <!--<button @click.prevent="traeArticulos()">Datos</button>-->
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Clave del articulo</th>
                <th>Cantidad vendida</th>
                <th>Precio de venta del articulo</th>
                <th>Cliente</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <br>
    <tr v-for="baj in bajas" :key="baj.cveArt"> 
                <td >
                    {{baj.cveArt}}
                </td>
                <td >
                    {{baj.Cantidad}}
                </td>
                <td >
                    {{baj.PrecioVenta}}
                </td>
                <td >
                    {{baj.Cliente}}
                </td>
                <td>
                    <button class="btn btn-danger btn-md" @click.prevent="eliminarBaja(baj.cveArt)">Eliminar baja</button>
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
    name: "TablaBajas",
    components: {},
    data: function()
    {
        return {
            bajas: []
        };
    },
    created()
    {
        this.traeBajas();
    },
    methods: {
        traeBajas: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/bajas").then(
                function(response)
                {
                    console.log(response);
                    a=response.data;
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.bajas=a;
        },
        eliminarBaja: async function(id)
        {
            
              if(confirm("¿Seguro que deseas eliminar la baja?"))
           {
                const res = await axios.delete(URL_DATOS+"/bajas/"+id);
                this.traeBajas();
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