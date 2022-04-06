import { notesReducer } from "./notes";
import { userReducer } from "./user";

/**
 * Example state:
 * ```
 * {
 *   notes: {
 *    "fsdafsa1": { id: "fsdafsa1", title: "", description: "" },
 *    "3892472q": { id: "3892472q", title: "", description: "" },
 *   },
 *   user: {
 *    username: "asdf",
 *    loggedIn: true,
 *   },
 * }
 * ```
 */
export default combineReducers({ notes: notesReducer, user: userReducer });
