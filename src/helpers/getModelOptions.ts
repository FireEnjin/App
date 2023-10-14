import getEventTypeOptions from "./getEventTypeOptions";

export default () => {
  const models = [];
  const modelCache: { [modelName: string]: boolean } = {};
  for (const triggerOption of getEventTypeOptions()) {
    if (modelCache?.[triggerOption?.model]) continue;
    modelCache[triggerOption?.model] = true;
    if (!triggerOption?.model?.length) continue;
    models.push({
      label: triggerOption?.model,
      value: triggerOption?.model,
    });
  }
  return models;
};
