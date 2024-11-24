export const parseSessionName = (str: string) => {
  return str.replace(/^\d+__/, "").replace(/_/g, " ");
};
