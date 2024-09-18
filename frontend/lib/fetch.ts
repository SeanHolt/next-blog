import { getServerSession, Session } from "next-auth";
import { authOptions } from "./auth";

export let _session: Session;
 
export const fetchPost = async (url: string, body: object) => {
    let init: RequestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: ""
    }
    if (body) {
        init.body = JSON.stringify(body)
    }
  const ret = await fetch(`http://localhost:3001/${url}`, init);
  return await ret.json()
};
export const fetchPut = async (url: string) => {
  const ret = await fetch(`http://localhost:3001/${url}`, { method: "PUT" });
  return await ret.json()
};
export const fetchDelete = async (url: string) => {
  const ret = await fetch(`http://localhost:3001/${url}`, { method: "DELETE" });
  return await ret.json()
};
export async function fetchGet<T>(url: string): Promise<T> {
  const ret = await fetch(`http://localhost:3001/${url}`);
  return await ret.json() as Promise<T>;
};
export const fetchSession = async (req, res) => {
    if (_session && _session !== undefined && _session !== null) return _session
    let temp = await getServerSession(req, res, authOptions)
    if (temp) _session = temp
    return _session
}