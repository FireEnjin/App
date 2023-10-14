export default {
  add: (input: any, options: any) => {
    const db = (window as any)?.db;
    console.log(db);

    console.log("Add Options: ", options);
    return input;
  },
};
