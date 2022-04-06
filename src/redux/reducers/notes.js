import { v4 as uuidv4 } from "uuid";

import { CREATE_NOTE, DELETE_NOTE, EDIT_NOTE } from "./action-types";

/** Example state:
 * ```
 * {
 *   "fsdafsa1": { id: "fsdafsa1", title: "", description: "" },
 *   "3892472q": { id: "3892472q", title: "", description: "" },
 * }
 * ```
 */
export function notesReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_NOTE: {
      // PAYLOAD === { title, description }
      const id = uuidv4();

      return {
        ...state,
        [id]: { id, ...action.payload },
      };
    }
    case DELETE_NOTE: {
      // PAYLOAD === id
      const id = action.payload;
      const stateCopy = { ...state };
      delete stateCopy[id];
      return stateCopy;
    }
    case EDIT_NOTE: {
      // PAYLOAD === { id, title?, description? }
      const id = action.payload.id;

      return {
        ...state,
        [id]: { ...state[id], ...action.payload },
      };
    }
    default: {
      return state;
    }
  }
}
