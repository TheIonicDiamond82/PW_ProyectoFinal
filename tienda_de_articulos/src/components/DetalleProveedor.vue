<template>
    <div id = "tit" class="DetalleProveedor">
    <h2>Datos del Proveedor</h2><br>
    Clave de proveedor: {{id}} <br><br>
    Nombre: {{proveedores.Nombre}}<br><br>
    Direccion: <br>{{proveedores.Direccion}}<br><br>
    RFC: {{proveedores.RFC}}<br><br>
    Telefono: {{proveedores.Telefono}}<br><br>
    Obervaciones: {{proveedores.Observaciones}}<br><br>
    </div>
</template>

<script>
import { URL_DATOS} from '../utils/constantes.js'
import axios from "axios"
export default {
    name:"DetalleProveedor",
    components:{},
    props:
    {
        id:Number,
    },
    data: function()
    {
        return {
            proveedores:[],
        }
    },
    created()
    {
        this.traeDetalleProveedor();
    },
    methods: {
        traeDetalleProveedor: async function()
        {
            let a = [];
            await axios.get(URL_DATOS+"/proveedores/"+this.id).then(
                function(response)
                {
                    console.log(response.data[0]);
                    a=response.data[0];
                }
            ).catch(function(error)
            {
                console.log(error);
            });
            this.proveedores=a;
        },
        
    },
};
</script>
<style>
#tit{
    
    font-size: 20px;
    font-weight: 999;
}
</style>