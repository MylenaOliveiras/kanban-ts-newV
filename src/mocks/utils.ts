import { context, response, rest } from "msw";
import { Storage } from "./storage";

export function createCRUDHandlers<TData extends { id: number }>(
  url: string,
  initialValue: TData[]
) {
  if (!globalThis.window) return [];

  const slashUrl = `/${url}`;
  const idUrl = `${slashUrl}/:id`;
  const storage = new Storage(url, initialValue);
  return [
    rest.get(slashUrl, (_, response, context) =>
      response(context.json(storage.getValue()))
    ),
    rest.get(idUrl, (request, response, context) =>
      response(context.json(storage.get(Number(request.params.id))))
    ),
    rest.post(slashUrl, async (request, response, context) =>
      response(context.json(storage.add(await request.json())))
    ),
    rest.put(idUrl, async (request, response, context) =>
      response(
        context.json(
          storage.update(Number(request.params.id), await request.json())
        )
      )
    ),
    rest.delete(idUrl, (request, response, context) => {
      storage.delete(Number(request.params.id));
      return response(context.status(204));
    }),
  ];
}
