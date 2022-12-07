<template>
    <div id = "tit" class="Detalle">

    <br>
    <h2>Datos del Articulo</h2><br>
    Articulo número: {{id}} <br><br>
    Descripcion: {{articulos.Descripcion}}<br><br>
    Cantidad: {{articulos.Cantidad}}<br><br>
    Precio: {{articulos.precio}}
    </div>
</template>

<script>
import { URL_DATOS} from '../utils/constantes.js'
import axios from "axios"
export default {
    name:"Detalle",
    components:{},
    props:
    {
        id:Number,
    },
    data: function()
    {
        return {
            articulos:[],
        }
    },
    created()
    {
        this.traeDetalle();
    },
    methods: {
        traeDetalle: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/articulos/"+this.id).then(
                function(response)
                {
                    console.log(response.data[0]);
                    a=response.data[0];
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.articulos=a;
        },
        
    },
};
</script>
<style>
#tit{
    margin-top: 7%;
    font-size: 20px;
    font-weight: 999;
}
</style>