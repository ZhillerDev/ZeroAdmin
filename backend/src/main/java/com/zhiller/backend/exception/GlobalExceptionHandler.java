package com.zhiller.backend.exception;

import com.zhiller.backend.common.ErrorCode;
import com.zhiller.backend.common.response.R;
import com.zhiller.backend.util.ResultUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * 全局异常处理器
 * Slf4j是用来记录日志信息的，lombok中自带的。
 */
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
    @ExceptionHandler(BusinessException.class)
    public R businessExceptionHandler(BusinessException e) {
        log.error("BusinessException" + e.getMessage(), e);
        //return new R(e.getCode(),e.getMessage(),e.getDescription());
        return ResultUtil.error(e.getCode(), e.getMessage(), e.getDescription());
    }

    @ExceptionHandler(RuntimeException.class)
    public R runtimeExceptionHandler(RuntimeException e) {
        //集中处理
        log.error("RuntimeException", e);
        return ResultUtil.error(ErrorCode.SYSTEM_ERROR, e.getMessage());
    }
}
