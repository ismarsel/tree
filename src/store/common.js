function filterhelper(arrr, obj) {
  arrr.filter((n) => n.name != obj.name);
}
function findAnddel(state, node, filter) {
  filter(state, node);
  for (let child of state.children) {
    findAnddel(child, node, filter);
  }
}

export { filterhelper, findAnddel };
