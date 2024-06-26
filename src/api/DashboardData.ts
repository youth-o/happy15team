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
  }
  catch (error) {
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
  
const  postComment= async(token:string, formData:any) => {
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

const  EditComment= async(token:string, content:any, id:any ) => {
    try {
        const response = await instance.put(`/comments/${id}`, content, {
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

const addColumns = async (token: string, title:any, dashboardId:any) => {
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
  
const getComment= async(token:string, cardId:any) => {
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


  
const deleteColumn= async(token:string, columnId:any) => {
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
  
const reNameColumn = async (token: string, columnId:any, name:any) => {
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
  
const putEditCard = async (token: string, data:any, cardId:any) => {
    try {
        await instance.put(`/cards/${cardId}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
     catch (error) {
      throw error;
    }
}
  
const deleteCard= async(token:string, cardId:any) => {
    try {
        await instance.delete(`/cards/${cardId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
     catch (error) {
      throw error;
    }
}

const deleteComment= async(token:string, Id:any) => {
    try {
        await instance.delete(`/comments/${Id}`, {
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
  addColumns,
  putEditCard,
  deleteCard,
  EditComment,
  deleteComment
};
