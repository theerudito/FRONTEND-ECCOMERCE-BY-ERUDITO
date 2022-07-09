import { createSlice } from "@reduxjs/toolkit";

export const monitorsSlice = createSlice({
  name: "monitors",
  initialState: {
    monitors: [],
    isLoading: true,
    oneMonitor: {},
  },
  reducers: {
    getMonitors: (state, action) => {
      state.monitors = action.payload;
    },
    oneMonitorModal: (state, action) => {
      state.oneMonitor = action.payload;
    }
  },
});

// actions para el reducer
export const { getMonitors, oneMonitorModal } = monitorsSlice.actions;
