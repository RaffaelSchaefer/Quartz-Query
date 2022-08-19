import axios from "axios";

const url = "http://localhost:8080/api/mineral/"

/* eslint-disable no-async-promise-executor */

export default class MineralService {
    //Get Minerals
    static getMinerals (keyword = null, id = null) {
       if (id != null) {
           return new Promise(async (resolve, reject) => {
               try {
                   const res = await axios.get(url+`${id}`);
                   resolve (res.data)
               } catch (err) {
                   reject(err)
               }
           })
       } else {
           if (keyword != null) {
               return new Promise(async (resolve, reject) => {
                   try {
                       const res = await axios.get(url+`filter/${keyword}`);
                       resolve (res.data)
                   } catch (err) {
                       reject(err)
                   }
               })
           } else {
               return new Promise(async (resolve, reject) => {
                   try {
                       const res = await axios.get(url);
                       console.log(res.data);
                       resolve (res.data)
                   } catch (err) {
                       reject(err);
                       console.log(err);
                   }
               })
           }
       }
    }
    //Create Minerals
    //Delete Minerals
}