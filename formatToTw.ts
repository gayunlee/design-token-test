export function transformJsonToTw(json: any): any {
  const result: any = {};

  for (const key in json) {
    if (!json[key]?.value) {
      result[key] = transformJsonToTw(json[key]);
    } else {
      result[key] = json[key].value.toString();
    }
  }

  return result;
}
