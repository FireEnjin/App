export default function getParameter(paramName: string) {
  const searchString = window.location.search.substring(1),
    params = searchString.split("&");
  let i, val;

  for (i = 0; i < params.length; i++) {
    val = params[i].split("=");
    if (val[0] == paramName) {
      return val[1];
    }
  }
  return null;
}
