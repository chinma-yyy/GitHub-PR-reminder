import {
    IHttp,
    IModify,
    IPersistence,
    IRead,
} from "@rocket.chat/apps-engine/definition/accessors";
import { UIKitBlockInteractionContext } from "@rocket.chat/apps-engine/definition/uikit";
import { ActionId } from "../enums/actionId";
import { GitHubPrReminderApp } from "../GitHubPrReminderApp";

export class ExecuteBlockActionHandler {
    constructor(
        private readonly app: GitHubPrReminderApp,
        private readonly read: IRead,
        private readonly http: IHttp,
        private readonly modify: IModify,
        private readonly persistence: IPersistence
    ) {}

    public async handle(context: UIKitBlockInteractionContext) {
        const data= context.getInteractionData();
        const {actionId}=data;
        switch(actionId){
            case ActionId.REMINDER_TYPE :{
                console.log("Reminder type");
                console.log(data);
            }
        }
    }
}
