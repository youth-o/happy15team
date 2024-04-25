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

async function getColumnData(token: any, id: string ) {
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

async function getDashboardMebers(token: any, id: string ) {
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
    return response.data.cards;
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
  console.log(cardData)

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


 export { getDashboardData, getDashboardMebers, getColumnData, getCardData, postAddCard, getConfirmCardData }