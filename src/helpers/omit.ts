export default function omit(obj: any, ...props: any[]) {
  const result = { ...obj };
  props.forEach(function (prop) {
    delete result[prop];
  });
  return result;
}
