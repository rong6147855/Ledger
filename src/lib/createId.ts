let id: number = parseInt(window.localStorage.getItem("_idMax") || "0") || 0;

function createId() {
  id++;
  return id;

  // window.localStorage.setItem("_inMax", id.toString());
  // return id;
}
export default createId;
