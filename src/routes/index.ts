import Projetos from "@/views/Projetos.vue";
import Formulario from "@/views/projetos/Formulario.vue";
import Tarefas from "@/views/Tarefas.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: Tarefas,
  },
  {
    path: "/projetos",
    name: "Projetos",
    component: Projetos,
  },
  {
    path: "/projetos/novo",
    name: "Novo Projeto",
    component: Formulario,
  },
  {
    path: "/projetos/:id",
    name: "Editar Projeto",
    component: Formulario,
    props: true
  },
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
