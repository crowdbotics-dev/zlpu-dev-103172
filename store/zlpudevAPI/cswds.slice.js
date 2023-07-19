import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cswd_list = createAsyncThunk(
  "cswds/api_v1_cswd_list",
  async payload => {
    const response = await apiService.api_v1_cswd_list(payload)
    return response.data
  }
)
export const api_v1_cswd_create = createAsyncThunk(
  "cswds/api_v1_cswd_create",
  async payload => {
    const response = await apiService.api_v1_cswd_create(payload)
    return response.data
  }
)
export const api_v1_cswd_retrieve = createAsyncThunk(
  "cswds/api_v1_cswd_retrieve",
  async payload => {
    const response = await apiService.api_v1_cswd_retrieve(payload)
    return response.data
  }
)
export const api_v1_cswd_update = createAsyncThunk(
  "cswds/api_v1_cswd_update",
  async payload => {
    const response = await apiService.api_v1_cswd_update(payload)
    return response.data
  }
)
export const api_v1_cswd_partial_update = createAsyncThunk(
  "cswds/api_v1_cswd_partial_update",
  async payload => {
    const response = await apiService.api_v1_cswd_partial_update(payload)
    return response.data
  }
)
export const api_v1_cswd_destroy = createAsyncThunk(
  "cswds/api_v1_cswd_destroy",
  async payload => {
    const response = await apiService.api_v1_cswd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cswdsSlice = createSlice({
  name: "cswds",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_cswd_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cswd_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_cswd_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cswd_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cswd_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_cswd_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cswd_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cswd_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_cswd_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cswd_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cswd_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cswd_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cswd_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cswd_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cswd_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cswd_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cswd_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cswd_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_cswd_list,
  api_v1_cswd_create,
  api_v1_cswd_retrieve,
  api_v1_cswd_update,
  api_v1_cswd_partial_update,
  api_v1_cswd_destroy,
  slice: cswdsSlice
}
