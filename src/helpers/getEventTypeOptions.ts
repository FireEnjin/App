export default function getEventTypeOptions() {
  return [
    {
      label: "On Project Add",
      value: "addProject",
      model: "Project",
    },
    {
      label: "On Project Edit",
      value: "editProject",
      model: "Project",
    },
    {
      label: "On User Add",
      value: "addUser",
      model: "User",
    },
    {
      label: "On User Edit",
      value: "editUser",
      model: "User",
    },
    {
      label: "On Time",
      value: "time",
    },
  ];
}
