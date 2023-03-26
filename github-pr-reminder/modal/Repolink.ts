import {
    IHttp,
    IModify,
    IPersistence,
    IRead,
} from "@rocket.chat/apps-engine/definition/accessors";
import { SlashCommandContext } from "@rocket.chat/apps-engine/definition/slashcommands";
import { IUIKitModalViewParam } from "@rocket.chat/apps-engine/definition/uikit/UIKitInteractionResponder";

export async function ReplinkModal(
    data: any,
    modify: IModify,
    persistence: IPersistence,
    read: IRead,
    http: IHttp,
    SlashCommandContext: SlashCommandContext
) {
    const block = modify.getCreator().getBlockBuilder();

}