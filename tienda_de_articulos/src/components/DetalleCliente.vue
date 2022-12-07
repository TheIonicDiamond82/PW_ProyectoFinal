<template>
    <div id = "tit" class="DetalleCliente">
    <br>
    <h2>Datos del Cliente</h2>
    <br>
    Matricula Cliente: {{id}} <br><br>
    Nombre: {{clientes.Nombre}}<br><br>
    Direccion: <br> {{clientes.Direccion}}<br><br>
    RFC: {{clientes.RFC}}
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