export default function flatten(obj: any, roots: any = [], sep = "."): any {
  return (
    Object
      // find props of given object
      .keys(obj)
      // return an object by iterating props
      .reduce(
        (memo, prop: any) =>
          Object.assign(
            // create a new object
            {},
            // include previously returned object
            memo,
            Object.prototype.toString.call(obj[prop]) === "[object Object]"
              ? // keep working if value is an object
                flatten(obj[prop], roots.concat([prop]), sep)
              : // include current prop and value and prefix prop with the roots
                { [roots.concat([prop]).join(sep)]: obj[prop] }
          ),
        {}
      )
  );
}
