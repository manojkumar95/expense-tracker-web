/**
 * Generates action methods for classes that extend
 */
export default class BaseAction {
  constructor(actions) {
    this.actions = actions;
    Object.keys(this.actions).forEach(action => {
      this[action] = (...payload) => (Object.assign({
        type: this.actions[action].type
      }, ...this.actions[action].params.map((param, index) => ({
        [param]: payload[index]
      }))));
    });
  }
}
