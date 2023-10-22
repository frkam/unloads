export type Order = {
  id: string;
  date: string;
  task_date: string;
  size: string;
  status: "green" | "red";
  status_text: string;
  event: string;
};
