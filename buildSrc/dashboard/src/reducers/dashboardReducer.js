import {createSlice} from "@reduxjs/toolkit";
import chartService from "../services/chartService";
import lodash from 'lodash';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    filterType: 'day',
    data: []
  },
  reducers: {
    setChartData(state, action) {
      return {...state, data: action.payload}
    }
  }
})

export const { setChartData } = dashboardSlice.actions

export const initializeDashboard = () => {
  return async dispatch => {
    const data = await chartService.getEventsData();
    const formatedData = data.map(item => {
      const date = new Date(item.createdAt);
      return {...item, createdAt: date.toISOString().split('T')[0]};
    });
    const groupedByTypeData = lodash.groupBy(formatedData, 'type');
    const groupedData = [];
    for (let type in groupedByTypeData) {
      const eventData = {};
      const groupedByDateData = lodash.groupBy(groupedByTypeData[type], 'createdAt')
      eventData[type] = Object.entries(groupedByDateData).map(item => ({
        date: item[0],
        count:  item[1][0].additionalData?.price ? item[1].reduce((acc, price) => acc + +price.additionalData.price, 0) : item[1].length,
        type: type
      })).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
      groupedData.push(eventData)
    }
    dispatch(setChartData(groupedData))
  }
}

export default dashboardSlice.reducer