export async function fetchMineralDB(
  url: string,
  pos: number | undefined = undefined
) {
  return new Promise((resolve, reject) => {
    //@ts-ignore
    axios.get(url).then(async (response) => {
      let data = response.data;
      if (pos === undefined) {
        resolve(data);
      } else {
        if (0 < pos < data.length) {
          resolve(data[pos]);
        } else {
          reject("ERROR: Position doesn't belong to db");
        }
      }
    });
  }).catch((error: any) => console.log(error));
}
