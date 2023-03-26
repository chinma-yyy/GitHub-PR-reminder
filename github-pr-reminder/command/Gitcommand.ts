import {
    IRead,
    IModify,
    IHttp,
    IPersistence,
} from "@rocket.chat/apps-engine/definition/accessors";
import {
    ISlashCommand,
    SlashCommandContext,
} from "@rocket.chat/apps-engine/definition/slashcommands";
import { GitHubPrReminderApp } from "../GitHubPrReminderApp";
import { OncereminderModal } from "../modal/Oncereminder";
import { RecurringreminderModal } from "../modal/Recurringreminder";
import { ReminderoptionModal } from "../modal/Reminderoptions";
import { ReplinkModal } from "../modal/Repolink";
export class Gitcommand implements ISlashCommand {
    public command = "git";
    public i18nDescription = "Skeleton app for github pr reminder app";
    public providesPreview = false;
    public i18nParamsExample = "marathi";
    constructor(private readonly app: GitHubPrReminderApp) {}

    public async executor(
        context: SlashCommandContext,
        read: IRead,
        modify: IModify,
        http: IHttp,
        persis: IPersistence
    ): Promise<void> {
        const room = context.getRoom();
        const user = context.getSender();
        const subcommands = context.getArguments();
        const param1 = subcommands[0];
        const param2 = subcommands[1];

        switch (param1) {
            case "link": {
                // Link the repository listener
                let data;
                await ReplinkModal(data, modify, persis, read, http, context);
                break;
            }
            case "reminder": {
                // Show modals for the reminder
                let modal;
                console.log(param2);
                if (param2 === "once") {
                    let data;
                    modal = await OncereminderModal(
                        data,
                        modify,
                        persis,
                        read,
                        http,
                        context
                    );
                } else if (param2 === "recurring") {
                    let data;
                    modal = await RecurringreminderModal(
                        data,
                        modify,
                        persis,
                        read,
                        http,
                        context
                    );
                } else {
                    modal = await ReminderoptionModal(
                        modify,
                        persis,
                        read,
                        http,
                        context
                    );
                }
                const triggerId = context.getTriggerId()!;
                await modify
                    .getUiController()
                    .openModalView(modal, { triggerId }, context.getSender());
                break;
            }
            case "help":
            default: {
                // Helper message
                const helperMessage = `# GitHub PR Reminder APP
                *You can create reminders for all pull requests for your repo with this App*
                Run
                To link your repo for listening pull requests -> \`/git link\`
                To create a reminder -> \`/git reminder\`
                To create a reminder to remind once ->\`/git reminder [once | o]\`
                To create a recurring reminder -> \`/git reminder [recurring | r]\`
                For some guidance -> \`/git help\` I guess you dont need this one as you are here already.`;
                const message = modify
                    .getCreator()
                    .startMessage()
                    .setText(helperMessage);
                if (room) {
                    message.setRoom(room);
                }
                await modify.getCreator().finish(message);
            }
        }
    }
}
