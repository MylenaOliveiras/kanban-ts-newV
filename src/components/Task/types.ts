import { z } from "zod";

export const taskSchema = z.object({
  id: z.number().optional(),
  descricao: z.string().min(1, { message: "Minimo de 1 ou mais caractere" }),
  status: z.enum(["To Do", "In Progress", "Done"]),
});
export type Task = z.infer<typeof taskSchema>;

export interface ITaskProps {
  onCreate: (task: Task) => void;
}
