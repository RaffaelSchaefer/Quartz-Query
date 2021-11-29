export async function fetchMineralDB(
  url: string,
  pos: number | undefined = undefined
) {
  return new Promise((resolve, reject) => {
    if (pos === undefined) {
      // @ts-ignore
      axios
        .get(url)
        .then(async (response: { data: any }) => resolve(response.data))
        .catch((err: any) => reject(err));
    } else {
      // @ts-ignore
      axios
        .get(`${url}/${pos}`)
        .then(async (response: { data: any }) => resolve(response.data))
        .catch((err: any) => reject(err));
    }
  });
}
