import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detalle from '../components/Detalle.vue'
import Editar from '../components/Editar.vue'
import Nuevo from '../components/Nuevo.vue'
import Clientes from '../views/Clientes.vue'
import Proveedores from '../views/Proveedores.vue'
import DetalleCliente from '../components/DetalleCliente.vue'
import EditarCliente from '../components/EditarCliente.vue'
import NuevoCliente from '../components/NuevoCliente.vue'
import DetalleProveedor from '../components/DetalleProveedor.vue'
import EditarProveedor from '../components/EditarProveedor.vue'
import NuevoProveedor from '../components/NuevoProveedor.vue'
import Altas from '../views/Altas.vue'
import Bajas from '../views/Bajas.vue'
import FormAltas from '../components/FormAltas.vue'
import FormBajas from '../components/FormBajas.vue'
import TablaAltas from '../components/TablaAltas.vue'
import TablaBajas from '../components/TablaBajas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/articulos',
    name: 'articulos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Articulos.vue')
    }
  },
  {
    path:'/detalle',
    name:'detalle',
    component:Detalle,
    props:true
  },
  {
    path:'/editar',
    name:'editar',
    component:Editar,
    props:true
  },
  {
    path:'/nuevo',
    name:'nuevo',
    component:Nuevo,
  },
  {
    path:'/clientes',
    name:'clientes',
    component:Clientes,
  },
  {
    path:'/detallecliente',
    name:'detallecliente',
    component:DetalleCliente,
    props:true
  },
  {
    path:'/editarcliente',
    name:'editarcliente',
    component:EditarCliente,
    props:true
  },
  {
    path:'/nuevocliente',
    name:'nuevocliente',
    component:NuevoCliente,

  },
  {
    path:'/proveedores',
    name:'proveedores',
    component:Proveedores,
  },
  {
    path:'/detalleproveedor',
    name:'detalleproveedor',
    component:DetalleProveedor,
    props:true
  },
  {
    path:'/editarproveedor',
    name:'editarproveedor',
    component:EditarProveedor,
    props:true
  },
  {
    path:'/nuevoproveedor',
    name:'nuevoproveedor',
    component:NuevoProveedor,

  },
  {
    path:'/altas',
    name:'altas',
    component:Altas,

  },
  {
    path:'/formaltas',
    name:'formaltas',
    component:FormAltas,

  },
  {
    path:'/tablaaltas',
    name:'tablaaltas',
    component:TablaAltas,

  },
  {
    path:'/bajas',
    name:'bajas',
    component:Bajas,

  },
  {
    path:'/formbajas',
    name:'formbajas',
    component:FormBajas,

  },
  {
    path:'/tablabajas',
    name:'tablabajas',
    component:TablaBajas,

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
