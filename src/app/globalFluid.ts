import Fluid from 'src/assets/scripts/fluid';

export let fluid;

export function setFluid(canvas) {
  fluid = new Fluid(canvas);
}

export function activate() {
  fluid.activate();
}

export function mapBehaviors(params) {
  fluid.mapBehaviors(params);
}
