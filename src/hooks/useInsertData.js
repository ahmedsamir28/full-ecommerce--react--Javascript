import baseUrl from "../Api/baseURL";

const useInsertDataWithImage = async (url, parm) => {
    const config={
        headers:{
            "Content-Type":"multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseUrl.post(url, parm ,config);
    return res;
}

const useInsertData = async (url, parm) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    const res = await baseUrl.post(url, parm, config);
    return res;
}

export { useInsertData, useInsertDataWithImage };