import {
    IHttp,
    IModify,
    IPersistence,
    IRead,
} from "@rocket.chat/apps-engine/definition/accessors";
import { SlashCommandContext } from "@rocket.chat/apps-engine/definition/slashcommands";


export async function ReminderoptionModal(
    modify: IModify,
    persistence: IPersistence,
    read: IRead,
    http: IHttp,
    SlashCommandContext: SlashCommandContext
) {
    const block = modify.getCreator().getBlockBuilder();

}
