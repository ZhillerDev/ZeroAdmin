package com.zhiller.backend.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.zhiller.backend.common.ErrorCode;
import com.zhiller.backend.common.QueryPageParam;
import com.zhiller.backend.common.response.R;
import com.zhiller.backend.entity.User;
import com.zhiller.backend.service.IUserService;
import com.zhiller.backend.util.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author zhiller
 * @since 2023-11-13
 */
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private IUserService userService;

    @GetMapping("/getall")
    public R<List<User>> getAllUsers() {
        return ResultUtil.success(userService.list());
    }

    @PostMapping("/save")
    public R save(@RequestBody User user) {
        boolean save = userService.save(user);
        return save ? ResultUtil.success("成功新增数据") : ResultUtil.error(ErrorCode.SYSTEM_ERROR);
    }

    @PostMapping("/modify")
    public R modify(@RequestBody User user) {
        boolean save = userService.updateById(user);
        return save ? ResultUtil.success("成功更新数据") : ResultUtil.error(ErrorCode.SYSTEM_ERROR);
    }

    @PostMapping("/su")
    public R saveAndUpdate(@RequestBody User user) {
        boolean save = userService.saveOrUpdate(user);
        return save ? ResultUtil.success("成功新增并修改数据") : ResultUtil.error(ErrorCode.SYSTEM_ERROR);
    }

    @DeleteMapping("/del")
    public R save(Integer id) {
        boolean save = userService.removeById(id);
        return save ? ResultUtil.success("成功删除数据") : ResultUtil.error(ErrorCode.SYSTEM_ERROR);
    }

    @PostMapping("/likeusers")
    public R<List<User>> selectLikeUsers(@RequestBody User user) {
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.like(User::getName, user.getName());
        List<User> list = userService.list(queryWrapper);
        return ResultUtil.success(list);
    }

    @PostMapping("/pages")
    public R<List<User>> listPages(@RequestBody QueryPageParam pageParam) {
        Page<User> page = new Page<>();
        page.setCurrent(pageParam.getPageNum());
        page.setSize(pageParam.getPageSize());

        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.like(User::getName, pageParam.getParams().get("name"));

        IPage<User> paged = userService.page(page, queryWrapper);
        return ResultUtil.success(paged.getRecords());
    }
}
