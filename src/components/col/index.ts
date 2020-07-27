import { App } from "vue";
import Component from "../gird/src/col.vue";

Component.install = function (app: App) {
  app.component(Component.name as string, Component);
};

export const Col = Component;
