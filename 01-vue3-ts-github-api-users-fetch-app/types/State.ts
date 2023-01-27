import { PropType } from "vue"
import User from "./User"

interface State {
    isLoading: boolean,
    isError: boolean,
    errorMessage: string,
    users: PropType<User[]>
}