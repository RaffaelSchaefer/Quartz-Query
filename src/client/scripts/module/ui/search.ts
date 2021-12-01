/*// @ts-ignore
import {buildMineralModule} from "./buildMineralModule.js";

let scrollIndex: number = 0;

export async function search(identifier: string, keyword: string) {
    console.log(`${identifier}, ${keyword}`);
    if (identifier == undefined) {
        // @ts-ignore
        const size: any = new Promise(((resolve, reject) => {
            // @ts-ignore
            axios.get("http://localhost:8080/amount")
                .then(async (response: { data: any }) => resolve(response.data))
                .catch((err: any) => reject(err));
        }))
    } else {
        const size: any = new Promise(((resolve, reject) => {
            // @ts-ignore
            axios.get(`http://localhost:8080/mineral/amount/filtered/${identifier}/${keyword}`)
                .then(async (response: { data: any }) => resolve(response.data))
                .catch((err: any) => reject(err));
        }))
    }

    console.log(size);

    for (let i = 0; i < 10; i++) {
        // @ts-ignore
        if (scrollIndex <= size.amount) {
            buildMineralModule(false, scrollIndex, "list");
            scrollIndex++;
        }
    }

    window.addEventListener("scroll", () => {
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
        // @ts-ignore
        if (clientHeight + scrollTop >= scrollHeight - 5 && scrollIndex <= size.amount) {
            buildMineralModule(false, scrollIndex, "list");
            scrollIndex++;
        }
    });
}
*/
