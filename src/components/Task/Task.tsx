import { ITaskProps } from "./types";
import { TextField, FormWithMethods, useMethods } from "@mylena-silva/my-ds";

export interface IFieldValues {
  id: number;
  descricao: string;
  status: string;
}

export default function Task({ onCreate }: ITaskProps) {
  const methods = useMethods<IFieldValues>();

  const { reset } = methods;

  const onSubmit = ({ descricao }: IFieldValues) => {
    onCreate({ descricao: descricao, status: "To Do" });
    reset();
  };

  return (
    <FormWithMethods methods={methods} onSubmit={onSubmit}>
      <TextField name="descricao" fullWidth />
    </FormWithMethods>
  );
}
