/***********************
 * Global Fluid Object
 * Malik Tillman 2019
 **********************/

/**
 * Import Fluid.JS.
 */
import Fluid from 'src/assets/scripts/fluid';

/**
 * Export the fluid object.
 */
export let fluid;

/**
 * Export fluid initialization function.
 * @param canvas: render surface for the fluid simulation.
 */
export function setFluid(canvas) {
  fluid = new Fluid(canvas);
}

/**
 * Export fluid activation function.
 */
export function activate() {
  fluid.activate();
}

/**
 * Export behavior mapping function.
 * @param params: behaviors to map.
 */
export function mapBehaviors(params) {
  fluid.mapBehaviors(params);
}
