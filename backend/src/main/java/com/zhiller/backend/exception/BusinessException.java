package com.zhiller.backend.exception;


import com.zhiller.backend.common.ErrorCode;
import lombok.Getter;

/**
 * 业务异常类
 * 继承RuntimeException异常处理类。
 */
@Getter
public class BusinessException extends RuntimeException {
    private int code;
    private String description;

    /**
     * 各种构造函数，供我们灵活的使用
     */
    public BusinessException(String message, int code, String description) {
        super(message);
        this.code = code;
        this.description = description;
    }

    public BusinessException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.code = errorCode.getCode();
        this.description = errorCode.getDescription();
    }

    public BusinessException(ErrorCode errorCode, String description) {
        super(errorCode.getMessage());
        this.code = errorCode.getCode();
        this.description = description;
    }

}
