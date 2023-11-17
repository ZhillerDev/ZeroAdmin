package com.zhiller.backend.controller;

import com.zhiller.backend.common.response.R;
import com.zhiller.backend.util.ResultUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
public class CoreController {
    @GetMapping("/alive")
    public R<String> isAlive() {
        return ResultUtil.success("服务器还活着");
    }

    @GetMapping("/login/code")
    public R<String> getLoginCode() {
        return ResultUtil.success(
                "https://dummyimage.com/600x300/5938ff/ffffff.png&text=good",
                "获取验证码成功"
        );
    }
}
