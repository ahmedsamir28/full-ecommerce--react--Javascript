import baseUrl from '../Api/baseURL'


const useInUpdateDataWithImage = async (url, parm) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseUrl.put(url, parm, config);
    return res;
}

const useInsUpdateData = async (url, parm) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }

    const res = await baseUrl.put(url, parm, config);
    return res;
}

export { useInUpdateDataWithImage, useInsUpdateData };