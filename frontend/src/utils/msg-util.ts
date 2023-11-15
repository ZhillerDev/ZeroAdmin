import {MessagePlacementList, MessagePlugin, DialogPlugin} from "tdesign-vue-next";


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

export const dialogConfirm = (title:string,content:string,listener:()=>any) => {
    const dialog = DialogPlugin.confirm({
        header:title,
        body:content,
        onConfirm(){
            dialog.destroy()
            console.log("is destryo")
            listener()
        }
    })
    dialog.show()
}
