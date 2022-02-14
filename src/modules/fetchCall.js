const fetchConnect = {
  getData: async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
  },
  postData: {
    // empty
  },
  putData: {
    // empty
  }
}

export const getData = fetchConnect.getData;