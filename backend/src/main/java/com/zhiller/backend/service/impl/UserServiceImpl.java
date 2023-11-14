package com.zhiller.backend.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.zhiller.backend.entity.User;
import com.zhiller.backend.mapper.UserMapper;
import com.zhiller.backend.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author zhiller
 * @since 2023-11-13
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {

    @Resource
    private UserMapper userMapper;

    @Override
    public IPage customPage(IPage<User> page) {
        return userMapper.customPage(page);
    }

    @Override
    public IPage wrapperPage(IPage<User> page, Wrapper wrapper) {
        return userMapper.wrapperPage(page, wrapper);
    }
}
