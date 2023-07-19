import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vferw_list = createAsyncThunk(
  "vferws/api_v1_vferw_list",
  async payload => {
    const response = await apiService.api_v1_vferw_list(payload)
    return response.data
  }
)
export const api_v1_vferw_create = createAsyncThunk(
  "vferws/api_v1_vferw_create",
  async payload => {
    const response = await apiService.api_v1_vferw_create(payload)
    return response.data
  }
)
export const api_v1_vferw_retrieve = createAsyncThunk(
  "vferws/api_v1_vferw_retrieve",
  async payload => {
    const response = await apiService.api_v1_vferw_retrieve(payload)
    return response.data
  }
)
export const api_v1_vferw_update = createAsyncThunk(
  "vferws/api_v1_vferw_update",
  async payload => {
    const response = await apiService.api_v1_vferw_update(payload)
    return response.data
  }
)
export const api_v1_vferw_partial_update = createAsyncThunk(
  "vferws/api_v1_vferw_partial_update",
  async payload => {
    const response = await apiService.api_v1_vferw_partial_update(payload)
    return response.data
  }
)
export const api_v1_vferw_destroy = createAsyncThunk(
  "vferws/api_v1_vferw_destroy",
  async payload => {
    const response = await apiService.api_v1_vferw_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vferwsSlice = createSlice({
  name: "vferws",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vferw_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vferw_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vferw_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vferw_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vferw_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vferw_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vferw_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vferw_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vferw_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vferw_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vferw_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vferw_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vferw_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vferw_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vferw_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vferw_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vferw_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vferw_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vferw_list,
  api_v1_vferw_create,
  api_v1_vferw_retrieve,
  api_v1_vferw_update,
  api_v1_vferw_partial_update,
  api_v1_vferw_destroy,
  slice: vferwsSlice
}
