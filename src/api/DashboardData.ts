import instance from "@/lib/axios";

async function getDashboardData(token: any, id: string) {
  try {
    const response = await instance.get(`/dashboards/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getColumnData(token: any, id: string) {
  try {
    const response = await instance.get(`/columns?dashboardId=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

async function getDashboardMebers(token: any, id: string) {
  try {
    const response = await instance.get(`/members?dashboardId=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.members;
  } catch (error) {
    throw error;
  }
}

async function getCardData(token: any, columnId: string) {
  try {
    const response = await instance.get(`/cards?columnId=${columnId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getConfirmCardData(token: any, cardId: string) {
  try {
    const response = await instance.get(`/cards/${cardId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function postAddCard(token: string, cardData: any) {


  try {
    const response = await instance.post(`/cards`, cardData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

const  uploadCardImage= async(token:string, file: File, id:string) => {
    try {
        const formData = new FormData();
        formData.append("image", file);
        const response = await instance.post(`/columns/${id}/card-image`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data.imageUrl;
      }
     catch (error) {
      throw error;
    }
}
  
const  postComment= async(token:string, formData) => {
    try {
        const response = await instance.post(`/comments`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      }
     catch (error) {
      throw error;
    }
}

const addColumns = async (token: string, title, dashboardId) => {
  const data = {
    "title": title,
  "dashboardId": Number(dashboardId)
  }
    try {
      await instance.post(`/columns`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
     catch (error) {
      throw error;
    }
}
  
const getComment= async(token:string, cardId) => {
    try {
        const response = await instance.get(`/comments?cardId=${cardId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data.comments;
      }
     catch (error) {
      throw error;
    }
}
  
const deleteColumn= async(token:string, columnId) => {
    try {
        await instance.delete(`/columns/${columnId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
     catch (error) {
      throw error;
    }
}
  
const reNameColumn = async (token: string, columnId, name) => {
  const title = {
    "title":name
  }
    try {
        await instance.put(`/columns/${columnId}`, title, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
     catch (error) {
      throw error;
    }
  }

export {
  getDashboardData,
  getDashboardMebers,
  getColumnData,
  getCardData,
  postAddCard,
  getConfirmCardData,
  uploadCardImage,
  postComment,
  getComment,
  deleteColumn,
  reNameColumn,
  addColumns
};
