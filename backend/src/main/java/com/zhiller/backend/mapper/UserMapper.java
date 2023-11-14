package com.zhiller.backend.mapper;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.zhiller.backend.entity.User;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author zhiller
 * @since 2023-11-13
 */

@Mapper
public interface UserMapper extends BaseMapper<User> {
    IPage customPage(IPage<User> page);

    IPage wrapperPage(IPage<User> page, @Param(Constants.WRAPPER) Wrapper wrapper);
}
