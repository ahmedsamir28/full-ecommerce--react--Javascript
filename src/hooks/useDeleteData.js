import baseUrl from '../Api/baseURL'

const useDeleteData = async (url, parm) => {

    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    }

    const res = await baseUrl.delete(url, config, parm);
    return res.data;
}

export default useDeleteData;