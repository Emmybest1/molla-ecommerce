declare module "MyTypes" {
    import { ActionType, StateType } from 'typesafe-actions'
    export type Store = StateType<typeof import("./store").default>
    export type RootAction = ActionType<typeof import("./root-actions").default>
    export type RootState = StateType<typeof import("./root-reducer").default>

}

