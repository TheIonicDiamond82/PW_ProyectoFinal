<template>
    <div class="EditarProveedor">
    <br>
    <h3>Modificar proveedor con clave: {{id}}</h3><br>
    <label for="txtnombre">Nombre del proveedor</label>
    <input type="text" name ="txtnombre" id = "txtnombre" v-model="proveedores.Nombre" class="form-control">
    <br>
    <label for="txtdireccion">Dirección</label>
    <input type="text" name ="txtdireccion" id = "txtdireccion" v-model="proveedores.Direccion" class="form-control">
    <br>
    <label for="txtrfc">RFC</label>
    <input type="text" name ="txtrfc" id = "txtrfc" v-model="proveedores.RFC" class="form-control">
    <br>
    <br>
    <label for="txttelefono">Telefono</label>
    <input type="text" name ="txttelefono" id = "txttelefono" v-model="proveedores.Telefono" class="form-control">
    <br>
    <label for="txtobservaciones">Observaciones</label>
    <input type="text" name ="txtobservaciones" id = "txtobservaciones" v-model="proveedores.Observaciones" class="form-control">
    <br>
    <button @click.prevent ="actualizar()" class="btn btn-primary btn-lg">Actualizar el articulo</button>
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
        actualizar: async function()
        {
            const res = await axios.put(URL_DATOS+"/proveedores/"+this.id,{
                nombre: this.proveedores.Nombre,
                direccion: this.proveedores.Direccion,
                rfc: this.proveedores.RFC,
                telefono: this.proveedores.Telefono,
                observaciones:this.proveedores.Observaciones
            });
            console.log(res);
            
        },
        
    },
};
</script>