import {
    IHttp,
    IModify,
    IPersistence,
    IRead,
} from "@rocket.chat/apps-engine/definition/accessors";
import { SlashCommandContext } from "@rocket.chat/apps-engine/definition/slashcommands";
import { BlockElementType } from "@rocket.chat/apps-engine/definition/uikit";
import { ButtonStyle } from "@rocket.chat/apps-engine/definition/uikit";
import { ActionId } from "../enums/actionId";
import { viewId } from "../enums/viewId";

export async function ReminderoptionModal(
    modify: IModify,
    persistence: IPersistence,
    read: IRead,
    http: IHttp,
    SlashCommandContext: SlashCommandContext
) {
    const block = modify.getCreator().getBlockBuilder();
    block.addInputBlock({
        element: block.newStaticSelectElement({
            placeholder: block.newPlainTextObject(
                "Enter your type of reminder"
            ),
            options: [
                {
                    text: block.newPlainTextObject("Once"),
                    value: "once",
                },
                {
                    text: block.newPlainTextObject("Recurring"),
                    value: "recurring",
                },
            ],
        }),
        label: block.newPlainTextObject("Type of reminder"),
    });
    block.addActionsBlock({
        elements: [
            block.newButtonElement({
                text: block.newPlainTextObject("Next"),
                actionId: ActionId.REMINDER_TYPE,
                style: ButtonStyle.PRIMARY,
            }),
        ],
    });

    return {
        id: viewId.TYPE,
        title: block.newPlainTextObject("Reminder Options"),
        blocks: block.getBlocks(),
    };
}
