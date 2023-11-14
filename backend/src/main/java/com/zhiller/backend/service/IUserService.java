package com.zhiller.backend.service;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.zhiller.backend.entity.User;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author zhiller
 * @since 2023-11-13
 */
public interface IUserService extends IService<User> {

    IPage customPage(IPage<User> page);

    IPage wrapperPage(IPage<User> page, Wrapper wrapper);
}
