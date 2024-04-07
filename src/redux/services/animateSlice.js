import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  blur: false,
  page: false,
  exportSet: false,
  menu: false,
  addCat: false,
  width: null,
  height: null,
  menuItemArrow: false,
  pageNum:7
};

const STORAGE_KEY = "Animate";

//____________________________________________________storedItems_____________________Null_____//
const storedItems = Cookies.get(STORAGE_KEY)
  ? JSON.parse(Cookies.get(STORAGE_KEY))
  : null;

if (storedItems) {
  initialState.blur = storedItems;
}

export const animateSlice = createSlice({
  name: "animateSlice",
  initialState,
  reducers: {
    blurOn: (state, { payload }) => {
      state.blur = payload.blur;
    },
    setPageNum: (state, { payload }) => {
      state.pageNum = payload.pageNum;
    },
    menuItemArrowOn: (state, { payload }) => {
      state.menuItemArrow = payload.menuItemArrow;
    },
    exportSettingOn: (state, { payload }) => {
      state.exportSet = payload.exportSet;
      state.page = false;
      state.addCat = false;
      state.menu = false;
    },
    pageOn: (state, { payload }) => {
      state.exportSet = false;
      state.page = payload.page;
      state.addCat = false;
      state.menu = false;
    },
    addCatOn: (state, { payload }) => {
      state.addCat = payload.addCat;

      state.exportSet = false;
      state.page = false;
      state.menu = false;
    },
    menuOn: (state, { payload }) => {
      state.menu = payload.menu;

      state.exportSet = false;
      state.page = false;
      state.addCat = false;
    },
    setArea: (state, { payload }) => {
      state.width = payload.width;
      state.height = payload.height;
    },
  },
});

export const {
  blurOn,
  exportSettingOn,
  pageOn,
  addCatOn,
  menuOn,
  setArea,
  menuItemArrowOn,
  setPageNum
} = animateSlice.actions;
export default animateSlice.reducer;
