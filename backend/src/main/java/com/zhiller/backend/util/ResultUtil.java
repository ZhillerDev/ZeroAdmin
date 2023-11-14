package com.zhiller.backend.util;

import com.zhiller.backend.common.ErrorCode;
import com.zhiller.backend.common.response.R;

/**
 * 返回类型工具类
 *
 * @author zeng
 */
public class ResultUtil {

    /**
     * 成功
     *
     * @param data
     * @param <T>
     * @return
     */
    public static <T> R<T> success(T data) {
        return new R<>(0, data, "ok");
    }

    /**
     * 成功
     *
     * @param data
     * @return
     */
    public static R success(int data) {
        return new R(0, data, "ok");
    }

    /**
     * 失败
     *
     * @param errorCode
     * @return
     */
    public static R error(ErrorCode errorCode) {
        return new R<>(errorCode.getCode(), null, errorCode.getMessage(), errorCode.getDescription());
    }

    /**
     * 失败
     *
     * @param errorCode
     * @return
     */
    public static R error(ErrorCode errorCode, String message, String description) {
        return new R<>(errorCode.getCode(), description);
    }

    /**
     * 失败
     *
     * @param code
     * @return
     */
    public static R error(int code, String message, String description) {
        return new R<>(code, null, message, description);
    }

    /**
     * 失败
     *
     * @param errorCode
     * @return
     */
    public static R error(ErrorCode errorCode, String description) {
        return new R<>(errorCode.getCode(), null, errorCode.getMessage(), description);
    }

}
