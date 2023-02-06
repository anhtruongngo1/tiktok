import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser : "" ,
  modalLogin : false ,
  modalDetailVideo : false ,
  dataDetailsVideo : []
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    toggleModal: (state , action) => {
      state.modalLogin = action.payload
    },
    toggleModalVideo: (state , action) => {
      state.modalDetailVideo = action.payload
    },
    logOutUser: (state) => {
      state.currentUser = null; 
      localStorage.clear()
    },
    handleDataUser: (state , action) => {
      state.currentUser = action.payload
    },
    handleDataDetailsVideo: (state , action) => {
      state.dataDetailsVideo = action.payload
      state.modalDetailVideo = true
    },

  },
})

// Action creators are generated for each case reducer function
export const { handleDataUser, toggleModal , toggleModalVideo , handleDataDetailsVideo , logOutUser} = userSlice.actions

export default userSlice.reducer