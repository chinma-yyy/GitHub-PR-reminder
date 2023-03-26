import {
    IHttp,
    IModify,
    IPersistence,
    IRead,
} from "@rocket.chat/apps-engine/definition/accessors";
import { UIKitViewSubmitInteractionContext } from "@rocket.chat/apps-engine/definition/uikit";
import { viewId } from "../enums/viewId";
import { GitHubPrReminderApp } from "../GitHubPrReminderApp";

export class ExecuteViewSubmitHandler {
    constructor(
        private readonly app: GitHubPrReminderApp,
        private readonly read: IRead,
        private readonly http: IHttp,
        private readonly modify: IModify,
        private readonly persistence: IPersistence
    ) {}

    public async handle(context: UIKitViewSubmitInteractionContext) {
        const { user, view } = context.getInteractionData();

        switch (view.id) {
            case viewId.ONCE: {
                console.log("View submit of once reminder");
                break;
            }
            case viewId.RECURRING: {
                break;
            }
        }
    }
}
