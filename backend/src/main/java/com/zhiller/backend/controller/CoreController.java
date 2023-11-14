package com.zhiller.backend.controller;

import com.zhiller.backend.common.response.R;
import com.zhiller.backend.util.ResultUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoreController {
    @GetMapping("/alive")
    public R<String> isAlive(){
        return ResultUtil.success("服务器还活着");
    }
}
