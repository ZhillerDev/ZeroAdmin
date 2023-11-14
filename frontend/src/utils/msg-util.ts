import {MessagePlacementList, MessagePlugin} from "tdesign-vue-next";

export const msgSuccess = (title: string, placement: MessagePlacementList, duration: number) => {
    MessagePlugin.success({
        content: title,
        placement: placement,
        duration: duration
    })
}

export const msgError = (title: string, placement: MessagePlacementList, duration: number) => {
    MessagePlugin.error({
        content: title,
        placement: placement,
        duration: duration
    })
}